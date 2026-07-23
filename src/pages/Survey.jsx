import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadData } from 'aws-amplify/storage';
import { generateClient } from 'aws-amplify/data';

const client = generateClient();

const Survey = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    participantType: '',
    otherParticipantType: '',
    years: '',
    involvement: '',
    story: '',
    firstEncounter: '',
    positiveResults: '',
    inspiration: '',
  });

  const [files, setFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter(
      (file) =>
        file.size <= 10 * 1024 * 1024 &&
        (file.type.startsWith('image/') || file.type.startsWith('video/'))
    );
    setFiles(validFiles);
    if (validFiles.length !== selectedFiles.length) {
      setUploadStatus('Some files were skipped (max 10MB, images/videos only).');
    } else {
      setUploadStatus('');
    }
  };

  const uploadFiles = async () => {
    const uploadedPaths = [];

    for (const file of files) {
      try {
        const path = `testimonies/${Date.now()}-${file.name}`;
        const result = await uploadData({
          path,
          data: file,
          options: {
            contentType: file.type,
          },
        }).result;

        uploadedPaths.push(result.path);
      } catch (error) {
        console.error('Upload error:', error);
        setUploadStatus('File upload failed');
        return [];
      }
    }

    return uploadedPaths;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('Submitting...');

    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.story) {
      setSubmitStatus('Please fill required fields (Name, Phone, and Story Type).');
      return;
    }

    try {
      const filePaths = await uploadFiles();

      const { errors } = await client.models.Testimony.create({
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        participantType: formData.participantType || null,
        otherParticipantType: formData.otherParticipantType || null,
        years: formData.years || null,
        involvement: formData.involvement || null,
        story: formData.story,
        firstEncounter: formData.firstEncounter || null,
        positiveResults: formData.positiveResults || null,
        inspiration: formData.inspiration || null,
        uploadedFiles: filePaths,
      });

      if (errors) {
        console.error(errors);
        setSubmitStatus('Error submitting form. Please try again.');
        return;
      }

      setSubmitStatus('Form submitted successfully!');

      // Donation redirect logic
      if (formData.story === 'Individual') {
        navigate('/donate', {
          state: {
            donationType: 'one-time',
            donationAmount: '150',
            donationReason: 'Individual Souvenir Booklet Feature',
          },
        });
      } else if (formData.story === 'Couple') {
        navigate('/donate', {
          state: {
            donationType: 'one-time',
            donationAmount: '300',
            donationReason: 'Couple Souvenir Booklet Feature',
          },
        });
      } else {
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          participantType: '',
          otherParticipantType: '',
          years: '',
          involvement: '',
          story: '',
          firstEncounter: '',
          positiveResults: '',
          inspiration: '',
        });
        setFiles([]);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('Error submitting form. Please try again.');
    }
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    const printContent = `
      <html>
        <head>
          <title>Testimony Responses</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 30px; line-height: 1.6; }
            h1 { color: #7f1d1d; text-align: center; }
            .section { margin-bottom: 20px; }
            .label { font-weight: bold; color: #333; }
          </style>
        </head>
        <body>
          <h1>ICY / MDP / Cooz Testimony</h1>
          <div class="section">
            <p><span class="label">Name:</span> ${formData.firstName} ${formData.lastName}</p>
            <p><span class="label">Phone:</span> ${formData.phone}</p>
            <p><span class="label">Role:</span> ${formData.participantType} ${
              formData.otherParticipantType ? `(${formData.otherParticipantType})` : ''
            }</p>
            <p><span class="label">Years Involved:</span> ${formData.years}</p>
            <p><span class="label">Involvement:</span> ${formData.involvement}</p>
            <p><span class="label">Story Type:</span> ${formData.story}</p>
          </div>
          <div class="section">
            <p><span class="label">First Encounter:</span><br>${formData.firstEncounter}</p>
            <p><span class="label">Positive Impact:</span><br>${formData.positiveResults}</p>
            <p><span class="label">Inspiration to Give Back:</span><br>${formData.inspiration}</p>
          </div>
        </body>
      </html>`;
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-red-900 mb-2">Share Your Story</h1>
          <p className="text-gray-600">
            Takes about <strong>3 minutes</strong> • Your story helps celebrate our legacy
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
          {/* 1. Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-red-900 mb-4">Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>

          {/* 2. Your Involvement */}
          <div>
            <h2 className="text-lg font-semibold text-red-900 mb-4">Your Involvement</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Were you a participant or parent/guardian? *
              </label>
              <div className="flex flex-wrap gap-4">
                {['Parent/Guardian', 'Child'].map((opt) => (
                  <label key={opt} className="flex items-center">
                    <input
                      type="radio"
                      name="participantType"
                      value={opt}
                      checked={formData.participantType === opt}
                      onChange={handleInputChange}
                      className="mr-2 accent-red-600"
                    />
                    {opt}
                  </label>
                ))}
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="participantType"
                    value="Other"
                    checked={formData.participantType === 'Other'}
                    onChange={handleInputChange}
                    className="mr-2 accent-red-600"
                  />
                  Other:
                  <input
                    type="text"
                    name="otherParticipantType"
                    value={formData.otherParticipantType}
                    onChange={handleInputChange}
                    className="ml-2 p-2 border rounded w-40 text-sm"
                    placeholder="Please specify"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Years involved (e.g. 2015-2020)
                </label>
                <input
                  type="text"
                  name="years"
                  value={formData.years}
                  onChange={handleInputChange}
                  placeholder="2018-2023"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Organizations or programs you were part of
                </label>
                <input
                  type="text"
                  name="involvement"
                  value={formData.involvement}
                  onChange={handleInputChange}
                  placeholder="e.g. Athletics, Summer Camp, Leadership"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* 3. Story Type */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-red-900 mb-3">Story Type *</h2>
            <select
              name="story"
              value={formData.story}
              onChange={handleInputChange}
              required
              className="w-full p-4 border border-red-300 rounded-lg text-lg focus:ring-2 focus:ring-red-600"
            >
              <option value="">Select how you'd like to be featured...</option>
              <option value="Individual">Individual Feature in Souvenir Booklet – $150</option>
              <option value="Couple">Couple Feature in Souvenir Booklet – $300</option>
            </select>
            <p className="text-sm text-red-700 mt-2 font-medium">
              You’ll be redirected to complete your donation after submitting.
            </p>
          </div>

          {/* 4. Your Story */}
          <div>
            <h2 className="text-lg font-semibold text-red-900 mb-4">Your Story</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  What was your first experience like with the program? *
                </label>
                <textarea
                  name="firstEncounter"
                  value={formData.firstEncounter}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full p-3 border rounded-lg"
                  placeholder="How did it feel when you first got involved?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  What positive impact or changes did you experience? *
                </label>
                <textarea
                  name="positiveResults"
                  value={formData.positiveResults}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full p-3 border rounded-lg"
                  placeholder="How did it affect your life, confidence, or leadership?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  How has this inspired you to give back or help others? (optional)
                </label>
                <textarea
                  name="inspiration"
                  value={formData.inspiration}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Has it motivated you to serve or mentor others?"
                />
              </div>
            </div>
          </div>

          {/* 5. Media Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Photos or short videos (optional but encouraged)
            </label>
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="w-full p-3 border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-red-100 file:text-red-700"
            />
            <p className="text-xs text-gray-500 mt-1">
              Max 10MB per file • Will be considered for the Souvenir Booklet
            </p>
            {uploadStatus && <p className="text-sm text-green-600 mt-1">{uploadStatus}</p>}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl text-lg transition"
            >
              Submit My Story
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="flex-1 bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 rounded-xl text-lg transition"
            >
              Print My Responses
            </button>
          </div>

          {submitStatus && (
            <p className="text-center text-lg font-medium text-green-600">{submitStatus}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Survey;