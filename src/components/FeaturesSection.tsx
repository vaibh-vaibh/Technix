
import React, { useEffect } from 'react';
import { BarChart3, Users, Calendar, PieChart, MailOpen, Zap, Shield, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-6 h-6 text-technix-blue" />,
    title: 'Contact Management',
    description: 'Store and organize all your customer information in one centralized database.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-technix-blue" />,
    title: 'Sales Analytics',
    description: 'Track sales performance with real-time reports and actionable insights.'
  },
  {
    icon: <Calendar className="w-6 h-6 text-technix-blue" />,
    title: 'Task Management',
    description: 'Stay organized with calendars, tasks, and automated reminders.'
  },
  {
    icon: <MailOpen className="w-6 h-6 text-technix-blue" />,
    title: 'Email Integration',
    description: 'Connect your email and automate personalized marketing campaigns.'
  },
  {
    icon: <PieChart className="w-6 h-6 text-technix-blue" />,
    title: 'Custom Reports',
    description: 'Create powerful reports with custom fields and visualization tools.'
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-technix-blue" />,
    title: 'Live Chat Support',
    description: 'Provide instant customer support with integrated live chat functionality.'
  },
  {
    icon: <Shield className="w-6 h-6 text-technix-blue" />,
    title: 'Data Security',
    description: 'Enterprise-grade security to keep your customer data protected.'
  },
  {
    icon: <Zap className="w-6 h-6 text-technix-blue" />,
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and streamline your business processes.'
  }
];

const FeaturesSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight * 0.8) {
          element.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="mb-4 font-bold">Powerful Features to Grow Your Business</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technix CRM provides everything you need to manage customer relationships, streamline sales processes, and boost productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
