import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Hero = () => {
  const [videoUrl, setVideoUrl] = useState<string>('');

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const { data, error } = await supabase
          .from('hero_video')
          .select('video_url')
          .single();

        if (error) {
          console.error('Error fetching video URL:', error);
          return;
        }

        if (data) {
          setVideoUrl(data.video_url);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchVideoUrl();
  }, []);

  return (
    <div className="relative bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform -rotate-45 -translate-x-1/2 -translate-y-1/2">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="h-96 w-96 border-4 border-secondary rounded-full"
              style={{
                left: `${i * 200}px`,
                top: `${i * 200}px`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block mb-2">ابدأ شركتك البريطانية</span>
              <span className="block text-secondary">عبر الإنترنت من أي مكان في العالم</span>
              <span className="block text-white text-3xl sm:text-4xl md:text-5xl mt-4">مع مينا لونشر</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 sm:text-2xl">
              احصل على خدمات تأسيس الشركات البريطانية مع دعم محلي، تسهيلات في الدفع، ودعم كامل باللغة العربية
            </p>
            <div className="mt-10">
              <a
                href="https://tally.so/r/me092e"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-primary bg-secondary hover:bg-secondary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                ابدأ الآن
                <ArrowLeft className="mr-2 h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl">
            {videoUrl && (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videoUrl}
                title="MENA Launcher Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;