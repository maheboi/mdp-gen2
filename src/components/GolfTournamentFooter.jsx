import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';

const GolfTournamentFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Brand & Mission */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="font-bold text-white text-2xl">Cooz Fam</div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Nurturing generational leadership through faith, sports, mentorship, and community.<br />
              Building a legacy that lasts — one swing, one life at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <div className="grid grid-cols-1 gap-y-3 text-sm">
              <Link to="/golftournament" className="hover:text-white transition">Home</Link>
              <Link to="/golftournament/about" className="hover:text-white transition">Our Story</Link>
              <Link to="/golftournament/donate" className="hover:text-white transition">Donate / Sponsor</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-red-500" />
                <div>
                  PO BOX 14012<br />
                  Houston, TX 77021
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500" />
                <a href="tel:7138751502" className="hover:text-white transition">(713) 875-1502</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Cooz Fam Golf Tournament • Malachi Destiny & Purpose • All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default GolfTournamentFooter;