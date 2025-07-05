import React from 'react';
import { Shield, Heart, Stethoscope, Target, Brain, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Bone Rehabilitation',
      description: 'Comprehensive treatment for bone injuries, fractures, and osteoporosis with evidence-based protocols.',
      features: [
        'Post-fracture rehabilitation',
        'Osteoporosis management',
        'Bone density improvement',
        'Fall prevention programs'
      ],
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Pain Management',
      description: 'Advanced pain relief techniques for chronic and acute conditions using multimodal approaches.',
      features: [
        'Chronic pain treatment',
        'Acute injury management',
        'Trigger point therapy',
        'Pain education programs'
      ],
      color: 'red'
    },
    {
      icon: Stethoscope,
      title: 'Sports Injury Recovery',
      description: 'Specialized rehabilitation for athletes and active individuals to return to peak performance.',
      features: [
        'Sport-specific rehabilitation',
        'Performance enhancement',
        'Injury prevention',
        'Return-to-play protocols'
      ],
      color: 'green'
    },
    {
      icon: Target,
      title: 'Musculoskeletal Therapy',
      description: 'Comprehensive treatment for muscle, joint, and soft tissue disorders and dysfunction.',
      features: [
        'Joint mobility restoration',
        'Muscle strengthening',
        'Soft tissue mobilization',
        'Postural correction'
      ],
      color: 'orange'
    },
    {
      icon: Brain,
      title: 'Neurological Rehabilitation',
      description: 'Specialized therapy for neurological conditions affecting movement and function.',
      features: [
        'Stroke rehabilitation',
        'Balance training',
        'Coordination improvement',
        'Gait training'
      ],
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'Post-Surgery Recovery',
      description: 'Comprehensive post-operative rehabilitation to restore function and accelerate healing.',
      features: [
        'Joint replacement recovery',
        'Surgical site healing',
        'Range of motion restoration',
        'Strength rebuilding'
      ],
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-100 to-blue-200 text-blue-600',
      red: 'from-red-100 to-red-200 text-red-600',
      green: 'from-green-100 to-green-200 text-green-600',
      orange: 'from-orange-100 to-orange-200 text-orange-600',
      purple: 'from-purple-100 to-purple-200 text-purple-600',
      teal: 'from-teal-100 to-teal-200 text-teal-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

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
              Our Services
            </h1>
            <p className="text-xl opacity-90 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Comprehensive physiotherapy services designed to restore your mobility, reduce pain, and enhance your quality of life through evidence-based treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${getColorClasses(service.color)} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Treatment Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a comprehensive, evidence-based approach to ensure the best possible outcomes for our patients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group animate-fadeInUp">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl group-hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Assessment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive evaluation of your condition, medical history, and functional goals.
                </p>
              </div>
            </div>
            
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl group-hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Diagnosis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Accurate identification of the root cause of your symptoms and functional limitations.
                </p>
              </div>
            </div>
            
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl group-hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Treatment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Personalized treatment plan using the most effective techniques for your condition.
                </p>
              </div>
            </div>
            
            <div className="text-center group animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl group-hover:scale-110 transition-transform">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Recovery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ongoing support and monitoring to ensure complete recovery and prevent re-injury.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Specializations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced techniques and specialized treatments that set us apart in the field of physiotherapy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 animate-fadeInUp">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Advanced Manual Therapy</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hands-on techniques including joint mobilization, soft tissue manipulation, and myofascial release for optimal healing.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-3" />
                  Joint mobilization and manipulation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-3" />
                  Soft tissue mobilization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-3" />
                  Myofascial release techniques
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-3" />
                  Trigger point therapy
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Therapeutic Exercise</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Customized exercise programs designed to improve strength, flexibility, balance, and functional movement patterns.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  Strength training protocols
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  Balance and coordination exercises
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  Flexibility and mobility work
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  Functional movement training
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Modalities & Technology</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                State-of-the-art equipment and therapeutic modalities to enhance healing and pain relief.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-600 mr-3" />
                  Ultrasound therapy
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-600 mr-3" />
                  Electrical stimulation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-600 mr-3" />
                  Heat and cold therapy
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-600 mr-3" />
                  Laser therapy
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Patient Education</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive education programs to empower patients with knowledge about their condition and self-management strategies.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-3" />
                  Condition-specific education
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-3" />
                  Home exercise programs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-3" />
                  Ergonomic training
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-3" />
                  Injury prevention strategies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Treatment?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Don't let pain or injury limit your potential. Our expert team is here to help you get back to doing what you love.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/book-appointment"
                className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Ask Questions</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;