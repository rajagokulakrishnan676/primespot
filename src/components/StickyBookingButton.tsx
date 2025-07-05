import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, Phone, MapPin } from 'lucide-react';

const StickyBookingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [nearestBranch, setNearestBranch] = useState('Downtown');

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    // Auto-detect nearest branch (mock implementation)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Mock logic - in real app, calculate distance to branches
          const branches = ['Downtown', 'Westside', 'Northbrook'];
          setNearestBranch(branches[Math.floor(Math.random() * branches.length)]);
        },
        () => {
          setNearestBranch('Downtown'); // Default fallback
        }
      );
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fadeInUp">
      <div className="flex flex-col space-y-3">
        {/* Nearest Branch Indicator */}
        <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200 animate-slideInLeft">
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="text-gray-700">Nearest: {nearestBranch}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-2">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/15551234567"
            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
            title="WhatsApp Us"
          >
            <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
          </a>
          
          {/* Phone Button */}
          <a
            href="tel:+15551234567"
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 group"
            title="Call Us"
          >
            <Phone className="w-6 h-6 group-hover:animate-pulse" />
          </a>
          
          {/* Book Appointment Button */}
          <Link
            to="/book-appointment"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group animate-pulse-custom"
            title="Book Appointment"
          >
            <Calendar className="w-7 h-7 group-hover:rotate-12 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyBookingButton;