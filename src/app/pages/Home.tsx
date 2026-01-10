import { Link } from 'react-router-dom';
import { Sprout, Award, Users, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const features = [
    {
      icon: Sprout,
      title: 'Premium Quality Seeds',
      description: 'Certified and tested seeds with high germination rates for optimal yield.',
    },
    {
      icon: Award,
      title: 'Industry Standards',
      description: 'ISO certified and compliant with international quality standards.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated team of agricultural experts to guide you through your journey.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '20+ years of experience delivering superior crop performance.',
    },
  ];

  const products = [
    {
      name: 'Premium Basmati Paddy',
      category: 'Seed Paddy',
      image: 'https://images.unsplash.com/photo-1655903724829-37b3cd3d4ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwcGFkZHklMjBmaWVsZHxlbnwxfHx8fDE3NjgwMjExOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$45/kg',
    },
    {
      name: 'Hybrid Tomato Seeds',
      category: 'Vegetable Seeds',
      image: 'https://images.unsplash.com/photo-1647553756926-21a62021b9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBzZWVkc3xlbnwxfHx8fDE3Njc5ODA4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$28/pack',
    },
    {
      name: 'Organic Wheat Seeds',
      category: 'Seed Paddy',
      image: 'https://images.unsplash.com/photo-1660439613402-856c754278c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkcyUyMGdyYWluc3xlbnwxfHx8fDE3NjgwMjExOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$35/kg',
    },
  ];

  const testimonials = [
    {
      name: 'John Miller',
      role: 'Farm Owner',
      content: 'TESLA Agri Solutions has transformed my farming business. The quality of seeds and expert guidance has increased my yields by 40%.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Agricultural Consultant',
      content: 'Outstanding quality and reliability. I recommend TESLA Agri Solutions to all my clients for their seed requirements.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-green-900 to-green-700">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1688278526565-5bb028024473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBmaWVsZHxlbnwxfHx8fDE3NjgwMjExOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Agriculture field"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Premium Seeds for Sustainable Agriculture
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Quality seed paddy and vegetable seeds backed by 20+ years of agricultural expertise. Growing together for a better tomorrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <span>View Products</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TESLA Agri Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of farmers for premium quality seeds and unmatched agricultural support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Explore our premium selection of seeds</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-green-600 font-semibold">{product.category}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-700">{product.price}</span>
                    <Link
                      to="/products"
                      className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center space-x-1"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <span>View All Products</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Trusted by farmers across the country</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Grow Your Success?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our team of experts and discover how TESLA Agri Solutions can help you achieve better yields.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Get a Quote</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
