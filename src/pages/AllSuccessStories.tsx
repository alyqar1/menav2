import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface SuccessStory {
  id: string;
  name: string;
  job_title: string;
  nationality: string;
  video_url: string;
  thumbnail_url: string;
}

const AllSuccessStories = () => {
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllStories = async () => {
      try {
        const { data, error } = await supabase
          .from('success_stories')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching success stories:', error);
          return;
        }

        if (data) {
          setStories(data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllStories();
  }, []);

  if (loading) {
    return (
      <div className="py-24 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl text-gray-600">جاري تحميل قصص النجاح...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center text-primary hover:text-primary/80"
          >
            <ArrowRight className="h-5 w-5 ml-1" />
            العودة للرئيسية
          </a>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">قصص نجاح عملائنا</h1>
          <p className="text-xl text-gray-600">اكتشف كيف ساعدنا عملائنا في تحقيق أحلامهم</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={story.video_url}
                  title={`Success Story - ${story.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">{story.name}</h3>
                  <span className="bg-secondary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {story.nationality}
                  </span>
                </div>
                <p className="text-gray-600">{story.job_title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSuccessStories;