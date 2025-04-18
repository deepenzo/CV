import React from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">TimePiece Design</h3>
            <p className="mb-4">Creating timeless design experiences that leave a lasting impression.</p>
            <div className="flex space-x-4">
              <SocialLink icon={<Github size={20} />} href="https://github.com" label="GitHub" />
              <SocialLink icon={<Linkedin size={20} />} href="https://linkedin.com" label="LinkedIn" />
              <SocialLink icon={<Instagram size={20} />} href="https://instagram.com" label="Instagram" />
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <p className="flex items-center mb-2">
              <Mail size={16} className="mr-2" />
              <a href="mailto:hello@timepiece.design" className="hover:text-indigo-400 transition-colors">
                hello@timepiece.design
              </a>
            </p>
            <p className="text-sm mt-4">Based in San Francisco, CA</p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} TimePiece Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;