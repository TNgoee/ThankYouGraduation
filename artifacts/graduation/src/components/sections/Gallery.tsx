import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';
import capTassel from '@assets/generated_images/cap-tassel.jpg';
import diploma from '@assets/generated_images/diploma.jpg';
import campus from '@assets/generated_images/campus.jpg';
import fireworks from '@assets/generated_images/fireworks.jpg';
import crowd from '@assets/generated_images/crowd.jpg';

const galleryImages = [
  { src: capTassel, label: 'Ceremony' },
  { src: diploma, label: 'Achievement' },
  { src: campus, label: 'Campus Life' },
  { src: crowd, label: 'Moments' },
  { src: fireworks, label: 'Joy' },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      {/* Soft background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#fce7f3_0.8px,transparent_1px)] dark:bg-[radial-gradient(#4c1d3f_0.8px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-100 dark:bg-pink-950 rounded-full">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="text-xs uppercase tracking-[0.25em] text-pink-500 font-medium">Sweet Memories</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight mb-4">
            Captured with Love
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Memorable moments from this journey
          </p>
        </motion.div>

        {/* Sweet Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-5">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.03, y: -8 }}
              onClick={() => setSelectedImage(img.src)}
              className={`relative overflow-hidden rounded-3xl cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500 ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              } ${i === 1 ? 'md:col-span-2' : ''}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Label */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-white/90 text-sm font-medium tracking-wide drop-shadow-sm">
                    {img.label}
                  </span>
                  <div className="flex-1 h-px bg-white/30" />
                  <Heart className="w-4 h-4 text-pink-300 opacity-70" />
                </div>
              </div>

              {/* Cute corner accent */}
              <div className="absolute top-4 right-4 w-6 h-6 rounded-2xl bg-white/90 dark:bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-pink-500 text-xs">✨</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sweet Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              <img
                src={selectedImage}
                alt="Expanded view"
                className="max-w-full max-h-[85vh] object-contain rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-6 py-2 bg-white dark:bg-zinc-900 rounded-2xl shadow text-sm text-pink-500 flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Made with love
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}