import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the message
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center animate-fadeInUp">
          <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-md mx-auto">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Message Sent!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your message! We will get back to you within 24 hours.
            </p>
            <p className="text-sm text-gray-500">Redirecting you back...</p>
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
              Contact Us
            </h1>
            <p className="text-xl opacity-90 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Get in touch with our expert team. We're here to answer your questions and help you start your journey to better health.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group animate-fadeInUp">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-2">Emergency: +91 9894014087</p>
              <p className="text-gray-600">Main: +91 7904636722</p>
            </div>
            
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-2">info@primespot.com</p>
              <p className="text-gray-600">appointments@primespot.com</p>
            </div>
            
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-2">3 Locations</p>
              <p className="text-gray-600">Metro Area</p>
            </div>
            
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Hours</h3>
              <p className="text-gray-600 mb-2">Mon-Fri: 7AM-8PM</p>
              <p className="text-gray-600">Sat-Sun: 8AM-6PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg animate-fadeInUp">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="appointment">Appointment Request</option>
                      <option value="insurance">Insurance Questions</option>
                      <option value="services">Service Information</option>
                      <option value="billing">Billing Questions</option>
                      <option value="feedback">Other</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
              
              {/* Contact Information & Quick Actions */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Locations</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 group">
                      <MapPin className="w-6 h-6 text-blue-600 mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-gray-800">PrimeSpot Iyyapanthangal</h4>
                        <p className="text-gray-600">9/29, Pushpa Nagar,</p>
                        <p className="text-gray-600">Iyyapanthangal, Chennai, 600056</p>
                        <p className="text-blue-600 font-medium">+91 7904636722</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <MapPin className="w-6 h-6 text-blue-600 mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-gray-800">PrimeSpot Valasaravakkam</h4>
                        <p className="text-gray-600">456 Oak Avenue, Westside Plaza</p>
                        <p className="text-gray-600">Metro City, MC 67890</p>
                        <p className="text-blue-600 font-medium">+91 9894014087</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <MapPin className="w-6 h-6 text-blue-600 mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-gray-800">PrimeSpot Porur</h4>
                        <p className="text-gray-600">789 Pine Road, Northbrook Medical Center</p>
                        <p className="text-gray-600">Northbrook, NB 24680</p>
                        <p className="text-blue-600 font-medium">+91 7904636722</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Contact Options</h3>
                  
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/15551234567"
                      className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300 hover:scale-105 group"
                    >
                      <MessageCircle className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-semibold text-gray-800">WhatsApp</p>
                        <p className="text-sm text-gray-600">Chat with us instantly</p>
                      </div>
                    </a>
                    
                    <a
                      href="tel:+15551234567"
                      className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all duration-300 hover:scale-105 group"
                    >
                      <Phone className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-semibold text-gray-800">Call Now</p>
                        <p className="text-sm text-gray-600">Speak with our team</p>
                      </div>
                    </a>
                    
                    <a
                      href="mailto:info@primespot.com"
                      className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-all duration-300 hover:scale-105 group"
                    >
                      <Mail className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-sm text-gray-600">Send us an email</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fadeInUp">
            <h2 className="text-3xl font-bold mb-4">
              Emergency Contact
            </h2>
            <p className="text-lg mb-6 opacity-90">
              If you're experiencing a medical emergency, please call 911 immediately. For urgent physiotherapy concerns after hours, contact our emergency line.
            </p>
            <a
              href="tel:+15551234567"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Emergency: +91 7904636722</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;