import { motion } from 'framer-motion';
import { FiShoppingCart, FiStar } from 'react-icons/fi';

const products = [
  {
    id: 1,
    name: "Samsung Galaxy Buds Core",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Samsung Galaxy Buds Core",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
    rating: 4.8,
  },
  {
    id: 2,
    name: "CMF Headphone Pro",
    price: "₹5,999",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Boat Rockerz Neckband",
    price: "₹1,299",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Tech Travel Organizer",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    rating: 4.7,
  },
    {
    id: 23,
    name: "Boat Rockerz Neckband",
    price: "₹1,299",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
    rating: 4.5,
  },
  
];

const Product = () => {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">
          Featured <span className="text-blue-600">Products</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-5 shadow-lg border border-slate-100 group"
            >
              <div className="relative overflow-hidden rounded-2xl h-64 mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">{product.name}</h3>
              <div className="flex items-center gap-1 text-yellow-500 mb-3">
                <FiStar size={14} fill="currentColor" />
                <span className="text-sm font-semibold text-slate-600">{product.rating}</span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-black text-slate-900">{product.price}</span>
                <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                  <FiShoppingCart />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;