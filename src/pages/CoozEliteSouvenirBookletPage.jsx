import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Book } from 'lucide-react';

const CoozEliteSouvenirBookletPage = () => {
  const navigate = useNavigate();

  const handleDonationClick = (type, amount) => {
    // Navigate to donate page, passing donation type and amount via state
    navigate('/donate', { state: { donationType: type, donationAmount: amount } });
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Overview */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-red-900 text-white-100 p-6">
              <div className="flex items-center mb-4">
                <Book className="h-6 w-6 text-red-600 mr-2" />
                <h2 className="text-2xl font-bold">Cooz Legacy Souvenir Booklet</h2>
              </div>
              <p className="text-lg">
                The Cooz Legacy Souvenir Booklet is a commemorative publication distributed at the Cooz Fam Charity Golf Tournament and yearly MDP/Cooz events, featuring advertisements and stories of exceptional individuals.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black-900 mb-4">Our Purpose</h3>
              <p className="mb-4">
                This booklet raises funds through donation opportunities while celebrating the impact of our community, honoring those who contribute to our mission.
              </p>
            </div>
          </div>
        </div>
        
        {/* Donation Opportunities */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black-900 mb-4">Donation Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Support our mission by contributing to the Souvenir Booklet through advertisements and challenges.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Full Page Ad Card */}
            <div
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => handleDonationClick('Full Page Ad', '1000')}
            >
              <h3 className="text-xl font-semibold text-black-900 mb-3">$1,000 – Full Page Ad</h3>
              <p className="text-gray-700 mb-4">
                Feature a full-page advertisement in the Cooz Legacy Souvenir Booklet to support our mission.
              </p>
              <button className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white-100 font-medium py-2 px-4 rounded-lg shadow transition">
                <Heart className="h-5 w-5 mr-2" />
                Donate Now
              </button>
            </div>
            
            {/* Half Page Ad Card */}
            <div
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => handleDonationClick('Half Page Ad', '500')}
            >
              <h3 className="text-xl font-semibold text-black-900 mb-3">$500 – Half Page Ad</h3>
              <p className="text-gray-700 mb-4">
                Place a half-page ad in the booklet to contribute to our community efforts.
              </p>
              <button className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white-100 font-medium py-2 px-4 rounded-lg shadow transition">
                <Heart className="h-5 w-5 mr-2" />
                Donate Now
              </button>
            </div>
            
            {/* Couples Challenge Card */}
            <div
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => handleDonationClick('Couples Challenge', '300')}
            >
              <h3 className="text-xl font-semibold text-black-900 mb-3">$300 – Couples Challenge</h3>
              <p className="text-gray-700 mb-4">
                Include your picture on the Couples Page to support our mission.
              </p>
              <button className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white-100 font-medium py-2 px-4 rounded-lg shadow transition">
                <Heart className="h-5 w-5 mr-2" />
                Donate Now
              </button>
            </div>
            
            {/* Singles Challenge Card */}
            <div
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => handleDonationClick('Singles Challenge', '150')}
            >
              <h3 className="text-xl font-semibold text-black-900 mb-3">$150 – Singles Challenge</h3>
              <p className="text-gray-700 mb-4">
                Feature your picture in the booklet with a donation to this challenge.
              </p>
              <button className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white-100 font-medium py-2 px-4 rounded-lg shadow transition">
                <Heart className="h-5 w-5 mr-2" />
                Donate Now
              </button>
            </div>
            
            {/* Family & Friends Challenge Card */}
            <div
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => handleDonationClick('Family & Friends Challenge', '15')}
            >
              <h3 className="text-xl font-semibold text-black-900 mb-3">$15 – Family & Friends Challenge</h3>
              <p className="text-gray-700 mb-4">
                Join the Houston vs. Wichita challenge with a small donation to support us.
              </p>
              <button className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white-100 font-medium py-2 px-4 rounded-lg shadow transition">
                <Heart className="h-5 w-5 mr-2" />
                Donate Now
              </button>
            </div>
            
            {/* 10,500 City Challenge Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black-900 mb-3">10,500 City Challenge</h3>
              <p className="text-gray-700 mb-4">
                Houston (led by Prince Couisnard) vs. Wichita (led by PJ Couisnard’s friends) compete to raise $10,500 first. The winning city hosts our Leadership Banquet Event.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-red-50 py-12 rounded-lg">
          <h2 className="text-3xl font-bold text-black-900 mb-4">Contribute to the Souvenir Booklet</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Place an ad or join the City Challenge to support our programs. Contact us for details.
          </p>
          <a
            href="mailto:info@malachidp.org"
            className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white-100 font-medium py-3 px-6 rounded-lg shadow transition"
          >
            <Heart className="h-5 w-5 mr-2" />
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoozEliteSouvenirBookletPage;