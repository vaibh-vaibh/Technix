
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Check } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-technix-gray">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="mb-6 font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Fill out the form to schedule a personalized demo or contact our team with any questions.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full mr-4">
                  <Mail className="text-technix-blue" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-600">contact@technixcrm.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full mr-4">
                  <Phone className="text-technix-blue" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full mr-4">
                  <MapPin className="text-technix-blue" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Visit Us</h4>
                  <p className="text-gray-600">123 Tech Street, Suite 100<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6">Request a Demo</h3>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <Input id="company" placeholder="Acme Inc." />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Tell us about your needs..." rows={4} />
              </div>
              
              <Button className="w-full bg-technix-blue hover:bg-blue-600 transition">
                Send Request
              </Button>
              
              <p className="text-center text-sm text-gray-500 flex items-center justify-center">
                <Check size={16} className="mr-1 text-technix-blue" />
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
