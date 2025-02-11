import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface PricingPlan {
  id: string;
  title: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

const Pricing = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPricingPlans = async () => {
      try {
        const { data, error } = await supabase
          .from('pricing_plans')
          .select('*')
          .order('price');

        if (error) {
          console.error('Error fetching pricing plans:', error);
          return;
        }

        if (data) {
          setPlans(data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPricingPlans();
  }, []);

  if (loading) {
    return (
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl text-gray-600">جاري تحميل الباقات...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">باقات الأسعار</h2>
          <p className="text-xl text-gray-600">اختر الباقة المناسبة لاحتياجات عملك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular 
                  ? 'ring-4 ring-secondary shadow-xl scale-105' 
                  : 'border-2 border-gray-100 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 right-0 left-0 mx-auto w-fit">
                  <span className="bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold">
                    الأكثر شيوعاً
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">{plan.title}</h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-gray-600 mr-2">دولار</span>
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-secondary ml-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="text-sm text-gray-600 mb-6">{plan.cta}</p>
                <a
                  href="https://tally.so/r/me092e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-6 rounded-lg font-medium text-center transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-secondary text-primary hover:bg-secondary/90'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  ابدأ الآن
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;