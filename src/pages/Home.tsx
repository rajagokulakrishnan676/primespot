import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Users, MapPin, Clock, Shield, Heart, Stethoscope, ArrowRight, Play, CheckCircle } from 'lucide-react';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <div 
          ref={heroRef}
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 parallax"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="animate-fadeInUp">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  Precision Bone Care,
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    At Every Spot
                  </span>
                </h1>
              </div>
              
              <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                  Experience world-class physiotherapy at PrimeSpot. Our expert doctors specialize in advanced bone care and musculoskeletal therapy across 3 convenient locations.
                </p>
              </div>

              <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                  <Link
                    to="/book-appointment"
                    className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center flex items-center justify-center space-x-2"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/about"
                    className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 text-center flex items-center justify-center space-x-2"
                  >
                    <Play className="w-5 h-5" />
                    <span>Meet Our Doctors</span>
                  </Link>
                </div>
              </div>

              <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>5000+ Happy Patients</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>15+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="relative glassmorphism rounded-3xl p-8 animate-float">
                <img
                  src="https://images.pexels.com/photos/7108334/pexels-photo-7108334.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Expert physiotherapy session at PrimeSpot"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-800 font-semibold">4.9/5</span>
                  </div>
                  <p className="text-sm text-gray-600">Patient Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group animate-fadeInUp">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2 counter" data-target="5000">5000+</h3>
              <p className="text-gray-600 font-medium">Happy Patients</p>
            </div>
            
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">15+</h3>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">3</h3>
              <p className="text-gray-600 font-medium">Clinic Locations</p>
            </div>
            
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">4.9</h3>
              <p className="text-gray-600 font-medium">Patient Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive physiotherapy services designed to restore your mobility and enhance your quality of life through evidence-based treatments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Bone Rehabilitation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Specialized treatment for bone injuries, fractures, and musculoskeletal disorders with advanced therapy techniques.
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-2 group">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pain Management</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive pain relief solutions using evidence-based techniques and personalized treatment plans.
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-2 group">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sports Injury Recovery</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expert rehabilitation for sports injuries with focus on complete recovery and injury prevention.
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-2 group">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Meet Our Expert Doctors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded and led by two expert brothers with decades of combined experience in physiotherapy and musculoskeletal care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Dr. Michael */}
            <div className="group bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-3xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp">
              <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full shadow-lg border-4 border-blue-200">
                <img
                  src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Dr. Michael PrimeSpot"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-3">Dr. Karthikeyan PrimeSpot</h3>
              <p className="text-blue-600 font-semibold mb-4 text-lg">Co-Founder & Lead Physiotherapist</p>
              <p className="text-gray-600 leading-relaxed">
                12+ years specializing in bone rehabilitation and musculoskeletal therapy with advanced certifications in sports medicine and orthopedic care.
              </p>
            </div>
            
            {/* Dr. David */}
            <div className="group bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-3xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full shadow-lg border-4 border-green-200">
                <img
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Dr. David PrimeSpot"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-3">Dr. Prakash PrimeSpot</h3>
              <p className="text-blue-600 font-semibold mb-4 text-lg">Co-Founder & Pain Management Specialist</p>
              <p className="text-gray-600 leading-relaxed">
                12+ years expertise in pain management and post-surgical rehabilitation with focus on holistic patient care and innovative treatment approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real patients who found relief and recovery at PrimeSpot.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "After my knee surgery, I thought I'd never walk normally again. The team at PrimeSpot worked miracles. I'm now back to hiking and feeling better than ever!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">SJ</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Knee Rehabilitation Patient</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "The doctors here are incredibly knowledgeable and caring. They explained everything clearly and helped me understand my condition. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-green-600 font-semibold">MT</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Mark Thompson</p>
                  <p className="text-sm text-gray-600">Back Pain Treatment</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "Professional, clean facilities and excellent staff. The personalized treatment plan they created for me worked perfectly. I'm pain-free now!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">ED</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Emily Davis</p>
                  <p className="text-sm text-gray-600">Sports Injury Recovery</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/testimonials"
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>View All Testimonials</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Don't let pain hold you back. Book your appointment today and take the first step towards a pain-free life with our expert physiotherapy team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/book-appointment"
                className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;