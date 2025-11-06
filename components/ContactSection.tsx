import React from 'react';
import { Mail, Linkedin, Calendar, Send, Check } from 'lucide-react';

interface ContactSectionProps {
  isDark: boolean;
  formData: { name: string; email: string; message: string };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; email: string; message: string }>>;
  submitted: boolean;
  setSubmitted: (submitted: boolean) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isDark, formData, setFormData, submitted, setSubmitted }) => {
  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="relative z-10 pt-32 pb-20 px-8 max-w-3xl mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-light mb-4">Get in Touch</h1>
        <p className={`text-lg ${isDark ? 'opacity-80' : 'opacity-80'}`}>Let's build something together</p>
      </header>
      
      <div className="space-y-3 mb-12">
        {[
          { icon: Mail, title: 'Email', text: 'shantanu@example.com', href: 'mailto:shantanu@example.com' },
          { icon: Linkedin, title: 'LinkedIn', text: '@shantanubkr', href: 'https://www.linkedin.com/in/shantanubkr/' },
          { icon: Calendar, title: 'Schedule a Call', text: 'Book a time that works for you', href: '#' }
        ].map(contact => {
          const Icon = contact.icon;
          return (
            <a
              key={contact.title}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`flex items-center gap-4 p-4 rounded-lg border transition-all group ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  : 'bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  isDark ? 'bg-white/10 group-hover:bg-white/20' : 'bg-black/10 group-hover:bg-black/20'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium mb-0.5">{contact.title}</h3>
                <p className={`text-sm ${isDark ? 'opacity-60' : 'opacity-60'}`}>{contact.text}</p>
              </div>
            </a>
          );
        })}
      </div>
      
      <div className={`relative my-12 ${isDark ? 'opacity-20' : 'opacity-20'}`}>
        <div className={`border-t ${isDark ? 'border-white' : 'border-black'}`} />
        <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 text-xs ${isDark ? 'bg-black' : 'bg-white'}`}>
          or
        </span>
      </div>
      
      <div>
        <h2 className="text-xl font-light mb-6">Send a Message</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm mb-2">Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg border transition-all outline-none ${
                isDark
                  ? 'bg-white/5 border-white/10 focus:border-white/30 focus:bg-white/10'
                  : 'bg-black/5 border-black/10 focus:border-black/30 focus:bg-black/10'
              }`}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-2">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg border transition-all outline-none ${
                isDark
                  ? 'bg-white/5 border-white/10 focus:border-white/30 focus:bg-white/10'
                  : 'bg-black/5 border-black/10 focus:border-black/30 focus:bg-black/10'
              }`}
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-2">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
              rows={5}
              className={`w-full px-4 py-3 rounded-lg border transition-all outline-none resize-none ${
                isDark
                  ? 'bg-white/5 border-white/10 focus:border-white/30 focus:bg-white/10'
                  : 'bg-black/5 border-black/10 focus:border-black/30 focus:bg-black/10'
              }`}
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={submitted}
            className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
              submitted
                ? 'bg-green-500 text-white cursor-not-allowed'
                : isDark
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'bg-black text-white hover:bg-black/90'
            }`}
          >
            {submitted ? (
              <>
                <Check className="w-5 h-5" />
                Message Sent!
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </div>
      </div>
      
      <footer className="mt-12 text-center">
        <p className={`text-xs ${isDark ? 'opacity-40' : 'opacity-40'}`}>
          Based in Ambarnath, Maharashtra · Open to remote work worldwide
        </p>
        <p className={`text-xs mt-2 ${isDark ? 'opacity-40' : 'opacity-40'}`}>
          Usually respond within 24 hours
        </p>
      </footer>
    </section>
  );
};

