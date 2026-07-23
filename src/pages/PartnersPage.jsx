import React from 'react';
import { Link } from 'react-router-dom'; // Added this import
import { Heart } from 'lucide-react';

const PartnersPage = () => {
  // Placeholder partners list; update this array with actual partners
  const partners = [
    {
      name: 'Partner Name 1',
      logo: '/api/placeholder/150/150',
      description: 'A valued partner supporting our mission to nurture youth and families.',
      website: 'https://example.com'
    },
    {
      name: 'Partner Name 2',
      logo: '/api/placeholder/150/150',
      description: 'Collaborating with us to inspire generational leadership.',
      website: 'https://example.com'
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black-900 mb-4">Our Partners</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re grateful for the organizations and individuals who join us in nurturing and guiding our community.
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>
        
        {/* Partners List */}
        <div className="max-w-4xl mx-auto">
          {partners.length === 0 ? (
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">
                We’re excited to grow our network of partners! Contact us to explore partnership opportunities.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center mt-4 bg-red-900 hover:bg-red-800 text-white-100 font-medium py-2 px-4 rounded-lg shadow transition"
              >
                <Heart className="h-5 w-5 mr-2" />
                Get in Touch
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <img src={partner.logo} alt={`${partner.name} logo`} className="w-24 h-24 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-black-900 mb-2">{partner.name}</h3>
                    <p className="text-gray-700 mb-2">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black-900 hover:text-black-800 font-medium"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
      

      </div>
    </div>
  );
};

export default PartnersPage;