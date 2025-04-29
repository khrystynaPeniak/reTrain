import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5" />, href: "#" },
    { icon: <FaTwitter className="w-5 h-5" />, href: "#" },
    { icon: <FaInstagram className="w-5 h-5" />, href: "#" },
    { icon: <FaLinkedin className="w-5 h-5" />, href: "#" },
  ];

  const footerLinks = [
    { name: "About us", href: "/about" },
    { name: "Support", href: "/support" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <footer className="w-full">
      <div className="w-full bg-lime-400 py-6">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold dark:text-white">
                RecoverMove
              </h2>
            </div>
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              © Company 2025. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
