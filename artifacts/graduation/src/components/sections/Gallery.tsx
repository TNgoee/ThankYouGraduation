import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import capTassel from '@assets/generated_images/cap-tassel.jpg';
import diploma from '@assets/generated_images/diploma.jpg';
import campus from '@assets/generated_images/campus.jpg';
import fireworks from '@assets/generated_images/fireworks.jpg';
import crowd from '@assets/generated_images/crowd.jpg';

const galleryImages = [
  { src: capTassel, label: "Ceremony" },
  { src: diploma, label: "Achievement" },
  { src: campus, label: "Campus" },
  { src: crowd, label: "Celebration" },
  { src: fireworks, label: "Memories" },
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
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Captured Moments</h2>
          <p className="text-muted-foreground text-lg">Glimpses of a journey well-traveled</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* First image spans 2 columns on md+ */}
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                i === 0 ? 'col-span-2 md:col-span-2 aspect-video' : 'aspect-square'
              }`}
              onClick={() => setSelectedImage(img.src)}
              data-testid={`gallery-image-${i}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 border-2 border-transparent group-hover:border-primary/50 rounded-xl">
                <span className="text-white font-serif text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedImage(null)}
              data-testid="button-close-lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-md"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
