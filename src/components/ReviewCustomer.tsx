// import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Verified Buyer",
    comment: "The delivery was lightning fast! The product quality exceeded my expectations. Highly recommended.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?u=1",
  },
  {
    id: 2,
    name: "Anjali Gupta",
    role: "Tech Enthusiast",
    comment: "Excellent experience. The interface of the website is smooth, and I received my order in perfect condition.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?u=2",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Regular Customer",
    comment: "Great customer service and amazing deals. Will definitely shop here again for future needs.",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?u=3",
  },
];

const ReviewCustomer = () => {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">What Our <span className="text-blue-600">Customers Say</span></h2>
          <p className="text-slate-500">Trusted by over 50,000+ happy shoppers worldwide.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow"
            >
              {/* Star Rating */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FiStar key={i} fill="currentColor" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-slate-600 italic mb-6">"{review.comment}"</p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCustomer;