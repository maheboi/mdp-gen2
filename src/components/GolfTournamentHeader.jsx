import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import coozIcon from '../images/coozelite.png';
import customIcon from '../images/custom-icon.jpg';

const GolfTournamentHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { to: '/golftournament', label: 'Home' },
    { to: '/golftournament/about', label: 'Our Story' },
    { to: '/golftournament/register', label: 'Register Tickets' },   // ← New
    { to: '/golftournament/donate', label: 'Donate / Sponsor' },
  ];

  return (
    <header 
      className={`bg-white shadow-sm z-50 transition-all duration-300 fixed w-full top-0 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/golftournament" className="flex items-center gap-3">
            <img src={coozIcon} alt="Cooz Fam" className="h-12 w-auto" />
            <img src={customIcon} alt="Custom Icon" className="h-10 w-auto" />
            <div>
              <div className="font-bold text-xl tracking-tight">Cooz Fam</div>
              <div className="text-xs text-gray-500 -mt-1">Golf Tournament</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-lg">
            {navLinks.map((link) => (
              <Link 
                key={link.to} 
                to={link.to} 
                className="hover:text-red-600 transition font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Sponsor Button */}
          <Link 
            to="/golftournament/donate" 
            className="hidden md:block bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Sponsor the Golf Tournament
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-6 bg-white">
            <div className="flex flex-col gap-6 text-lg px-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.to} 
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-red-600 transition"
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/golftournament/donate" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-red-700 text-white py-4 text-center rounded-2xl font-semibold mt-4"
              >
                Sponsor the Golf Tournament
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default GolfTournamentHeader;