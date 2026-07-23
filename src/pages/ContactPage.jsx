import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyY24tdfHvSQSRr0ujJV9hq500Q1UBQYv_77AQV5qFqfi5DbB77pu8DXssK-JoTUIrm/exec';
// Replace with your actual deployed Apps Script web app URL

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    instagram: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    otherSocial: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // At least one contact method required: email OR phone
    if (!formData.email && !formData.phone) {
      setError('Please provide either an email address or phone number.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setIsSubmitting(false);
      setFormSubmitted(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        instagram: '',
        facebook: '',
        twitter: '',
        linkedin: '',
        otherSocial: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      setIsSubmitting(false);
      setError('There was a problem submitting your information. Please try again.');
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to learn more about our programs? Reach out, and we’ll be happy to connect.
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <div className="bg-red-900 text-white rounded-lg shadow-lg p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-800 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Send Us Mail</h3>
                    <p className="mt-1">
                      PO BOX 14012<br />
                      Houston, TX 77021<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-800 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="mt-1">
                      General Inquiries: info@malachidp.org<br />
                      Donations: donate@malachidp.org<br />
                      Volunteer: volunteer@malachidp.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-800 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="mt-1">
                      Main Number: (713) 875-1502
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - now more general */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700 mb-4">
                    Your information has been submitted successfully. We'll be in touch soon.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg shadow transition"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-red-900"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-red-900"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-red-900"
                      />
                    </div>
                  </div>

                  {/* Social Media Fields - optional */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="instagram">
                        Instagram Username
                      </label>
                      <input
                        type="text"
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleInputChange}
                        placeholder="@username"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-red-900"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="facebook">
                        Facebook Username / URL
                      </label>
                      <input
                        type="text"
                        id="facebook"
                        name="facebook"
                        value={formData.facebook}
                        onChange={handleInputChange}
                        placeholder="username or full URL"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-red-900"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="twitter">
                        Twitter / X Username
                      </label>
                      <input
                        type="text"
                        id="twitter"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleInputChange}
                        placeholder="@username"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-red-900"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="linkedin">
                        LinkedIn Profile
                      </label>
                      <input
                        type="text"
                        id="linkedin"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        placeholder="linkedin.com/in/username"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-red-900"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="otherSocial">
                        Other Social / Notes
                      </label>
                      <input
                        type="text"
                        id="otherSocial"
                        name="otherSocial"
                        value={formData.otherSocial}
                        onChange={handleInputChange}
                        placeholder="TikTok, YouTube, etc."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-red-900"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
                      Message / Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-red-900"
                    />
                  </div>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center bg-red-900 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg shadow transition w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Submit Contact Info
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <h2 className="text-2xl font-bold text-black-900 p-6">Our Location</h2>
            <div className="h-96 bg-gray-200">
              <div className="w-full h-full flex items-center justify-center bg-red-50">
                <p className="text-black-900">
                  Map integration would be implemented here with Google Maps or another mapping service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;