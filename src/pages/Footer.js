import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 relative border-t border-blue-500/30">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-8">
        {/* Logo and Description */}
        <div className="w-full md:w-1/3 space-y-4">
          <h2 className="text-3xl font-bold text-blue-400">SAE UIET PU</h2>
          <p className="text-sm text-blue-300">
            Driving Innovation and Engineering Excellence at Panjab University.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3 space-y-2">
          <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/about" className="hover:text-blue-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-500 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-blue-500 transition">
                Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-1/3 space-y-2">
          <h3 className="text-lg font-semibold text-blue-400">Connect with Us</h3>
          <div className="flex space-x-4">
            <Link to="#" className="text-blue-500 hover:text-blue-400">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#" className="text-blue-500 hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#" className="text-blue-500 hover:text-blue-400">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link to="#" className="text-blue-500 hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-blue-500/20 pt-4">
        <p className="text-sm text-blue-300">
          © {new Date().getFullYear()} SAE UIET PU. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
