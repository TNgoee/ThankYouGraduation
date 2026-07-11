import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import capTassel from '@assets/generated_images/cap-tassel.jpg';
import diploma from '@assets/generated_images/diploma.jpg';
import campus from '@assets/generated_images/campus.jpg';
import fireworks from '@assets/generated_images/fireworks.jpg';
import crowd from '@assets/generated_images/crowd.jpg';

const galleryImages = [
  { src: capTassel, label: 'Ceremony' },
  { src: diploma, label: 'Achievement' },
  { src: campus, label: 'Campus' },
  { src: crowd, label: 'Celebration' },
  { src: fireworks, label: 'Memories' },
];

// Mobile spans (2-col grid) and desktop spans (4-col grid) — deliberately uneven
const mobileSpan = ['col-span-2 row-span-2', 'col-span-1 row-span-1', 'col-span-1 row-span-1', 'col-span-1 row-span-1', 'col-span-1 row-span-1'];
const desktopSpan = [
  'md:col-span-2 md:row-span-2',
  'md:col-span-2 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#B8985A] mb-3">The Gallery</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-5">
            Captured Moments
          </h2>
          <div className="w-14 h-px bg-[#B8985A] mx-auto mb-5" />
          <p className="text-muted-foreground text-lg font-light">
            Glimpses of a journey well-traveled
          </p>
        </motion.div>

        {/* Masonry-style grid — uneven spans, dense packing */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[160px] md:auto-rows-[180px] gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`relative overflow-hidden rounded-sm cursor-pointer group ${mobileSpan[i]} ${desktopSpan[i]}`}
              onClick={() => setSelectedImage(img.src)}
              data-testid={`gallery-image-${i}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />

              {/* Gold hairline frame, only reveals on hover */}
              <div className="absolute inset-2 border border-[#B8985A]/0 group-hover:border-[#B8985A]/70 transition-colors duration-300 pointer-events-none" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="block text-white/50 text-[10px] uppercase tracking-[0.2em] mb-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-white font-serif text-lg tracking-wide">{img.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
          >
            <button
              className="absolute top-6 right-6 w-11 h-11 rounded-full border border-[#B8985A]/50 flex items-center justify-center text-white/80 hover:text-white hover:border-[#B8985A] transition-colors"
              onClick={() => setSelectedImage(null)}
              data-testid="button-close-lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[88vh] object-contain rounded-sm border border-[#B8985A]/20"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}