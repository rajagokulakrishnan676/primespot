import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Search, Tag } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'The Complete Guide to Bone Health: Prevention and Recovery',
      excerpt: 'Learn essential strategies for maintaining strong bones and preventing osteoporosis through proper nutrition, exercise, and lifestyle choices.',
      author: 'Dr. Karthikeyan PrimeSpot',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Bone Health',
      image: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 2,
      title: 'Post-Surgery Recovery: What to Expect and How to Prepare',
      excerpt: 'A comprehensive guide to post-surgical rehabilitation, including timeline expectations, exercises, and tips for optimal recovery.',
      author: 'Dr. Prakash PrimeSpot',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Recovery',
      image: 'https://images.pexels.com/photos/7108334/pexels-photo-7108334.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Sports Injuries: Prevention, Treatment, and Return to Play',
      excerpt: 'Everything athletes need to know about preventing injuries, proper treatment protocols, and safely returning to their sport.',
      author: 'Dr. Karthikeyan PrimeSpot',
      date: '2024-01-05',
      readTime: '12 min read',
      category: 'Sports Medicine',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Managing Chronic Pain: A Holistic Approach to Healing',
      excerpt: 'Discover evidence-based strategies for managing chronic pain, including physical therapy, lifestyle modifications, and mental health support.',
      author: 'Dr. Prakash PrimeSpot',
      date: '2024-01-01',
      readTime: '9 min read',
      category: 'Pain Management',
      image: 'https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      title: 'The Role of Exercise in Musculoskeletal Health',
      excerpt: 'Understanding how different types of exercise impact bone density, muscle strength, and overall musculoskeletal function.',
      author: 'Dr. Karthikeyan PrimeSpot',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Exercise',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      title: 'Age-Related Changes in Bone Health and How to Address Them',
      excerpt: 'Learn about natural age-related changes in bone density and practical strategies to maintain bone health throughout life.',
      author: 'Dr. Prakash PrimeSpot',
      date: '2023-12-25',
      readTime: '11 min read',
      category: 'Aging',
      image: 'https://images.pexels.com/photos/5473961/pexels-photo-5473961.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const categories = ['All', 'Bone Health', 'Recovery', 'Sports Medicine', 'Pain Management', 'Exercise', 'Aging'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
              Health & Wellness Blog
            </h1>
            <p className="text-xl opacity-90 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Expert insights, tips, and guidance from our experienced physiotherapists to help you maintain optimal bone and musculoskeletal health.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            {/* Categories Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fadeInUp">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Featured Article
              </h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fadeInUp">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                      <Tag className="w-4 h-4" />
                      <span>{featuredPost.category}</span>
                    </span>
                    <span className="text-orange-600 text-sm font-medium">Featured</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 text-sm">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 text-sm">{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 text-sm">{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 group">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest insights on bone health, physiotherapy, and wellness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 text-sm">{post.author}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest health tips, research insights, and updates from PrimeSpot.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;