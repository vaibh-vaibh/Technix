
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: 'per month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 1,000 contacts',
      'Email integration',
      'Basic reporting',
      'Task management',
      'Mobile app access',
      'Email support'
    ],
    buttonText: 'Get Started',
    popular: false
  },
  {
    name: 'Professional',
    price: '$79',
    period: 'per month',
    description: 'Ideal for growing teams and businesses',
    features: [
      'Up to 25,000 contacts',
      'Advanced reporting',
      'Sales automation',
      'Custom dashboards',
      'API access',
      'Priority support',
      'Multiple users',
      'Email templates'
    ],
    buttonText: 'Get Started',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$199',
    period: 'per month',
    description: 'For large organizations with advanced needs',
    features: [
      'Unlimited contacts',
      'Advanced security',
      'Dedicated account manager',
      'Custom integrations',
      'Training sessions',
      'White labeling',
      '24/7 phone support',
      'SLA guarantees'
    ],
    buttonText: 'Contact Sales',
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-technix-gray">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="mb-4 font-bold">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow animate-on-scroll
                ${plan.popular ? 'border-2 border-technix-blue relative scale-105 shadow-md' : 'border border-gray-200'}
              `}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="bg-technix-blue text-white py-1 px-6 absolute top-4 right-0 rounded-l-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <Button 
                  className={`w-full mb-8 ${plan.popular ? 'bg-technix-blue hover:bg-blue-600' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.buttonText}
                </Button>
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="text-technix-blue mr-3 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
