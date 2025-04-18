import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Watch from '../components/Watch';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen pt-20 pb-16 flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Designs that stand the <span className="text-indigo-400">test of time</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                Graphic designer crafting timeless visual experiences that make an impact. Explore my work through an interactive journey around the clock.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center"
                >
                  Explore Projects
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <a 
                  href="/contact" 
                  className="px-6 py-3 bg-transparent border border-gray-600 text-white rounded-lg font-medium hover:border-indigo-400 hover:text-indigo-400 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Watch />
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-90"></div>
        
        <a 
          href="#about" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-80 hover:opacity-100 transition-opacity animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={30} />
        </a>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-gray-300 text-lg">
              I'm a passionate graphic designer with an eye for detail and a love for creating stunning visual experiences. 
              With over 5 years of experience in the industry, I've worked with clients across various sectors to bring their brand visions to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Branding" 
              description="Creating distinctive brand identities that resonate with target audiences and stand out in the market."
            />
            <FeatureCard 
              title="UI/UX Design" 
              description="Crafting intuitive, user-centered interfaces that balance form and function for digital products."
            />
            <FeatureCard 
              title="Print Design" 
              description="Developing eye-catching print materials from business cards to billboards with meticulous attention to detail."
            />
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Featured Projects</h2>
            <p className="text-gray-300 text-lg">
              Explore my work by interacting with the watch interface above. Each hour represents a different project. 
              Hover over the markers to see a preview and click to view project details.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <p className="text-gray-300 mb-4">
                Interact with the watch hands to discover my portfolio of work. Each position represents a unique project.
              </p>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Back to Watch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-colors group">
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Home;