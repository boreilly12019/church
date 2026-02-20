import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-church-ink text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo/qt=q_95.webp" 
                alt="West Boca Baptist Church Logo" 
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/60 max-w-md mb-8 leading-relaxed">
              To connect people with Jesus, strengthen families, and make disciples. Grounded in the Holy Scriptures and the historic Baptist faith.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-church-olive transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-church-olive transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-church-olive transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Service Times</a></li>
              <li><a href="#giving" className="hover:text-white transition-colors">Giving</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Join our Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">Stay informed about our latest events and news.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-white/5 border-white/10 rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-church-olive"
              />
              <button className="bg-church-olive px-4 py-2 rounded-full text-sm font-medium hover:bg-church-olive/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs uppercase tracking-widest">
          <p>© 2026 West Boca Baptist Church - All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
