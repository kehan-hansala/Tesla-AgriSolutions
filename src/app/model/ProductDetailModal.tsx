// components/ProductDetailModal.tsx
import React, { useState } from 'react';
import { X, ShoppingCart, Check, Minus, Plus } from 'lucide-react';
import type { ProductDetailModalProps } from '../types/product';

type Unit = 'kg' | 'quintal' | 'ton';

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedUnit, setSelectedUnit] = useState<Unit>('kg');
  
  if (!isOpen) return null;

  const units: Unit[] = ['kg', 'quintal', 'ton'];
  const totalPrice = product.price * quantity * (
    selectedUnit === 'quintal' ? 100 : 
    selectedUnit === 'ton' ? 1000 : 1
  );

  const handleQuantityChange = (change: number): void => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleOrder = (): void => {
    alert(`Order placed!\nProduct: ${product.name}\nQuantity: ${quantity} ${selectedUnit}\nTotal: Rs:${totalPrice.toLocaleString()}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Product Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Product Image Gallery */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
              <div className="grid grid-cols-4 gap-2 mt-4">
                {product.images?.map((img, i) => (
                  <img 
                    key={i}
                    src={img} 
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-20 object-cover rounded border-2 border-gray-200 hover:border-green-500 cursor-pointer transition-colors"
                  />
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              <p className="text-gray-600 text-lg mb-6">{product.description}</p>

              {/* Features */}
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Key Features:</h3>
                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Details */}
              {product.specifications && (
                <div className="border border-gray-200 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Specifications:</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key}>
                        <span className="text-gray-500">{key}:</span>
                        <p className="font-medium">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Price */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  Rs:{product.price}/kg
                </div>
                <p className="text-gray-500 text-sm">Price may vary based on quantity</p>
              </div>
            </div>
          </div>

          {/* Order Section */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Place Your Order</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="flex-1 text-center border-none focus:outline-none focus:ring-0"
                  />
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Unit */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Unit
                </label>
                <select
                  value={selectedUnit}
                  onChange={(e) => setSelectedUnit(e.target.value as Unit)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {units.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit.charAt(0).toUpperCase() + unit.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Total Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Price
                </label>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <span className="text-2xl font-bold text-green-600">
                    Rs:{totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleOrder}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                Place Order
              </button>
              <button
                onClick={onClose}
                className="px-8 py-4 border-2 border-gray-300 hover:border-gray-400 rounded-lg font-semibold text-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;