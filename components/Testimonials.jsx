'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Amal',
    role: 'Professor at Beni-Suef University',
    content: 'Malek developed an exceptional Telegram bot for our educational institution that has transformed how we deliver course materials and interact with students.Malek\'s attention to detail and understanding of educational technology made the development process smooth and efficient.',
    rating: 5
  },
  {
    id: 2,
    name: 'Olusola Adebayo',
    role: 'CEO, Crypto Trading Firm',
    content: 'Working with Malek has been a big help for our crypto trading operations. He developed a sophisticated Telegram bot along with three comprehensive web applications that help us manage trades, track orders, and analyze market data. The systems are reliable, secure, and have significantly improved our operational efficiency.',
    rating: 5
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
    >
      <div className="flex-1">
        <div className="text-purple-400 text-3xl mb-4">
          <FaQuoteLeft />
        </div>
        <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
      </div>
      <div className="mt-auto">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-slate-600'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
        <p className="text-sm text-slate-400">{testimonial.role}</p>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Client Testimonials
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Here's what my clients have to say about working with me on their projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
