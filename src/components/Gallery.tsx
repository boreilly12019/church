import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = Array.from({ length: 13 }, (_, i) => ({
    url: `gallery/${i + 1}.jpg`
  }));

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer) return;
      
      const item = scrollContainer.firstElementChild as HTMLElement;
      if (!item) return;
      
      const itemWidth = item.offsetWidth;
      const gap = 32; // gap-8 is 32px
      const step = itemWidth + gap;
      
      const index = Math.round(scrollContainer.scrollLeft / step);
      setActiveIndex(Math.min(Math.max(0, index), images.length - 1));
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    
    let scrollInterval: NodeJS.Timeout;
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          const item = scrollContainer.firstElementChild as HTMLElement;
          if (!item) return;
          const step = item.offsetWidth + 32;
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
          
          if (scrollContainer.scrollLeft >= maxScroll - 50) {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollContainer.scrollBy({ left: step, behavior: 'smooth' });
          }
        }
      }, 4000);
    };

    startAutoScroll();

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [isPaused, images.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const item = current.firstElementChild as HTMLElement;
      if (!item) return;
      const step = item.offsetWidth + 32;
      const maxScroll = current.scrollWidth - current.clientWidth;
      
      if (direction === 'right') {
        if (current.scrollLeft >= maxScroll - 50) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: step, behavior: 'smooth' });
        }
      } else {
        if (current.scrollLeft <= 50) {
          current.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: -step, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section id="gallery" className="py-32 bg-church-ink overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-church-olive blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-church-olive blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-church-olive font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Visual Journey</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Our Church <br />
              <span className="italic text-church-olive">in Pictures</span>
            </h2>
          </motion.div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-2">
              {images.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 transition-all duration-500 rounded-full ${
                    activeIndex === i ? 'w-8 bg-church-olive' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-church-olive hover:border-church-olive transition-all group"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-church-olive hover:border-church-olive transition-all group"
                aria-label="Next image"
              >
                <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="relative z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-20 px-[10vw] no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px -100px" }}
              className="flex-none w-[85vw] md:w-[65vw] lg:w-[50vw] aspect-[16/10] rounded-[40px] overflow-hidden group snap-center relative shadow-2xl border border-white/5 bg-black/20"
            >
              <img
                src={img.url}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="absolute top-8 right-8">
                <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-church-olive">
                  <Maximize2 size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Label */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-white/30 font-mono text-[10px] uppercase tracking-[0.5em]">
          Swipe or use arrows to explore our community
        </p>
      </div>
    </section>
  );
}
