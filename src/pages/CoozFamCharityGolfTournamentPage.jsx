import React from 'react';
import { Heart, Trophy } from 'lucide-react';

const CoozFamCharityGolfTournamentPage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Overview */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-red-900 text-white-100 p-6">
              <div className="flex items-center mb-4">
                <Trophy className="h-6 w-6 text-red-600 mr-2" />
                <h2 className="text-2xl font-bold">Cooz Fam Charity Golf Tournament</h2>
              </div>
              <p className="text-lg">
                Join us for the 1st Annual Cooz Fam Charity Golf Tournament on October 9, 2025, a fundraising event to support Malachi D&P’s transformative programs.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black-900 mb-4">Our Purpose</h3>
              <p className="mb-4">
                This tournament brings together sponsors, players, and supporters to raise funds and celebrate our mission of nurturing generational leaders.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sponsorship Opportunities */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black-900 mb-4">Sponsorship Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Support the tournament through sponsorships, featured in the Cooz Elite Souvenir Booklet.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black-900 mb-3">Golf Sponsorships</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Heritage Sponsor (Special Feature & Editorial Page)</li>
                <li>Presenting Sponsor (Special Feature & Editorial Page)</li>
                <li>Title Sponsor (Full Page Ad)</li>
                <li>Major Sponsor (Full Page Ad)</li>
                <li>Award Ceremony Sponsor (Full Page Ad)</li>
                <li>Photo Sponsor (Full Page Ad)</li>
                <li>Golf Cart Sponsor (Half Page Ad)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black-900 mb-3">On-Course Sponsorships</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Hole-In-One Sponsor (Half Page Ad)</li>
                <li>Longest Drive Sponsor (Half Page Ad)</li>
                <li>Closest To The Pin Sponsor (Half Page Ad)</li>
                <li>Executive Hole Sponsor (Half Page Ad)</li>
                <li>Driving Range Sponsor (Half Page Ad)</li>
                <li>Beverage Cart Sponsor (Half Page Ad)</li>
                <li>Hole Sponsor (Half Page Ad)</li>
                <li>Guess Your Distance Sponsor (Half Page Ad)</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Event Details */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black-900 mb-4">Event Details</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mark your calendars for October 9, 2025, and join us for a day of golf and community impact.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-2"><strong>Date:</strong> October 9, 2025</p>
            <p className="text-gray-700 mb-2"><strong>Sponsorship Recruitment:</strong> April–September 2025</p>
            <p className="text-gray-700">Contact Prince Couisnard or the Golfing Committee for more information.</p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-red-50 py-12 rounded-lg">
          <h2 className="text-3xl font-bold text-black-900 mb-4">Support the Golf Tournament</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Become a sponsor or participant to help fund our mission. Reach out to get involved.
          </p>
          <a
            href="mailto:info@malachidp.org"
            className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white-100 font-medium py-3 px-6 rounded-lg shadow transition"
          >
            <Heart className="h-5 w-5 mr-2" />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoozFamCharityGolfTournamentPage;