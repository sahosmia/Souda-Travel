import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <h2 className="text-lg font-bold mb-4">Your Company</h2>
            <p className="text-gray-400">
              We provide exceptional services to help you achieve your goals.
              Contact us to learn more about our offerings.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-300">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-300">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-300">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe and Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 mb-4 text-black rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 py-2 rounded-md text-white hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="hover:text-blue-500">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-pink-500">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-700">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-gray-500">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
