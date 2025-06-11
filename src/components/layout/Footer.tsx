import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">Nile Wellness</h3>
            <p className="text-gray-300 max-w-xs">
              Your trusted partner for medical tourism in India. We connect international patients with top doctors and hospitals.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-3 mt-6">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nile-400 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nile-400 rounded-full mr-2"></span>
                  Treatments
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nile-400 rounded-full mr-2"></span>
                  Doctors
                </Link>
              </li>
              <li>
                <Link to="/hospitals" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nile-400 rounded-full mr-2"></span>
                  Hospitals
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nile-400 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nile-400 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Treatments */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">Popular Treatments</h3>
            <ul className="space-y-3 mt-6">
              <li>
                <Link to="/treatments/heart-bypass" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nile-400 rounded-full mr-2"></span>
                  Heart Bypass Surgery
                </Link>
              </li>
              <li>
                <Link to="/treatments/knee-hip-replacement" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nile-400 rounded-full mr-2"></span>
                  Knee & Hip Replacement
                </Link>
              </li>
              <li>
                <Link to="/treatments/cancer" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nile-400 rounded-full mr-2"></span>
                  Cancer Treatment
                </Link>
              </li>
              <li>
                <Link to="/treatments/kidney-liver-transplant" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nile-400 rounded-full mr-2"></span>
                  Kidney & Liver Transplant
                </Link>
              </li>
              <li>
                <Link to="/treatments/ivf-fertility" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-nile-400 rounded-full mr-2"></span>
                  IVF & Fertility
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">Contact Us</h3>
            <div className="space-y-4 mt-6">
              <div className="flex items-start group">
                <MapPin className="mr-3 h-5 w-5 text-nile-400 flex-shrink-0 mt-1 group-hover:text-white transition-colors" />
                <p className="text-gray-300 group-hover:text-white transition-colors">123 Healthcare Avenue, New Delhi, India - 110001</p>
              </div>
              <div className="flex items-center group">
                <Phone className="mr-3 h-5 w-5 text-nile-400 flex-shrink-0 group-hover:text-white transition-colors" />
                <a href="tel:+918076036335" className="text-gray-300 group-hover:text-white transition-colors">+91 80760 36335</a>
              </div>
              <div className="flex items-center group">
                <Mail className="mr-3 h-5 w-5 text-nile-400 flex-shrink-0 group-hover:text-white transition-colors" />
                <a href="mailto:care@nilewellness.com" className="text-gray-300 group-hover:text-white transition-colors">care@nilewellness.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Nile Wellness. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/faq" className="text-gray-400 text-sm hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
