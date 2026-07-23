import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Book, Trophy } from 'lucide-react';

const CampaignPage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black-900 mb-4">Our Campaigns</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            MDP’s campaigns drive transformative change, empowering youth and families through targeted initiatives that foster leadership, growth, and community impact.
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>
        
        {/* Transforming Lives Through Action - Burgundy with white text */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-red-900 text-white p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-red-600 mr-2" />
                <h2 className="text-2xl font-bold">Transforming Lives Through Action</h2>
              </div>
              <p className="text-lg text-white">
                Our campaigns are strategic initiatives designed to address specific community needs, from leadership training to community engagement. Each campaign reflects our commitment to nurturing generational leaders who inspire positive change.
              </p>
            </div>
            <div className="p-6">
              <p className="mb-4">
                From fundraising to community engagement efforts, we partner with communities, donors, and volunteers to create lasting impact. Explore our campaigns below to learn how you can get involved.
              </p>
            </div>
          </div>
        </div>
        
        {/* Featured Campaigns */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black-900 mb-8 text-center">Featured Campaigns</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Cooz Fam M.O.B.E.C. Challenge */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-black-900">Cooz Fam M.O.B.E.C. Challenge</h3>
              </div>
              <p className="text-gray-700 mb-4">
                A seven-month initiative engaging families, friends, and communities to support our fundraising goals through targeted group challenges.
              </p>
              <Link
                to="/campaigns/cooz-fam-mobec-challenge"
                className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white font-medium py-2 px-4 rounded-lg shadow transition"
              >
                <Heart className="h-5 w-5 mr-2" />
                Learn More
              </Link>
            </div>
            
            {/* Cooz Legacy Souvenir Booklet */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Book className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-black-900">Cooz Legacy Souvenir Booklet</h3>
              </div>
              <p className="text-gray-700 mb-4">
                A commemorative booklet distributed at events, featuring ads and stories, with donation opportunities to support our mission.
              </p>
              <Link
                to="/campaigns/souvenir-booklet"
                className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white font-medium py-2 px-4 rounded-lg shadow transition"
              >
                <Heart className="h-5 w-5 mr-2" />
                Learn More
              </Link>
            </div>
            
            {/* Cooz Fam Charity Golf Tournament - Date removed */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Trophy className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-black-900">Cooz Fam Charity Golf Tournament</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our annual golf tournament raising funds through sponsorships and community participation.
              </p>
              <Link
                to="/campaigns/charity-golf-tournament"
                className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white font-medium py-2 px-4 rounded-lg shadow transition"
              >
                <Heart className="h-5 w-5 mr-2" />
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-red-50 py-12 rounded-lg">
          <h2 className="text-3xl font-bold text-black-900 mb-4">Join Our Campaigns</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Be a part of our mission to transform lives. Whether through participation, volunteering, or donations, your support fuels our campaigns.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white font-medium py-3 px-6 rounded-lg shadow transition"
          >
            <Heart className="h-5 w-5 mr-2" />
            Get Involved
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;