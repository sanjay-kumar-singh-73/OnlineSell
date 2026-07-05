// import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiArrowRight } from 'react-icons/fi';

const bestSellers = [
  { id: 1, title: "Premium Wireless Headphones", price: "₹4,999", tag: "Best Seller", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 2, title: "Modern Smart Watch Series 7", price: "₹8,499", tag: "Trending", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
  { id: 3, title: "Ergonomic Mechanical Keyboard", price: "₹3,299", tag: "New Arrival", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500" },
];

const BestSellProduct = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-3">Best <span className="text-blue-500">Sellers</span></h2>
            <p className="text-slate-400">Discover the products our community loves the most.</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-bold transition-all">
            View All <FiArrowRight />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative bg-slate-800 rounded-3xl p-6 group cursor-pointer border border-slate-700 hover:border-blue-500 transition-all duration-300"
            >
              {/* Badge */}
              <div className="absolute top-8 left-8 z-10 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {product.tag}
              </div>

              <div className="overflow-hidden rounded-2xl h-80 mb-6">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                  <p className="text-blue-400 font-black text-xl">{product.price}</p>
                </div>
                <button className="bg-white/5 p-4 rounded-full hover:bg-blue-600 transition-colors">
                  <FiShoppingBag size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellProduct;