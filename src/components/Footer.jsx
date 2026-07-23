import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-red-600" />
              <span className="text-lg font-semibold">MDP</span>
            </div>
            <p className="text-sm max-w-xs">Nurturing & guiding a generation of inner-city youth and families through meaningful experiences.</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h3 className="text-red-400 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-red-300 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-red-300 transition">About</Link></li>
              <li><Link to="/programs" className="hover:text-red-300 transition">Programs</Link></li>
              <li><Link to="/campaigns" className="hover:text-red-300 transition">Campaigns</Link></li>
              <li><Link to="/calendar" className="hover:text-red-300 transition">Calendar</Link></li>
              <li><Link to="/donate" className="hover:text-red-300 transition">Donate</Link></li>
              <li><Link to="/contact" className="hover:text-red-300 transition">Contact</Link></li>
            </ul>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h3 className="text-red-400 font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>PO BOX 14012, Houston, TX 77021</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(713) 875-1502</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-red-800 mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} Malachi Destiny & Purpose. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;