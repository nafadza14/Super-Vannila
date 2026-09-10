import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const GALLERY_IMAGES = [
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-03-29-at-21.36.02.jpeg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-03-at-02.01.13-1.jpeg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-03-at-02.01.14-2.jpeg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/panen-vanili-2-576x1024-1.jpg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/IMG_3026-1-scaled.jpg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/IMG_3024-1-scaled.jpg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/Green-Vanilla-Bean.jpg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/Vanilla-green-bean.jpg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/inspect.jpeg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-03-29-at-21.35.47.jpeg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/Screenshot_218.jpg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/WhatsApp-Image-2024-11-02-at-4.20.22-PM.jpeg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-03-30-at-18.10.42-1.jpeg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-03-29-at-21.25.57-2.jpeg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-03-29-at-21.25.57.jpeg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-03-29-at-21.27.27-1.jpeg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-03-29-at-21.27.27.jpeg',
  'https://doctorvanillastg.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-03-29-at-21.37.06.jpeg'
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { ref, isInView: inView } = useInViewAnimation({ threshold: 0.05 });

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <section 
      ref={ref} 
      className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-t border-[#051A24]/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <h2 
              className={`font-mondwest text-4xl sm:text-5xl md:text-6xl text-[#0D212C] leading-tight mb-4 tracking-tight ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
            >
              Origin & Harvest Gallery
            </h2>
            <p 
              className={`text-[#051A24]/70 text-lg leading-relaxed font-sans ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.1s' }}
            >
              Take a closer look at our direct-from-origin sourcing, meticulous curing process, and the premium quality of our vanilla beans.
            </p>
          </div>
        </div>

        {/* Masonry Grid */}
        <div 
          className={`columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          {GALLERY_IMAGES.map((src, index) => (
            <div 
              key={index} 
              className="break-inside-avoid cursor-pointer group relative rounded-xl overflow-hidden bg-slate-100"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Vanilla harvest gallery ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md transition-all z-[60]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-6 h-6" />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Full screen preview" 
            className="max-w-full max-h-full object-contain rounded-md shadow-2xl scale-95 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </div>
      )}
    </section>
  );
}
