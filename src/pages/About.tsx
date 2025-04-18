import React from 'react';
import { Award, Briefcase, Users, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Me</h1>
            <p className="text-gray-300 text-lg">
              Passionate graphic designer with a unique perspective and meticulous attention to detail.
            </p>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">My Design Journey</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a graphic designer with a passion for creating visually stunning and meaningful designs that tell a story and evoke emotion. 
                  My journey in design began over 7 years ago, and since then, I've had the privilege of working with amazing clients across various industries.
                </p>
                <p>
                  My approach to design is deeply rooted in understanding the core essence of each project. I believe that great design is not just about 
                  aesthetics, but about solving problems and creating experiences that resonate with the target audience.
                </p>
                <p>
                  When I'm not designing, you can find me exploring new art exhibitions, photographing urban landscapes, or experimenting with new design techniques 
                  to continuously expand my creative horizons.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-indigo-600 max-w-md mx-auto">
                <img 
                  src="https://images.pexels.com/photos/5691695/pexels-photo-5691695.jpeg" 
                  alt="Designer portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-white text-center">My Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard 
              icon={<Briefcase size={32} />}
              title="Branding"
              skills={['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']}
            />
            <SkillCard 
              icon={<Code size={32} />}
              title="Digital Design"
              skills={['UI/UX Design', 'Web Design', 'Mobile App Design', 'Interactive Media']}
            />
            <SkillCard 
              icon={<Users size={32} />}
              title="Print Design"
              skills={['Editorial Design', 'Packaging', 'Posters & Flyers', 'Business Cards']}
            />
            <SkillCard 
              icon={<Award size={32} />}
              title="Software"
              skills={['Adobe Creative Suite', 'Figma', 'Sketch', 'After Effects']}
            />
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-white text-center">Professional Experience</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <ExperienceItem 
                period="2021 - Present"
                title="Senior Graphic Designer"
                company="Creative Solutions Agency"
                description="Leading design projects for major clients, overseeing junior designers, and establishing design systems and workflows."
              />
              <ExperienceItem 
                period="2018 - 2021"
                title="UI/UX Designer"
                company="Tech Innovations Inc."
                description="Designed user interfaces for web and mobile applications, conducted user research, and created interactive prototypes."
              />
              <ExperienceItem 
                period="2016 - 2018"
                title="Graphic Designer"
                company="Print Masters Studio"
                description="Created print materials including brochures, catalogs, packaging designs, and promotional materials for various clients."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all group h-full">
      <div className="text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300 flex items-center">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ExperienceItemProps {
  period: string;
  title: string;
  company: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ period, title, company, description }) => {
  return (
    <div className="relative pl-8 border-l-2 border-gray-800 hover:border-indigo-500 transition-colors py-2">
      <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-indigo-600 rounded-full border-2 border-gray-950"></div>
      <span className="text-indigo-400 text-sm font-medium">{period}</span>
      <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
      <p className="text-gray-400 font-medium mt-0.5">{company}</p>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  );
};

export default About;