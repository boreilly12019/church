import React from 'react';
import { motion } from 'motion/react';
import { QrCode, Heart } from 'lucide-react';

export default function Giving() {
  return (
    <section id="giving" className="py-24 bg-church-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-sm relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-church-cream w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-church-olive" size={28} />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Thank you for supporting the Gospel work of Jesus.
              </h2>
              <p className="text-lg text-church-ink/70 mb-8 leading-relaxed">
                Your generous support helps us extend the love of Jesus, care for those in need, and sustain the ministries God has entrusted to us. Together, we are sharing the gospel of Christ and making a real difference in our community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center bg-church-cream p-12 rounded-[40px] border-2 border-dashed border-church-olive/20"
            >
              <div className="bg-white rounded-[40px] shadow-2xl mb-8 overflow-hidden w-64 h-64 md:w-80 md:h-80">
                <img 
                  src="qr/qr-code.webp" 
                  alt="Giving QR Code" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to icon if image is missing
                    (e.target as HTMLImageElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      const icon = document.createElement('div');
                      icon.className = "flex items-center justify-center w-full h-full p-8";
                      icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-qr-code text-church-ink"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>';
                      parent.appendChild(icon);
                    }
                  }}
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Scan to Give</h3>
              <p className="text-church-ink/60 text-sm max-w-[200px]">
                Use your phone's camera to support the work Jesus is doing through His church.
              </p>
            </motion.div>
          </div>
          
          {/* Decorative background element */}
          <div className="absolute -left-10 -top-10 text-church-cream/50 pointer-events-none">
            <Heart size={200} fill="currentColor" />
          </div>
        </div>
      </div>
    </section>
  );
}
