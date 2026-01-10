import { useState } from 'react';
import { Search, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'paddy', name: 'Seed Paddy' },
    { id: 'vegetables', name: 'Vegetable Seeds' },
    { id: 'hybrid', name: 'Hybrid Varieties' },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Basmati Paddy',
      category: 'paddy',
      image: 'https://images.unsplash.com/photo-1655903724829-37b3cd3d4ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwcGFkZHklMjBmaWVsZHxlbnwxfHx8fDE3NjgwMjExOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$45/kg',
      description: 'High-yield basmati variety with excellent aroma and grain length.',
      features: ['95% germination', 'Disease resistant', '120-day maturity'],
    },
    {
      id: 2,
      name: 'Hybrid Tomato Seeds',
      category: 'vegetables',
      image: 'https://images.unsplash.com/photo-1647553756926-21a62021b9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBzZWVkc3xlbnwxfHx8fDE3Njc5ODA4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$28/pack',
      description: 'Premium hybrid tomato seeds for commercial cultivation.',
      features: ['High yield', 'Pest resistant', '70-day harvest'],
    },
    {
      id: 3,
      name: 'Organic Wheat Seeds',
      category: 'paddy',
      image: 'https://images.unsplash.com/photo-1660439613402-856c754278c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkcyUyMGdyYWluc3xlbnwxfHx8fDE3NjgwMjExOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$35/kg',
      description: 'Certified organic wheat seeds for sustainable farming.',
      features: ['Organic certified', '90% germination', '150-day maturity'],
    },
    {
      id: 4,
      name: 'Sweet Corn Seeds',
      category: 'vegetables',
      image: 'https://images.unsplash.com/photo-1673200674067-1923f239194d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwY3JvcHMlMjBoYXJ2ZXN0fGVufDF8fHx8MTc2Nzk1NDQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$22/pack',
      description: 'Super sweet variety with excellent taste and texture.',
      features: ['Sweet variety', 'High sugar content', '80-day harvest'],
    },
    {
      id: 5,
      name: 'Hybrid Rice Paddy',
      category: 'hybrid',
      image: 'https://images.unsplash.com/photo-1655903724829-37b3cd3d4ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwcGFkZHklMjBmaWVsZHxlbnwxfHx8fDE3NjgwMjExOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$52/kg',
      description: 'Superior hybrid variety with maximum yield potential.',
      features: ['Hybrid vigor', 'Drought tolerant', '110-day maturity'],
    },
    {
      id: 6,
      name: 'Bell Pepper Seeds',
      category: 'vegetables',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZ3xlbnwxfHx8fDE3Njc5NDQ0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$32/pack',
      description: 'Colorful bell peppers with thick walls and great flavor.',
      features: ['Multiple colors', 'Thick walls', '75-day harvest'],
    },
    {
      id: 7,
      name: 'Long Grain Rice',
      category: 'paddy',
      image: 'https://images.unsplash.com/photo-1660439613402-856c754278c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkcyUyMGdyYWluc3xlbnwxfHx8fDE3NjgwMjExOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$38/kg',
      description: 'Premium long grain variety perfect for export quality.',
      features: ['Export quality', '94% germination', '130-day maturity'],
    },
    {
      id: 8,
      name: 'Cucumber Seeds',
      category: 'vegetables',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZ3xlbnwxfHx8fDE3Njc5NDQ0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$18/pack',
      description: 'Crisp and fresh cucumber variety for salads.',
      features: ['Crisp texture', 'High yield', '55-day harvest'],
    },
    {
      id: 9,
      name: 'Hybrid Wheat',
      category: 'hybrid',
      image: 'https://images.unsplash.com/photo-1673200674067-1923f239194d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwY3JvcHMlMjBoYXJ2ZXN0fGVufDF8fHx8MTc2Nzk1NDQ5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$48/kg',
      description: 'Advanced hybrid wheat with superior yield characteristics.',
      features: ['High protein', 'Disease resistant', '140-day maturity'],
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Premium quality seeds backed by years of research and testing
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <SlidersHorizontal className="text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-2xl font-bold text-green-700">{product.price}</span>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
