import React from 'react';
import { MapPin, Phone, Clock, Car, Bus, Navigation } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      name: 'PrimeSpot Iyyapanthangal',
      address: '9/29, Pushpa Nagar,',
      city: 'Iyyapanthangal, Chennai, 600056',
      phone: '+91 7904636722',
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
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'PrimeSpot Valasaravakkam',
      address: '456 Oak Avenue, Westside Plaza',
      city: 'Metro City, MC 67890',
      phone: '+91 9894014087',
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
      image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'PrimeSpot Porur',
      address: '789 Pine Road, Northbrook Medical Center',
      city: 'Northbrook, NB 24680',
      phone: '+91 7904636722',
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
      image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Locations
            </h1>
            <p className="text-xl opacity-90">
              Three convenient locations across the metro area, each designed to provide exceptional physiotherapy care in a comfortable, modern environment.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {locations.map((location, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{location.name}</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-700">{location.address}</p>
                        <p className="text-gray-700">{location.city}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <a href={`tel:${location.phone}`} className="text-blue-600 hover:text-blue-800">
                        {location.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-gray-700">{location.hours.weekdays}</p>
                        <p className="text-gray-700">{location.hours.weekends}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Features & Amenities</h3>
                    <ul className="space-y-2">
                      {location.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(location.address + ', ' + location.city)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Get Directions</span>
                    </a>
                    <a
                      href={`tel:${location.phone}`}
                      className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors flex items-center space-x-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All three locations are strategically positioned for easy access via public transportation and major highways.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">Interactive Google Maps</p>
                <p className="text-gray-500">Click on location cards below for directions</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">{location.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{location.address}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address + ', ' + location.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View on Google Maps →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Getting to Our Clinics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've made it easy to reach us whether you're driving or using public transportation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Car className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-800">By Car</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• Free parking available at all locations</li>
                <li>• Wheelchair accessible parking spaces</li>
                <li>• Easy access from major highways</li>
                <li>• GPS coordinates available for navigation</li>
                <li>• Valet parking at Downtown location</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Bus className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-800">Public Transit</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• Bus stops within 2 blocks of all locations</li>
                <li>• Metro station access at Downtown location</li>
                <li>• Bike racks available at all clinics</li>
                <li>• Ride-sharing pickup zones designated</li>
                <li>• Senior transport services partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;