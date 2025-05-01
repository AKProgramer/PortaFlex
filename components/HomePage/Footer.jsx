import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi"; // Email Icon
import { FiPhone } from "react-icons/fi"; // Phone Icon
import { MdLocationOn } from "react-icons/md"; 
export default function Footer() {
  return (
    <footer className="bg-footer text-white py-12 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Social Links */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4 font-recklessNeue">
            PortaFlex
          </h2>
          <div className="mb-6">
            <p className="text-gray-400">
              Transform your online presence with sleek and professional
              designs.
            </p>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <h3 className="font-medium text-lg mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="font-medium text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="font-medium text-lg mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-center md:justify-start text-gray-400">
              <HiMail size={20} className="mr-3" />
              <a
                href="mailto:info@powerfulechoes.org"
                className="hover:text-white"
              >
                info@powerfulechoes.org
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start text-gray-400">
              <MdLocationOn size={20} className="mr-3" />
              <span>123 Main Street, City, Country</span>
            </li>
            <li className="flex items-center justify-center md:justify-start text-gray-400">
              <FiPhone size={20} className="mr-3" />
              <span>555-555-5555</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
