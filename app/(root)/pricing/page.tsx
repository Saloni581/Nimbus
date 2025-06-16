import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';
import { SUBSCRIPTION_PLANS } from '@/constants/plans';
import Link from 'next/link';

const PricingPage = () => {
  return (
    <div className="page-container">
      <div className="text-center mb-12">
        <h1 className="h1 mb-4">Choose Your Plan</h1>
        <p className="body-1 text-light-200 max-w-2xl mx-auto">
          Scale your file storage and collaboration needs with our flexible pricing plans.
          Start free and upgrade as you grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {Object.entries(SUBSCRIPTION_PLANS).map(([key, plan]) => (
          <Card key={key} className={`relative ${key === 'pro' ? 'border-brand shadow-lg' : ''}`}>
            {key === 'pro' && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand text-white">
                Most Popular
              </Badge>
            )}
            <CardHeader className="text-center">
              <CardTitle className="h3">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                {plan.price > 0 && <span className="text-light-200">/month</span>}
              </div>
              <CardDescription className="mt-2">
                {plan.storage / (1024 * 1024 * 1024)}GB storage included
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation, index) => (
                  <li key={index} className="flex items-center gap-2 text-light-200">
                    <X className="w-4 h-4 text-red-500" />
                    <span className="text-sm">{limitation}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${key === 'pro' ? 'bg-brand hover:bg-brand-100' : ''}`}
                variant={key === 'pro' ? 'default' : 'outline'}
                asChild
              >
                <Link href={`/subscribe?plan=${key}`}>
                  {key === 'free' ? 'Get Started' : 'Upgrade Now'}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h2 className="h2 mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="text-left">
            <h3 className="h4 mb-2">Can I change plans anytime?</h3>
            <p className="body-2 text-light-200">
              Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
            </p>
          </div>
          <div className="text-left">
            <h3 className="h4 mb-2">What happens to my data if I downgrade?</h3>
            <p className="body-2 text-light-200">
              Your data remains safe. You'll have 30 days to reduce usage to fit your new plan limits.
            </p>
          </div>
          <div className="text-left">
            <h3 className="h4 mb-2">Do you offer refunds?</h3>
            <p className="body-2 text-light-200">
              We offer a 30-day money-back guarantee for all paid plans. No questions asked.
            </p>
          </div>
          <div className="text-left">
            <h3 className="h4 mb-2">Is there a free trial?</h3>
            <p className="body-2 text-light-200">
              All paid plans come with a 14-day free trial. No credit card required to start.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;