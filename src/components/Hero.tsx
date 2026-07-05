import { motion } from "framer-motion";
import { FiArrowRight, FiShoppingBag,  } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24">
      {/* Background Orbs */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl" />
      <div className="absolute bottom-0 -right-24 h-96 w-96 rounded-full bg-indigo-200/50 blur-3xl" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center rounded-full bg-blue-600/10 px-4 py-1.5 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10">
            🔥 New Collection 2026
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Discover Premium <span className="text-blue-600">Shopping</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-lg">
            Shop the latest fashion, electronics, and gadgets with exclusive 
            offers and lightning-fast, carbon-neutral delivery.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800 hover:scale-105 active:scale-95">
              Shop Now <FiArrowRight />
            </button>
            <button className="rounded-full border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              Explore
            </button>
          </div>

          {/* Stats Grid */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-sm">
            {[ { label: "Happy Customers", val: "50K+" }, { label: "Products", val: "20K+" }, { label: "Rating", val: "4.9" } ].map((stat, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-slate-900">{stat.val}</h2>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
            alt="Product"
            className="relative z-10 w-full max-w-md rounded-4xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
          />

          {/* Floating Cards - Using backdrop-blur for premium feel */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -left-4 top-10 z-20 rounded-2xl bg-white/80 backdrop-blur-md p-4 shadow-xl border border-white/50"
          >
            <FiShoppingBag className="text-blue-600 mb-2" size={24} />
            <p className="text-sm font-bold">Free Shipping</p>
          </motion.div>

          <motion.div 
            animate={{ y: [10, -10, 10] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -right-4 bottom-10 z-20 rounded-2xl bg-white/80 backdrop-blur-md p-4 shadow-xl border border-white/50"
          >
            <p className="text-xl font-black text-blue-600">50%</p>
            <p className="text-xs font-bold text-slate-500">MEGA SALE</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;