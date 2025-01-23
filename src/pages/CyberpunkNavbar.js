import React from 'react';
import { Home, Image, Calendar, Menu } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from "../Asset/wlogo.png";

export default function CyberpunkNavbar() {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <nav className="relative bg-black border-b border-blue-500/20">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex cursor-pointer transform transition-transform duration-300 hover:scale-110 items-center space-x-2 text-2xl font-bold text-blue-400 glow-text">
          <img
            src={logo}
            alt="logo"
            className="w-7/12 h-10 object-contain "
          />
          <span title="Society of Automobile Engineers">SAE</span>
        </div>
        <ul className="hidden md:flex gap-8 text-blue-300">
          <li className="group relative">
            <Link to="/" className="flex items-center gap-2 group-hover:text-blue-500 transition">
              <Home size={20} /> Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link to="/gallery" className="flex items-center gap-2 group-hover:text-blue-500 transition">
              <Image size={20} /> Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link to="/events" className="flex items-center gap-2 group-hover:text-blue-500 transition">
              <Calendar size={20} /> Events
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link to="/sponsor" className="flex items-center gap-2 group-hover:text-blue-500 transition">
              <Calendar size={20} /> Sponsor
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all"></span>
            </Link>
          </li>
        </ul>
        {/* Call to Action Buttons */}
        <div className="hidden md:flex gap-4">
          <button
            className={`px-6 py-2 rounded-lg transition ${
              location.pathname === '/Meet-team'
                ? 'bg-gray-400 text-black' // Highlighted style for active page
                : 'bg-green-500 text-black hover:bg-green-600' // Default style
            }`}
            onClick={() => {
              nav("/Meet-team");
            }}
          >
            Meet the Team
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden">
          <Menu size={28} className="text-blue-300" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-black border-t border-blue-500/10 p-4">
        <ul className="space-y-4 text-blue-300">
          <li>
            <Link to="/" className="flex items-center gap-2">
              <Home size={20} /> Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="flex items-center gap-2">
              <Image size={20} /> Gallery
            </Link>
          </li>
          <li>
            <Link to="/events" className="flex items-center gap-2">
              <Calendar size={20} /> Events
            </Link>
          </li>
          <li className="group relative">
            <Link to="/sponsor" className="flex items-center gap-2 group-hover:text-blue-500 transition">
              <Calendar size={20} /> Sponsor
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
