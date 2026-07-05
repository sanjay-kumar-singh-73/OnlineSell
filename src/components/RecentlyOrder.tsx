// import React from 'react';
import { motion } from 'framer-motion';
import { FiRotateCcw, FiTruck, FiCheckCircle } from 'react-icons/fi';

const recentOrders = [
  { id: 1, name: "Samsung Galaxy Buds Core", date: "July 02, 2026", status: "Delivered", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200" },
  { id: 2, name: "CMF Headphone Pro", date: "June 28, 2026", status: "Shipped", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200" },
  { id: 3, name: "Boat Rockerz Neckband", date: "June 15, 2026", status: "Delivered", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=200" },
];

const RecentlyOrder = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-slate-900 mb-8">Recently Ordered</h2>
        
        <div className="flex flex-col gap-4">
          {recentOrders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-6 p-4 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <img src={order.image} alt={order.name} className="w-20 h-20 rounded-2xl object-cover" />
              
              <div className="flex-1">
                <h3 className="font-bold text-lg text-slate-900">{order.name}</h3>
                <p className="text-slate-500 text-sm">{order.date}</p>
                <div className="flex items-center gap-2 mt-1">
                  {order.status === "Delivered" ? (
                    <span className="flex items-center gap-1 text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">
                      <FiCheckCircle /> {order.status}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-blue-600 text-xs font-bold bg-blue-50 px-2 py-1 rounded-full">
                      <FiTruck /> {order.status}
                    </span>
                  )}
                </div>
              </div>

              <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 hover:border-blue-600 hover:text-blue-600 font-semibold transition-colors">
                <FiRotateCcw size={16} /> Reorder
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyOrder;