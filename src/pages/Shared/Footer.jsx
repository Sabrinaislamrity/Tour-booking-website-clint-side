import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
       <footer className="bg-green-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Website Name */}
        <div>
          <h3 className="text-2xl font-bold mb-2">🌱 PlantCare Tracker</h3>
          <p className="text-sm">
            Helping you care for your plants with ease and joy.
          </p>
        </div>

        {/* Middle - Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
          <p>Email: support@plantcaretracker.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Location: California, USA</p>
        </div>

        {/* Right - Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-green-300">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-green-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-green-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-green-300">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm mt-10 border-t border-green-800 pt-4">
        &copy; {new Date().getFullYear()} PlantCare Tracker. All rights reserved.
      </div>
    </footer>
    </div>
  );
};

export default Footer;