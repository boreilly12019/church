import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Upload, FileText, X } from 'lucide-react';

export default function Contact() {
  const [file, setFile] = React.useState<File | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-church-olive font-medium tracking-widest uppercase text-xs mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Better yet, see us in person!</h2>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-6">
                <div className="bg-church-cream p-4 rounded-2xl text-church-olive">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-1">Visit Us</h4>
                  <p className="text-church-ink/60">7500 N SR7, Coconut Creek, Fl 33073</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-church-cream p-4 rounded-2xl text-church-olive">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-1">Call Us</h4>
                  <a href="tel:5619903070" className="text-church-ink/60 hover:text-church-olive transition-colors">561-990-3070</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-church-cream p-4 rounded-2xl text-church-olive">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-1">Email Us</h4>
                  <a href="mailto:westbocabaptistchurch@gmail.com" className="text-church-ink/60 hover:text-church-olive transition-colors">westbocabaptistchurch@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-church-cream p-8 md:p-12 rounded-[40px]"
          >
            <h3 className="text-3xl font-serif mb-8">Drop us a line!</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-church-ink/50 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-church-olive transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-church-ink/50 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-church-olive transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-church-ink/50 ml-1">How did you hear about us?</label>
                <input 
                  type="text" 
                  placeholder="Friend, Social Media, etc."
                  className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-church-olive transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-church-ink/50 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-church-olive transition-all resize-none"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-church-ink/50 ml-1">Attachments</label>
                <div 
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative border-2 border-dashed rounded-2xl p-6 transition-all cursor-pointer flex flex-col items-center justify-center gap-2 ${
                    isDragging 
                      ? 'border-church-olive bg-church-olive/5' 
                      : 'border-church-ink/10 bg-white hover:border-church-olive/30'
                  }`}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  
                  {file ? (
                    <div className="flex items-center gap-3 w-full bg-church-cream p-3 rounded-xl">
                      <FileText className="text-church-olive" size={20} />
                      <span className="text-sm font-medium text-church-ink truncate flex-1">{file.name}</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile();
                        }}
                        className="p-1 hover:bg-church-ink/5 rounded-full transition-colors"
                      >
                        <X size={16} className="text-church-ink/40" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="bg-church-cream p-3 rounded-full text-church-olive">
                        <Upload size={20} />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-church-ink">Click or drag to upload</p>
                        <p className="text-[10px] text-church-ink/40 uppercase tracking-wider mt-1">PDF, JPG, PNG (Max 10MB)</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <button className="w-full bg-church-olive text-white py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-church-olive/90 transition-all shadow-lg">
                Send Message
                <Send size={18} />
              </button>
              <p className="text-[10px] text-church-ink/40 text-center mt-4">
                This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-church-olive transition-colors">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-church-olive transition-colors">Terms of Service</a> apply.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
