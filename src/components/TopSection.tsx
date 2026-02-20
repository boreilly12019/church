import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function TopSection() {
  return (
    <section className="relative pt-32 pb-12 bg-white flex flex-col items-center">
      {/* Background Image Container */}
      <div className="relative w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[32px] overflow-hidden shadow-2xl border border-church-ink/5 group"
        >
          <img
            src="background/top-photo.jpg"
            alt="West Boca Baptist Church"
            className="w-full h-auto block"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          
          {/* Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-3xl"
            >
              <h2 className="text-white text-3xl md:text-5xl font-serif mb-6 leading-tight">
                Join us this Sunday <br />
                <span className="text-church-olive italic">Jesus is Lord!</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4 text-white/90">
                  <div className="mt-1 p-2 bg-white/10 backdrop-blur-md rounded-lg">
                    <Clock size={20} className="text-church-olive" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">9:30 am Bible Study</p>
                    <p className="text-white/60">11:00 am for Worship</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-white/90">
                  <div className="mt-1 p-2 bg-white/10 backdrop-blur-md rounded-lg">
                    <MapPin size={20} className="text-church-olive" />
                  </div>
                  <div>
                    <p className="font-medium">7500 North State Road 7</p>
                    <p className="text-white/60 text-sm italic">Coconut Creek, Fl 33037</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:westbocabaptistchurch@gmail.com?subject=I%20want%20to%20get%20involved"
                  className="bg-church-olive text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-church-ink transition-all shadow-lg group/btn"
                >
                  <Mail size={18} className="group-hover/btn:scale-110 transition-transform" />
                  Get Involved
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
