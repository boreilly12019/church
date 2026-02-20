import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, Calendar } from 'lucide-react';

export default function Services() {
  const services = [
    {
      time: "9:30 AM",
      title: "Bible Study",
      description: "Deep dive into the Word of God for all age groups.",
      icon: <BookOpen size={24} className="text-church-olive" />
    },
    {
      time: "11:00 AM",
      title: "Worship Service",
      description: "A time of praise, prayer, and biblical teaching.",
      icon: <Users size={24} className="text-church-olive" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-church-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-church-olive font-medium tracking-widest uppercase text-xs mb-4 block">Join Us</span>
          <h2 className="text-4xl md:text-5xl font-serif">Sunday Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="bg-church-cream w-20 h-20 rounded-full flex items-center justify-center shrink-0">
                <Clock size={32} className="text-church-olive" />
              </div>
              <div>
                <span className="text-church-olive font-bold text-lg mb-1 block">{service.time}</span>
                <h3 className="text-3xl font-serif mb-3">{service.title}</h3>
                <p className="text-church-ink/60">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-church-olive text-white rounded-[40px] p-10 md:p-16 overflow-hidden relative">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif mb-6">Find Us in Coconut Creek</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="shrink-0 mt-1" />
                  <div>
                    <p className="text-xl font-serif">7500 North State Road 7</p>
                    <p className="text-white/70">Coconut Creek, FL 33037</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="shrink-0 mt-1" />
                  <div>
                    <p className="text-xl font-serif">Every Sunday</p>
                    <p className="text-white/70">Bible Study & Worship</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=7500+North+State+Road+7+Coconut+Creek+FL+33037"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-white text-church-olive px-8 py-4 rounded-full font-medium hover:bg-church-cream transition-all shadow-lg"
              >
                Get Directions
              </a>
            </div>
            <div className="h-64 md:h-80 rounded-[32px] overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.411634734567!2d-80.204555!3d26.248222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d904f6f6f6f6f7%3A0x88d904f6f6f6f6f7!2s7500%20N%20State%20Rd%207%2C%20Coconut%20Creek%2C%20FL%2033073!5e0!3m2!1sen!2sus!4v1708350000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}

import { BookOpen, Users } from 'lucide-react';
