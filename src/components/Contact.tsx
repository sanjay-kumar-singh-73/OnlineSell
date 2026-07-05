// import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-slate-500 text-lg">We'd love to hear from you. Send us a message!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 outline-none transition-all" />
                <input type="text" placeholder="Last Name" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 outline-none transition-all" />
              </div>
              <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 outline-none transition-all" />
              <textarea placeholder="Your Message"  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 outline-none transition-all"></textarea>
              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95">
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>

          {/* Right: Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { icon: <FiMail />, title: "Email Us", desc: "support@pixelion.in" },
              { icon: <FiPhone />, title: "Call Us", desc: "+91 98765 43210" },
              { icon: <FiMapPin />, title: "Office", desc: "New Delhi, India" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-xl text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;