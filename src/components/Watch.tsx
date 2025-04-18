import React, { useState, useEffect } from 'react';
import { projectData } from '../data/projects';
import ProjectModal from './ProjectModal';

const Watch: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [selectedProject, setSelectedProject] = useState<null | number>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const milliseconds = time.getMilliseconds();

  const hourRotation = (hours * 30) + (minutes * 0.5) + (seconds * (0.5/60));
  const minuteRotation = (minutes * 6) + (seconds * 0.1) + (milliseconds * 0.0001);
  const secondRotation = (seconds * 6) + (milliseconds * 0.006);

  const handleProjectClick = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const romanNumerals = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square">
      {/* Watch face */}
      <div className="absolute inset-0 rounded-full bg-gray-900 border-8 border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden">
        {/* Hour markers and projects */}
        <div className="absolute inset-0">
          {romanNumerals.map((numeral, index) => {
            const angle = (index * 30) * (Math.PI / 180);
            const radius = 42; // Adjusted radius for better positioning
            const x = radius * Math.sin(angle);
            const y = -radius * Math.cos(angle);
            
            // Calculate text position slightly outside the project markers
            const textRadius = radius + 8;
            const textX = textRadius * Math.sin(angle);
            const textY = -textRadius * Math.cos(angle);
            
            return (
              <div key={index} className="absolute top-1/2 left-1/2">
                {/* Project marker */}
                <div 
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ 
                    transform: `translate(${x}vh, ${y}vh)` 
                  }}
                >
                  <button 
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 
                             transition-all duration-300 flex items-center justify-center 
                             shadow-lg hover:scale-110 group relative"
                    onClick={() => handleProjectClick(index)}
                  >
                    {projectData[index] && (
                      <>
                        <img 
                          src={projectData[index].thumbnail} 
                          alt={projectData[index].title} 
                          className="w-10 h-10 rounded-full object-cover opacity-80 
                                   group-hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute opacity-0 group-hover:opacity-100 
                                      transition-opacity bg-black bg-opacity-70 rounded-lg 
                                      p-2 text-xs text-white whitespace-nowrap z-10
                                      -translate-y-full -top-2">
                          {projectData[index].title}
                        </div>
                      </>
                    )}
                  </button>
                </div>
                {/* Roman numeral */}
                <div 
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ 
                    transform: `translate(${textX}vh, ${textY}vh)` 
                  }}
                >
                  <span className="text-gray-400 font-serif text-lg">{numeral}</span>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Watch center and hands */}
        <div className="absolute w-4 h-4 bg-gray-300 rounded-full z-40"></div>
        
        <div 
          className="absolute w-1.5 h-20 bg-white rounded-full origin-bottom transform -translate-x-1/2"
          style={{ transform: `translateX(-50%) rotate(${hourRotation}deg)`, transformOrigin: 'bottom center' }}
        ></div>
        
        <div 
          className="absolute w-1 h-28 bg-white rounded-full origin-bottom transform -translate-x-1/2"
          style={{ transform: `translateX(-50%) rotate(${minuteRotation}deg)`, transformOrigin: 'bottom center' }}
        ></div>
        
        <div 
          className="absolute w-0.5 h-32 bg-red-500 rounded-full origin-bottom transform -translate-x-1/2"
          style={{ transform: `translateX(-50%) rotate(${secondRotation}deg)`, transformOrigin: 'bottom center' }}
        ></div>
      </div>

      {isModalOpen && selectedProject !== null && (
        <ProjectModal 
          project={projectData[selectedProject]} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default Watch;