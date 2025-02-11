import React, { useEffect, useState } from 'react';
import * as Icons from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Segment {
  id: string;
  title: string;
  description: string;
  icon_name: string;
}

const AudienceSegments = () => {
  const [segments, setSegments] = useState<Segment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSegments = async () => {
      try {
        const { data, error } = await supabase
          .from('audience_segments')
          .select('*')
          .order('order');

        if (error) {
          console.error('Error fetching segments:', error);
          return;
        }

        if (data) {
          setSegments(data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSegments();
  }, []);

  if (loading) {
    return (
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl text-gray-600">جاري تحميل المحتوى...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">الخدمات المناسبة لكل نوع من الأعمال</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {segments.map((segment) => {
            const Icon = Icons[segment.icon_name as keyof typeof Icons];
            return (
              <div
                key={segment.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="h-14 w-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mr-4">{segment.title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{segment.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AudienceSegments;