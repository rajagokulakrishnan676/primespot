import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, MessageCircle, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fadeInUp">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Activity className="w-10 h-10 text-blue-400" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  <span className="gradient-text">Prime</span>Spot
                </h3>
                <p className="text-sm text-gray-400">Precision Bone Care, At Every Spot</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading physiotherapy clinic network specializing in advanced bone and musculoskeletal therapy with expert care across 3 convenient locations.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-400">4.9/5 Patient Rating</span>
            </div>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-110" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-all duration-300 hover:scale-110" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-110" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Services</Link></li>
              <li><Link to="/branches" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Branches</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Testimonials</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Our Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Bone Rehabilitation</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Physical Therapy</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Orthopaedic</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Nutrition</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">General Medicine Consultants</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Pain Management</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Sports Injury Recovery</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Musculoskeletal Therapy</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Post-Surgery Recovery</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Preventive Care</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-blue-400 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-400 hover:text-white transition-colors">Emergency: +91 7904636722</p>
                  <p className="text-gray-400 hover:text-white transition-colors">Main: +91 9894014087</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 text-blue-400 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-400 hover:text-white transition-colors">info@primespot.com</p>
                  <p className="text-gray-400 hover:text-white transition-colors">appointments@primespot.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-gray-400 hover:text-white transition-colors">3 Locations in Metro Area</p>
              </div>
              <div className="flex items-start space-x-3 group">
                <Clock className="w-5 h-5 text-blue-400 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-400 hover:text-white transition-colors">Mon-Fri: 7:00 AM - 8:00 PM</p>
                  <p className="text-gray-400 hover:text-white transition-colors">Sat-Sun: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-6 group">
                <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                <a href="https://wa.me/15551234567" className="text-green-400 hover:text-green-300 transition-colors">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PrimeSpot Physiotherapy Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;