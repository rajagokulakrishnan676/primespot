import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      age: 45,
      condition: 'Knee Replacement Recovery',
      location: 'Downtown Location',
      rating: 5,
      text: "After my knee replacement surgery, I was terrified I'd never walk normally again. The team at PrimeSpot not only helped me regain my mobility but gave me confidence I never thought I'd have. Dr. Michael and his team are miracle workers. I'm now back to hiking and feeling better than I have in years!",
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Mark Thompson',
      age: 52,
      condition: 'Chronic Back Pain',
      location: 'Westside Location',
      rating: 5,
      text: "I suffered from chronic back pain for over 8 years. I tried everything - medications, injections, even considered surgery. Dr. David's holistic approach changed my life. Not only am I pain-free, but I understand my body better and know how to prevent future issues. Highly recommend!",
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Emily Davis',
      age: 28,
      condition: 'Sports Injury Recovery',
      location: 'Northbrook Location',
      rating: 5,
      text: "As a competitive runner, my ankle injury was devastating. PrimeSpot didn't just help me recover - they made me stronger than before. The personalized treatment plan and ongoing support were exceptional. I'm now running personal bests and have the tools to prevent future injuries.",
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Robert Chen',
      age: 67,
      condition: 'Stroke Recovery',
      location: 'Downtown Location',
      rating: 5,
      text: "After my stroke, I lost hope of ever being independent again. The neurological rehabilitation program at PrimeSpot brought me back to life. The patience, expertise, and encouragement from the entire team helped me regain my speech, balance, and confidence. I'm forever grateful.",
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Maria Rodriguez',
      age: 39,
      condition: 'Post-Surgery Rehabilitation',
      location: 'Westside Location',
      rating: 5,
      text: "Following my shoulder surgery, I was worried about returning to work as a teacher. PrimeSpot's post-surgery rehabilitation program was incredible. They understood my specific needs and created a plan that got me back to full function. Professional, caring, and effective!",
      image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'David Wilson',
      age: 34,
      condition: 'Work-Related Injury',
      location: 'Northbrook Location',
      rating: 5,
      text: "A workplace accident left me with severe lower back issues. I was facing months off work and potential disability. PrimeSpot's comprehensive approach not only got me back to work but taught me proper ergonomics and body mechanics. I'm now stronger and more aware of how to protect myself.",
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
              Patient Testimonials
            </h1>
            <p className="text-xl opacity-90 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Real stories from real patients who found healing and hope at PrimeSpot. These testimonials reflect our commitment to transforming lives through exceptional physiotherapy care.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group animate-fadeInUp">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">4.9/5</h3>
                <p className="text-gray-600 font-medium">Average Rating</p>
              </div>
            </div>
            
            <div className="group animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">98%</h3>
                <p className="text-gray-600 font-medium">Would Recommend</p>
              </div>
            </div>
            
            <div className="group animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-4xl font-bold text-green-600 mb-2">5000+</h3>
                <p className="text-gray-600 font-medium">Happy Patients</p>
              </div>
            </div>
            
            <div className="group animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-4xl font-bold text-orange-600 mb-2">95%</h3>
                <p className="text-gray-600 font-medium">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Featured Patient Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear directly from our patients about their journey to recovery and the impact PrimeSpot has had on their lives.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 animate-fadeInUp">
              <div className="flex items-center justify-center mb-8">
                <Quote className="w-20 h-20 text-blue-200" />
              </div>
              
              <div className="text-center mb-8">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg lg:text-xl text-gray-700 mb-8 italic leading-relaxed">
                  "{testimonials[currentSlide].text}"
                </p>
                
                <div className="flex items-center justify-center space-x-6">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-20 h-20 rounded-full object-cover shadow-lg"
                  />
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-800">{testimonials[currentSlide].name}</h3>
                    <p className="text-gray-600 font-medium">{testimonials[currentSlide].condition}</p>
                    <p className="text-sm text-blue-600">{testimonials[currentSlide].location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-2xl rounded-full p-4 hover:bg-gray-50 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-2xl rounded-full p-4 hover:bg-gray-50 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
            
            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              More Patient Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read more testimonials from patients who have experienced life-changing results at PrimeSpot.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 line-clamp-4 leading-relaxed">
                  "{testimonial.text.substring(0, 150)}..."
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.condition}</p>
                  </div>
                </div>
              </div>
            ))}
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
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied patients who have found relief and recovery at PrimeSpot. Your journey to better health starts with a single appointment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/book-appointment"
                className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Book Your Appointment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;