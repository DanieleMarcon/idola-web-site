import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onChatbotToggle: () => void;
}

export default function Navbar({ onChatbotToggle }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">TechVision</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            <Link to="/tutorial" className="text-gray-700 hover:text-blue-600 transition-colors">Tutorial</Link>
            <button
              onClick={onChatbotToggle}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Bot className="h-5 w-5" />
              <span>AI Chat</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            <Link to="/tutorial" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Tutorial</Link>
            <button
              onClick={onChatbotToggle}
              className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2"
            >
              <Bot className="h-5 w-5" />
              <span>AI Chat</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}