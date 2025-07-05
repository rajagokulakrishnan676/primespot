import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle, Star } from 'lucide-react';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    date: '',
    time: '',
    insurance: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with proper async handling
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Appointment request:', formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setIsSubmitting(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          location: '',
          service: '',
          date: '',
          time: '',
          insurance: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Booking error:', error);
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center animate-fadeInUp">
          <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-md mx-auto">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Appointment Requested!</h2>
            <p className="text-gray-600 mb-6">
              Thank you! Your appointment request has been submitted. We will contact you within 24 hours to confirm your booking.
            </p>
            <div className="flex items-center justify-center space-x-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">Join 5000+ satisfied patients</p>
          </div>
        </div>
      </div>
    );
  }

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
              Book Your Appointment
            </h1>
            <p className="text-xl opacity-90 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Take the first step towards recovery. Schedule your consultation with our expert physiotherapists today.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 animate-fadeInUp">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Schedule Your Visit</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Location *
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    >
                      <option value="">Select a location</option>
                      <option value="downtown">PrimeSpot Downtown</option>
                      <option value="westside">PrimeSpot Westside</option>
                      <option value="northbrook">PrimeSpot Northbrook</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="consultation">Initial Consultation</option>
                      <option value="bone-rehab">Bone Rehabilitation</option>
                      <option value="pain-management">Pain Management</option>
                      <option value="sports-injury">Sports Injury Recovery</option>
                      <option value="post-surgery">Post-Surgery Recovery</option>
                      <option value="musculoskeletal">Musculoskeletal Therapy</option>
                      <option value="neurological">Neurological Rehabilitation</option>
                    </select>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                      >
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Insurance Provider
                    </label>
                    <select
                      name="insurance"
                      value={formData.insurance}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    >
                      <option value="">Select insurance</option>
                      <option value="aetna">Aetna</option>
                      <option value="bluecross">Blue Cross Blue Shield</option>
                      <option value="cigna">Cigna</option>
                      <option value="humana">Humana</option>
                      <option value="medicare">Medicare</option>
                      <option value="other">Other</option>
                      <option value="self-pay">Self Pay</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                      placeholder="Tell us about your condition, symptoms, or any specific concerns..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <span>Request Appointment</span>
                    )}
                  </button>
                </form>
              </div>
              
              {/* Info Panel */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">What to Expect</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">We'll confirm your appointment within 24 hours</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">Initial consultation includes comprehensive assessment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">Personalized treatment plan discussion</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">Insurance verification and payment options</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Need Immediate Help?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 group">
                      <Phone className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium text-gray-800">Call Us Now</p>
                        <a href="tel:+15551234567" className="text-green-600 hover:text-green-800 transition-colors">
                          +91 7904636722
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <Mail className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium text-gray-800">Email Us</p>
                        <a href="mailto:appointments@primespot.com" className="text-green-600 hover:text-green-800 transition-colors">
                          appointments@primespot.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Locations</h3>
                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-orange-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Primespot Iyyapanthangal</p>
                        <p>9/29, Pushpa Nagar,Iyyapanthangal, Chennai, 600056</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-orange-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Primespot valasaravakkam</p>
                        <p>456 Oak Avenue, Metro City</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-orange-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Primespot porur</p>
                        <p>789 Pine Road, Northbrook</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;