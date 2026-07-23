import React from 'react';
import { Circle, Heart } from 'lucide-react';

const CoozElitePage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Program Overview */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-red-900 text-white-100 p-6">
              <div className="flex items-center mb-4">
                <Circle className="h-6 w-6 text-red-600 mr-2" />
                <h2 className="text-2xl font-bold">About Cooz Elite</h2>
              </div>
              <p className="text-lg">
                Cooz Elite is a non-profit AAU boys’ basketball program for ages 15U–17U, competing on the PUMA/PRO16 circuit. Led by experienced coaches, we provide top-tier training to enhance athletic skills while fostering personal growth, leadership, and sportsmanship.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black-900 mb-4">Our Mission</h3>
              <p className="mb-4">
                We focus on holistic development, helping young athletes excel on the court and in life. Cooz Elite offers visibility to college scouts and builds confidence through teamwork and mentorship.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-black-900">Advanced Training</h4>
                  <p>High-level coaching to elevate basketball skills.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black-900">Personal Growth</h4>
                  <p>Cultivating leadership and self-improvement.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black-900">Competitive Play</h4>
                  <p>Competing in national tournaments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Code of Conduct */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black-900 mb-4">Cooz Elite Code of Conduct</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our code ensures a positive environment for players, parents, and coaches.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black-900 mb-3">Elite Players</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Play by the rules and show respect.</li>
                <li>Let coaches handle official disputes.</li>
                <li>Stay positive and supportive.</li>
                <li>Work hard and uplift teammates.</li>
                <li>Maintain academic standards.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black-900 mb-3">Elite Parents</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Encourage your child’s passion.</li>
                <li>Focus on effort, not just wins.</li>
                <li>Respect rules and officials.</li>
                <li>Support without criticism.</li>
                <li>Ensure timely fee payments.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black-900 mb-3">Elite Coaches</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Prioritize growth over winning.</li>
                <li>Support players’ mistakes.</li>
                <li>Ensure equal opportunities.</li>
                <li>Maintain safe facilities.</li>
                <li>Model professionalism.</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-red-50 py-12 rounded-lg">
          <h2 className="text-3xl font-bold text-black-900 mb-4">Join Cooz Elite</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Ready to grow as an athlete and leader? Contact us to join our program.
          </p>
          <a
            href="https://coozelitesports.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white-100 font-medium py-3 px-6 rounded-lg shadow transition"
          >
            <Heart className="h-5 w-5 mr-2" />
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoozElitePage;