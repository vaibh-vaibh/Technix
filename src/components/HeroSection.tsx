import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-technix-gray to-white">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <h1 className="font-bold mb-6 leading-tight">
            Simplify Customer Relationships with <span className="text-technix-blue">Technix CRM</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            Boost sales, improve customer satisfaction, and streamline your business processes with our all-in-one CRM solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup">
              <Button className="bg-technix-blue hover:bg-blue-600 transition text-lg px-6 py-6">
                Start Free Trial
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="text-lg px-6 py-6 flex items-center gap-2"
              onClick={() => {
                window.open('https://www.youtube.com/watch?v=9QC0vKhJvUA', '_blank');
              }}
            >
              Watch Demo <Youtube size={20} className="text-red-600" />
            </Button>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white p-4 rounded-xl shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
              alt="Technix CRM Dashboard" 
              className="rounded-lg shadow-sm w-full object-cover" 
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-technix-blue text-white p-5 rounded-lg shadow-lg transform rotate-3 hidden md:block">
            <p className="font-medium">Join 5000+ businesses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
