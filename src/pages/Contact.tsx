import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1000);
  };
  
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h1>
            <p className="text-gray-300 text-lg">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Contact Information</h2>
              <p className="text-gray-300 mb-8">
                Feel free to reach out through the contact form or using the information below. I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
              </p>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Mail size={24} />}
                  title="Email"
                  detail="hello@timepiece.design"
                  href="mailto:hello@timepiece.design"
                />
                <ContactInfo 
                  icon={<Phone size={24} />}
                  title="Phone"
                  detail="+1 (555) 123-4567"
                  href="tel:+15551234567"
                />
                <ContactInfo 
                  icon={<MapPin size={24} />}
                  title="Location"
                  detail="San Francisco, CA"
                  noLink
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Send a Message</h2>
              
              {formStatus === 'success' && (
                <div className="bg-green-900 text-green-100 p-4 rounded-lg mb-6 flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm mt-1">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="bg-red-900 text-red-100 p-4 rounded-lg mb-6">
                  <p className="font-medium">Something went wrong!</p>
                  <p className="text-sm mt-1">Please try again later or contact me directly via email.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-200 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-200 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-200 mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:border-indigo-500 transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-200 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  href?: string;
  noLink?: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, detail, href, noLink = false }) => {
  const content = (
    <>
      <div className="text-indigo-400 mr-4">{icon}</div>
      <div>
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-300">{detail}</p>
      </div>
    </>
  );
  
  if (noLink) {
    return <div className="flex items-start">{content}</div>;
  }
  
  return (
    <a 
      href={href} 
      className="flex items-start hover:text-indigo-400 transition-colors"
    >
      {content}
    </a>
  );
};

export default Contact;