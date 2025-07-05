import React from 'react';
import { Award, Users, Target, Heart, Clock, Shield, CheckCircle, Star } from 'lucide-react';

const About = () => {
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
              About PrimeSpot
            </h1>
            <p className="text-xl opacity-90 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Founded by two expert brothers with a shared vision of providing exceptional physiotherapy care and transforming lives through advanced bone and musculoskeletal therapy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInUp">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To provide world-class physiotherapy services that restore mobility, reduce pain, and enhance the quality of life for every patient we serve. We believe in personalized care that addresses the unique needs of each individual.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment extends beyond treatment – we educate, empower, and support our patients throughout their recovery journey, ensuring lasting results and improved well-being.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Evidence-based treatment protocols</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Personalized care plans for every patient</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Continuous education and support</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/7108334/pexels-photo-7108334.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Physiotherapy treatment at PrimeSpot"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-2xl font-bold text-gray-800">4.9/5</p>
                    <p className="text-sm text-gray-600">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Founders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Two brothers united by their passion for healing and their commitment to excellence in physiotherapy care.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp">
              <div className="text-center mb-6">
                <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-lg border-4 border-blue-200">
                  <img
                    src="/primespot/images/doctors/karthi.jpg" 
                    alt="Dr. Karthikeyan PrimeSpot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Dr. Karthikeyan PrimeSpot</h3>
                <p className="text-blue-600 font-semibold mb-4 text-lg">Co-Founder & Lead Physiotherapist</p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Education & Credentials</h4>
                  <p>PhD in Physiotherapy, Masters in Sports Medicine from Johns Hopkins University</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Experience</h4>
                  <p>12+ years specializing in bone rehabilitation and musculoskeletal therapy</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Certifications</h4>
                  <p>Board Certified Orthopedic Clinical Specialist, Certified Strength & Conditioning Specialist</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Specialties</h4>
                  <p>Sports injury rehabilitation, post-surgical recovery, manual therapy techniques</p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="italic">
                    Dr. Karthikeyan founded PrimeSpot with a vision to combine advanced medical knowledge with compassionate care. His innovative approaches to bone rehabilitation have helped thousands of patients regain their mobility and confidence.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="text-center mb-6">
                <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-lg border-4 border-green-200">
                  <img
                    src="/primespot/images/doctors/prakash.jpg"
                    alt="Dr. Prakash PrimeSpot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Dr. Prakash PrimeSpot</h3>
                <p className="text-blue-600 font-semibold mb-4 text-lg">Co-Founder & Pain Management Specialist</p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Education & Credentials</h4>
                  <p>Doctor of Physical Therapy, Masters in Pain Management from Harvard Medical School</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Experience</h4>
                  <p>12+ years expertise in pain management and chronic condition treatment</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Certifications</h4>
                  <p>Certified Pain Management Specialist, Dry Needling Certification</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Specialties</h4>
                  <p>Chronic pain management, neurological rehabilitation, holistic treatment approaches</p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="italic">
                    Dr. Prakash brings a unique perspective to pain management, focusing on holistic approaches that address both physical and emotional aspects of healing. His empathetic approach has transformed countless lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at PrimeSpot.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:-translate-y-2 transition-all duration-300 animate-fadeInUp">
              <div className="bg-gradient-to-br from-red-100 to-red-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Compassionate Care</h3>
              <p className="text-gray-600 leading-relaxed">
                We treat every patient with empathy, respect, and understanding, recognizing that healing involves both body and spirit.
              </p>
            </div>
            
            <div className="text-center group hover:-translate-y-2 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We continuously pursue the highest standards in treatment, technology, and patient outcomes through ongoing education and innovation.
              </p>
            </div>
            
            <div className="text-center group hover:-translate-y-2 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personalized Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Every treatment plan is tailored to the individual needs, goals, and lifestyle of each patient we serve.
              </p>
            </div>
            
            <div className="text-center group hover:-translate-y-2 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest ethical standards in all our interactions, treatments, and business practices.
              </p>
            </div>
            
            <div className="text-center group hover:-translate-y-2 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                We work closely with patients, families, and healthcare providers to ensure comprehensive and coordinated care.
              </p>
            </div>
            
            <div className="text-center group hover:-translate-y-2 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Commitment</h3>
              <p className="text-gray-600 leading-relaxed">
                We are dedicated to supporting our patients throughout their entire recovery journey and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to excellence and patient care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group animate-fadeInUp">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">5000+</h3>
                <p className="text-gray-600 font-medium">Patients Treated</p>
              </div>
            </div>
            
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-5xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">95%</h3>
                <p className="text-gray-600 font-medium">Success Rate</p>
              </div>
            </div>
            
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-5xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">15+</h3>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
            </div>
            
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-5xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">3</h3>
                <p className="text-gray-600 font-medium">Clinic Locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;