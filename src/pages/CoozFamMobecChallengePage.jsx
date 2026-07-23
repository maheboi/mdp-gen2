import React from 'react';
import { Heart } from 'lucide-react';

const CoozFamMobecChallengePage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Overview */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-red-900 text-white-100 p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-red-600 mr-2" />
                <h2 className="text-2xl font-bold">Cooz Fam M.O.B.E.C. Challenge</h2>
              </div>
              <p className="text-lg">
                The Cooz Fam M.O.B.E.C. Challenge is a seven-month initiative (April–October) to engage targeted groups in supporting the financial goals of the Cooz Fam Charity Golf Tournament and the Cooz Legacy Souvenir Booklet.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black-900 mb-4">Our Mission</h3>
              <p className="mb-4">
                By mobilizing families, friends, and communities, the M.O.B.E.C. Challenge fosters collective action to fund transformative programs, building on the legacy of Malachi D&P’s leadership initiatives.
              </p>
            </div>
          </div>
        </div>
        
        {/* Challenge Details */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black-900 mb-4">Challenge Details</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Running from April to October, the M.O.B.E.C. Challenge recruits targeted groups to drive fundraising efforts.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black-900 mb-3">Targeted Groups</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Family and friends of Prince and PJ Couisnard</li>
                <li>Former participants from ICY, Forge, and Malachi D&P</li>
                <li>Parents of Cooz Elite and other programs</li>
                <li>Churches, businesses, and youth groups</li>
                <li>College communities (e.g., WSU alumni, coaches)</li>
                <li>High-leverage individuals with proven impact</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black-900 mb-3">Recruitment Strategy</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Leverage past inner-city youth program connections</li>
                <li>Reconnect with communities that hosted our events</li>
                <li>Engage key individuals who shaped participants</li>
                <li>Collaborate with high-character WSU affiliates</li>
                <li>Mobilize Prince and PJ’s personal networks</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black-900 mb-3">Wichita vs. Houston</h3>
              <p className="text-gray-700 mb-2">
                Houston (led by Prince Couisnard) vs. Wichita (led by PJ Couisnard’s friends) compete to raise funds first. The winning city gains recognition and supports our mission.
              </p>
              <p className="text-gray-700">
                Join the friendly rivalry and contribute to your city’s effort to drive the M.O.B.E.C. Challenge forward.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-red-50 py-12 rounded-lg">
          <h2 className="text-3xl font-bold text-black-900 mb-4">Join the M.O.B.E.C. Challenge</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Be a part of our fundraising movement. Contact us to learn how your group can contribute.
          </p>
          <a
            href="mailto:info@malachidp.org"
            className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white-100 font-medium py-3 px-6 rounded-lg shadow transition"
          >
            <Heart className="h-5 w-5 mr-2" />
            Get Involved
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoozFamMobecChallengePage;