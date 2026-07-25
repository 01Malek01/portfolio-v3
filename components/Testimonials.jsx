'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiMessageCircle, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

const testimonials = [
  {
    quote: "I really appreciate the Telegram bot you built for my fabric store — it automated the entire ordering process and made managing customer requests so much easier. The website looks great too. Grateful for the work you did.",
    author: "Omar Elnawam",
    role: "Fabric Store Owner",
  },
  {
    quote: "The Telegram bot you created for our students has been incredibly helpful. It made studying and reviewing so much more accessible and organized. Thank you for your hard work and dedication.",
    author: "Dr. Amal",
    role: "Educator",
  },
  {
    screenshot: "/testimonials/Olusula.jpg",
    author: "Olusula",
    role: "Trader — Fintech & Currency Exchange",
  },
  {
    screenshot: "/testimonials/upwork_5star.jpg",
    author: "Caleb",
    role: "Client — Upwork",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const item = testimonials[current];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            What People Say
          </h2>
          <p className="text-apple-300 max-w-2xl mx-auto">
            Feedback from collaborators, clients, and peers
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="glass-card p-8 md:p-12 text-center">
            {item.screenshot ? (
              <div className="space-y-4">
                <button onClick={() => setLightbox(item.screenshot)} className="relative w-full max-w-md mx-auto block rounded-lg overflow-hidden border border-white/[0.08] transition-transform hover:scale-[1.02]">
                  <Image src={item.screenshot} alt={`${item.author} testimonial`} width={500} height={350} className="w-full h-auto object-contain" />
                </button>
                <p className="text-xs text-apple-400">Click to expand</p>
              </div>
            ) : (
              <>
                <FiMessageCircle className="w-10 h-10 text-purple-400/40 mx-auto mb-6" />
                <blockquote className="text-lg md:text-xl text-apple-50/80 leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </>
            )}
            <div className="mt-6">
              <p className="text-apple-50 font-semibold">{item.author}</p>
              <p className="text-apple-300 text-sm">{item.role}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full border border-white/[0.1] hover:bg-white/[0.06] transition-colors"
            >
              <FiChevronLeft className="w-5 h-5 text-apple-300" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-purple-400 w-4' : 'bg-white/30'}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
              className="p-2 rounded-full border border-white/[0.1] hover:bg-white/[0.06] transition-colors"
            >
              <FiChevronRight className="w-5 h-5 text-apple-300" />
            </button>
          </div>
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 p-2 text-white/80 hover:text-white" onClick={() => setLightbox(null)}>
            <FiX className="w-8 h-8" />
          </button>
          <Image src={lightbox} alt="Testimonial" width={800} height={600} className="max-w-full max-h-[90vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
