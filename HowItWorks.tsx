import React, { useEffect, useState } from 'react';
import { ArrowDownCircle, CheckCircle2, Rocket } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Step {
  id: string;
  step_number: number;
  title: string;
  description: string;
  details: string[];
}

const icons = {
  1: ArrowDownCircle,
  2: CheckCircle2,
  3: Rocket,
};

const HowItWorks = () => {
  const [steps, setSteps] = useState<Step[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const { data, error } = await supabase
          .from('how_it_works')
          .select('*')
          .order('step_number');

        if (error) {
          console.error('Error fetching steps:', error);
          return;
        }

        if (data) {
          setSteps(data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSteps();
  }, []);

  if (loading) {
    return (
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl text-gray-600">جاري تحميل المحتوى...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">كيف يعمل</h2>
          <p className="text-xl text-gray-600">خطوات بسيطة لبدء رحلة نجاحك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = icons[step.step_number as keyof typeof icons];
            return (
              <div
                key={step.id}
                className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300"
              >
                <div className="absolute top-0 right-0 -mt-6 mr-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    الخطوة {step.step_number}: {step.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, index) => (
                      <li key={index} className="text-gray-600">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;