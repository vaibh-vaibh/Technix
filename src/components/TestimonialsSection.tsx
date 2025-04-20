
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Technix CRM has completely transformed how we manage our customer relationships. The interface is intuitive and our sales team was up and running in no time.",
    author: "Sarah Johnson",
    position: "Sales Director",
    company: "Acme Inc.",
    stars: 5
  },
  {
    quote: "As a small business owner, I needed an affordable CRM that didn't compromise on features. Technix delivers everything I need at a price point that works for my budget.",
    author: "Michael Chen",
    position: "CEO",
    company: "Innovate Solutions",
    stars: 5
  },
  {
    quote: "The reporting features in Technix CRM give us invaluable insights into our sales pipeline. We've increased our conversion rate by 35% in just three months.",
    author: "Emma Rodriguez",
    position: "Marketing Manager",
    company: "Global Systems",
    stars: 4
  },
  {
    quote: "Customer support at Technix is outstanding. Whenever we have questions, their team responds quickly and helps us solve problems efficiently.",
    author: "David Wilson",
    position: "Operations Director",
    company: "Velocity Group",
    stars: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="mb-4 font-bold">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their business with Technix CRM.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-technix-gray p-8 rounded-xl animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex mb-4">
                {Array(testimonial.stars).fill(0).map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
