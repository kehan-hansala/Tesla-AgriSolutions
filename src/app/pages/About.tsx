import { Award, Users, Target,CheckCircle2, Leaf } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Leaf,
      title: 'Quality First',
      description: 'We never compromise on seed quality, ensuring the highest germination rates and crop yields.',
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Your success is our mission. We provide comprehensive support throughout your farming journey.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Continuous research and development to bring you the latest agricultural technologies.',
    },
    {
      icon: Target,
      title: 'Sustainability',
      description: 'Committed to environmentally responsible farming practices for future generations.',
    },
  ];

  const milestones = [
    { year: '2003', event: 'Founded TESLA Agri Solutions' },
    { year: '2008', event: 'Achieved ISO 9001 certification' },
    { year: '2015', event: 'Expanded to 15 states nationwide' },
    { year: '2020', event: 'Launched hybrid seed varieties' },
    { year: '2024', event: 'Serving 50,000+ farmers' },
  ];

  const certifications = [
    'ISO 9001:2015 Certified',
    'USDA Organic Certified',
    'Seed Certification Standards',
    'Quality Management System',
    'Environmental Compliance',
    'International Standards',
  ];

  const team = [
    {
      name: 'Dr. Rajesh Kumara',
      role: 'Chief Agricultural Officer',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZ3xlbnwxfHx8fDE3Njc5NDQ0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Sarah Thompson',
      role: 'Director of Research',
      image: 'https://images.unsplash.com/photo-1688278526565-5bb028024473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBmaWVsZHxlbnwxfHx8fDE3NjgwMjExOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Michael Chen',
      role: 'Quality Assurance Manager',
      image: 'https://images.unsplash.com/photo-1673200674067-1923f239194d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwY3JvcHMlMjBoYXJ2ZXN0fGVufDF8fHx8MTc2Nzk1NDQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Leading the way in agricultural excellence since 2025
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At TESLA Agri Solutions, we are dedicated to empowering farmers with premium quality seeds and comprehensive agricultural support. Our mission is to contribute to global food security while promoting sustainable farming practices.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With over 20 years of experience in the agricultural industry, we combine traditional wisdom with modern technology to deliver seeds that consistently perform above expectations.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="text-4xl font-bold text-green-700 mb-2">20+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-700 mb-2">50K+</div>
                  <div className="text-gray-600">Happy Farmers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-700 mb-2">100+</div>
                  <div className="text-gray-600">Seed Varieties</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-700 mb-2">25</div>
                  <div className="text-gray-600">States Served</div>
                </div>
              </div>
            </div>
            <div className="h-96 rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1688278526565-5bb028024473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBmaWVsZHxlbnwxfHx8fDE3NjgwMjExOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Agriculture field"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-green-200 pl-8 ml-6">
                  <div className="text-2xl font-bold text-green-700 mb-2">{milestone.year}</div>
                  <p className="text-lg text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
            <p className="text-xl text-gray-600">Committed to the highest quality standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-3">
                <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />
                <span className="text-gray-800 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600">Leaders in agricultural innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
