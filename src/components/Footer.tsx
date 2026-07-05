// import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiGithub, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-black text-white mb-6">Pixelion.in</h2>
          <p className="mb-6 leading-relaxed">
            Premium shopping destination for the latest electronics, fashion, and lifestyle gadgets. Quality first.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:text-blue-500 transition"><FiFacebook size={20} /></a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:text-blue-500 transition"><FiTwitter size={20} /></a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:text-blue-500 transition"><FiInstagram size={20} /></a>
            <a href="https://github.com/sanjay-kumar-singh-73" target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-full hover:text-blue-500 transition"><FiGithub size={20} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Shop</h4>
          <ul className="space-y-4">
            {['Electronics', 'Fashion', 'Accessories', 'New Arrivals', 'Sale'].map((item) => (
              <li key={item}><a href="#" className="hover:text-white transition">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Support</h4>
          <ul className="space-y-4">
            {['Track Order', 'Returns', 'Shipping Info', 'FAQ', 'Privacy Policy'].map((item) => (
              <li key={item}><a href="#" className="hover:text-white transition">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3"><FiMail /> support@pixelion.in</li>
            <li className="flex items-center gap-3"><FiPhone /> +91 98765 43210</li>
            <li className="flex items-center gap-3"><FiMapPin /> New Delhi, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-sm">
        <p>© {new Date().getFullYear()} Pixelion. All rights reserved. Designed for Expert Coder.</p>
      </div>
    </footer>
  );
};

export default Footer;