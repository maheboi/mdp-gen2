import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import customIcon from '../images/custom-icon.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-red-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src={customIcon}
            alt="Malachi D&P Logo"
            className="h-20 w-20 object-contain"
          />
          <span className="text-xl font-bold">MDP | Generational Leadership</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-red-300 transition">Home</Link>
          <Link to="/about" className="hover:text-red-300 transition">About</Link>
          <Link to="/programs" className="hover:text-red-300 transition">Programs</Link>
          <Link to="/campaigns" className="hover:text-red-300 transition">Campaigns</Link>
          <Link to="/press" className="hover:text-red-300 transition">Press and Recognition</Link>
          <Link to="/calendar" className="hover:text-red-300 transition">Calendar</Link>
          <Link to="/donate" className="hover:text-red-300 transition">Donate</Link>
          <Link to="/contact" className="hover:text-red-300 transition">Contact</Link>
          <Link to="/survey" className="hover:text-red-300 transition">Testimony Form</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-red-800 text-white">
          <Link to="/" className="block py-2 hover:text-red-300 transition">Home</Link>
          <Link to="/about" className="block py-2 hover:text-red-300 transition">About</Link>
          <Link to="/programs" className="block py-2 hover:text-red-300 transition">Programs</Link>
          <Link to="/campaigns" className="block py-2 hover:text-red-300 transition">Campaigns</Link>
          <Link to="/press" className="block py-2 hover:text-red-300 transition">Press and Recognition</Link>
          <Link to="/calendar" className="block py-2 hover:text-red-300 transition">Calendar</Link>
          <Link to="/donate" className="block py-2 hover:text-red-300 transition">Donate</Link>
          <Link to="/contact" className="block py-2 hover:text-red-300 transition">Contact</Link>
          <Link to="/survey" className="block py-2 hover:text-red-300 transition">Testimony Form</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;