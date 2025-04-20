
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-technix-dark text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Technix<span className="text-technix-blue">CRM</span></h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Simplify customer relationships and boost productivity with our all-in-one CRM solution designed for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-technix-blue p-2 rounded-full transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-technix-blue p-2 rounded-full transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-technix-blue p-2 rounded-full transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-technix-blue p-2 rounded-full transition">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-300 hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Integrations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Updates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Careers</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition">Customers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Partners</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Community</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Webinars</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Technix CRM. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
