
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Nile Wellness</h3>
            <p className="text-gray-300 max-w-xs">
              Your trusted partner for medical tourism in India. We connect international patients with top doctors and hospitals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/treatments" className="text-gray-300 hover:text-white transition-colors">Treatments</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-white transition-colors">Doctors</Link>
              </li>
              <li>
                <Link to="/hospitals" className="text-gray-300 hover:text-white transition-colors">Hospitals</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Popular Treatments */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Treatments</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/treatments/heart-bypass" className="text-gray-300 hover:text-white transition-colors">Heart Bypass Surgery</Link>
              </li>
              <li>
                <Link to="/treatments/knee-hip-replacement" className="text-gray-300 hover:text-white transition-colors">Knee & Hip Replacement</Link>
              </li>
              <li>
                <Link to="/treatments/cancer" className="text-gray-300 hover:text-white transition-colors">Cancer Treatment</Link>
              </li>
              <li>
                <Link to="/treatments/kidney-liver-transplant" className="text-gray-300 hover:text-white transition-colors">Kidney & Liver Transplant</Link>
              </li>
              <li>
                <Link to="/treatments/ivf-fertility" className="text-gray-300 hover:text-white transition-colors">IVF & Fertility</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-nile-400" />
                <p className="text-gray-300">123 Healthcare Avenue, New Delhi, India - 110001</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-nile-400" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-white transition-colors">+91 1234567890</a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-nile-400" />
                <a href="mailto:info@nilewellness.com" className="text-gray-300 hover:text-white transition-colors">info@nilewellness.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
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
