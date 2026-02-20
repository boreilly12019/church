import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, BookOpen } from 'lucide-react';

export default function Mission() {
  const values = [
    {
      icon: <Heart className="text-church-olive" size={32} />,
      title: "Connect",
      description: "Connecting people with Jesus through authentic worship and community."
    },
    {
      icon: <Users className="text-church-olive" size={32} />,
      title: "Strengthen",
      description: "Strengthening families by providing biblical guidance and support for all ages."
    },
    {
      icon: <BookOpen className="text-church-olive" size={32} />,
      title: "Disciple",
      description: "Making disciples who are grounded in the Holy Scriptures and Baptist faith."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-church-olive font-medium tracking-widest uppercase text-xs mb-4 block">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              To connect people with Jesus, strengthen families, and make disciples.
            </h2>
            <p className="text-lg text-church-ink/70 mb-8 leading-relaxed">
              We affirm that West Boca Baptist Church holds to the historic Baptist faith and doctrine, grounded in the Holy Scriptures, and aligned with orthodox evangelical and Baptist beliefs.
            </p>
            
            <div className="bg-church-cream p-8 rounded-[32px] border border-church-olive/10 italic text-xl font-serif text-church-olive">
              "If you confess with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved."
              <span className="block mt-4 text-sm font-sans not-italic font-bold text-church-ink/50 uppercase tracking-widest">Romans 10:9 (CSB)</span>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[32px] border border-church-ink/5 hover:border-church-olive/20 transition-all hover:shadow-md group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-2xl font-serif mb-2">{value.title}</h3>
                <p className="text-church-ink/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
