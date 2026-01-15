import { useState } from 'react';
import { Products } from '../pages/Products';
import { CheckCircle } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  description: string;
  features: string[];
}


export default function ProductCard() {
  const [isModalOpen, setIsModalOpen,] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


  return (
    <>
    {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-800">Product Details</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
        
              </button>
            </div>
            
            <div className="p-6">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <h4 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedProduct.name}
              </h4>
              
              <p className="text-gray-600 text-lg mb-6">
                {selectedProduct.description}
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h5 className="font-semibold text-gray-800 mb-3 text-lg">Key Features:</h5>
                <div className="space-y-3">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 text-xl">Price per kg:</span>
                  <span className="text-4xl font-bold text-green-600">
                    {selectedProduct.price}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
                <textarea 
                  placeholder="Quantity & Additional Requirements"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                ></textarea>
                
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg transition-colors text-lg">
                  Submit Quote Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}




