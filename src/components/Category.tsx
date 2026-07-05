import { motion } from 'framer-motion';
import { FiSmartphone, FiWatch, FiHeadphones, FiShoppingBag, FiCamera } from 'react-icons/fi';

const categories = [
  { name: "Electronics", icon: <FiSmartphone />, color: "bg-blue-500" },
  { name: "Watches", icon: <FiWatch />, color: "bg-indigo-500" },
  { name: "Audio", icon: <FiHeadphones />, color: "bg-purple-500" },
  { name: "Accessories", icon: <FiShoppingBag />, color: "bg-pink-500" },
  { name: "Cameras", icon: <FiCamera />, color: "bg-orange-500" },
];

const Category = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Shop by <span className="text-blue-600">Category</span>
          </h2>
          <p className="text-slate-500 text-lg">Explore our premium collections curated just for you.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:border-blue-200">
                <div className={`p-4 rounded-2xl ${cat.color} text-white mb-6 text-3xl`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-lg">{cat.name}</h3>
                <span className="text-blue-600 text-sm font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Browse Now →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;