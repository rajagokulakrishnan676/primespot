import React, { useState } from 'react';
import { MapPin, Phone, Clock, Car, Bus, Navigation, ChevronLeft, ChevronRight, X, Mail, MessageCircle } from 'lucide-react';

const Branches = () => {
  const [selectedBranch, setSelectedBranch] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const branches = [
    {
      id: 1,
      name: 'PrimeSpot Iyyapanthangal',
      address: '9/29, Pushpa Nagar,',
      city: 'Iyyapanthangal, Chennai, 60056',
      phone: '+91 7904636722',
      email: 'downtown@primespot.com',
      whatsapp: '+917904636722',
      hours: {
        weekdays: 'Monday - Friday: 7:00 AM - 8:00 PM',
        weekends: 'Saturday - Sunday: 8:00 AM - 6:00 PM'
      },
      features: [
        'Largest facility with all specialized equipment',
        'Hydrotherapy pool available',
        'Parking available',
        'Wheelchair accessible',
        'Public transit nearby'
      ],
      images: [
        'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7108334/pexels-photo-7108334.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Our flagship location in the heart of downtown, featuring state-of-the-art equipment and comprehensive rehabilitation facilities.'
    },
    {
      id: 2,
      name: 'PrimeSpot Valasaravakkam',
      address: '456 Oak Avenue, Westside Plaza',
      city: 'Metro City, MC 67890',
      phone: '+91 9894014087',
      email: 'westside@primespot.com',
      whatsapp: '+91 9894014087',
      hours: {
        weekdays: 'Monday - Friday: 7:00 AM - 8:00 PM',
        weekends: 'Saturday - Sunday: 8:00 AM - 6:00 PM'
      },
      features: [
        'Modern facility with latest equipment',
        'Sports rehabilitation center',
        'Free parking',
        'Family-friendly environment',
        'Evening appointments available'
      ],
      images: [
        'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'A modern facility specializing in sports rehabilitation and family care, with extended evening hours for your convenience.'
    },
    {
      id: 3,
      name: 'PrimeSpot Porur',
      address: '789 Pine Road, Northbrook Medical Center',
      city: 'Northbrook, NB 24680',
      phone: '+91 7904636722',
      email: 'northbrook@primespot.com',
      whatsapp: '+91 7904636722',
      hours: {
        weekdays: 'Monday - Friday: 7:00 AM - 8:00 PM',
        weekends: 'Saturday - Sunday: 8:00 AM - 6:00 PM'
      },
      features: [
        'Serene location with garden views',
        'Specialized in senior care',
        'Ample parking space',
        'Quiet treatment rooms',
        'Meditation and relaxation area'
      ],
      images: [
        'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5473961/pexels-photo-5473961.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7108334/pexels-photo-7108334.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'A peaceful location with beautiful garden views, specializing in senior care and providing a tranquil healing environment.'
    }
  ];

  const nextImage = () => {
    if (selectedBranch !== null) {
      const branch = branches.find(b => b.id === selectedBranch);
      if (branch) {
        setCurrentImageIndex((prev) => (prev + 1) % branch.images.length);
      }
    }
  };

  const prevImage = () => {
    if (selectedBranch !== null) {
      const branch = branches.find(b => b.id === selectedBranch);
      if (branch) {
        setCurrentImageIndex((prev) => (prev - 1 + branch.images.length) % branch.images.length);
      }
    }
  };

  const openBranchModal = (branchId: number) => {
    setSelectedBranch(branchId);
    setCurrentImageIndex(0);
  };

  const closeBranchModal = () => {
    setSelectedBranch(null);
    setCurrentImageIndex(0);
  };

  const selectedBranchData = branches.find(b => b.id === selectedBranch);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
              Our Branches
            </h1>
            <p className="text-xl opacity-90 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Three convenient locations across the metro area, each designed to provide exceptional physiotherapy care in a comfortable, modern environment.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Branch Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Choose Your Preferred Location
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Click on any branch to explore our facilities, view interior photos, and get detailed information.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div
                key={branch.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openBranchModal(branch.id)}
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={branch.images[0]}
                    alt={branch.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Click to explore</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {branch.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{branch.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="text-sm">{branch.address}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="text-sm">{branch.phone}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                      View Details →
                    </span>
                    <div className="flex space-x-1">
                      {branch.images.map((_, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-blue-600 transition-colors"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Modal */}
      {selectedBranch && selectedBranchData && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeInUp">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <button
                onClick={closeBranchModal}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
              
              {/* Image Gallery */}
              <div className="relative h-64 lg:h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedBranchData.images[currentImageIndex]}
                  alt={`${selectedBranchData.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Gallery Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
                
                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedBranchData.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedBranchData.name}</h2>
              <p className="text-gray-600 mb-6 text-lg">{selectedBranchData.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-700">{selectedBranchData.address}</p>
                        <p className="text-gray-700">{selectedBranchData.city}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <a href={`tel:${selectedBranchData.phone}`} className="text-blue-600 hover:text-blue-800">
                        {selectedBranchData.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <a href={`mailto:${selectedBranchData.email}`} className="text-blue-600 hover:text-blue-800">
                        {selectedBranchData.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                      <a href={`https://wa.me/${selectedBranchData.whatsapp}`} className="text-green-600 hover:text-green-800">
                        WhatsApp
                      </a>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-700">{selectedBranchData.hours.weekdays}</p>
                        <p className="text-gray-700">{selectedBranchData.hours.weekends}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Features & Amenities */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Features & Amenities</h3>
                  <ul className="space-y-2">
                    {selectedBranchData.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(selectedBranchData.address + ', ' + selectedBranchData.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={`tel:${selectedBranchData.phone}`}
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/${selectedBranchData.whatsapp}`}
                  className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Transportation Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Getting to Our Clinics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've made it easy to reach us whether you're driving or using public transportation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Car className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">By Car</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Free parking available at all locations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Wheelchair accessible parking spaces
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Easy access from major highways
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  GPS coordinates available for navigation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Valet parking at Downtown location
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <Bus className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Public Transit</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Bus stops within 2 blocks of all locations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Metro station access at Downtown location
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Bike racks available at all clinics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Ride-sharing pickup zones designated
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Senior transport services partnerships
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branches;