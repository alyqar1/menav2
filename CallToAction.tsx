import React from 'react';
import { ArrowLeft } from 'lucide-react';
import PaymentButton from './PaymentButton';

const CallToAction = () => {
  return (
    <div className="bg-primary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          ابدأ عملك الآن مع مينا لونشر
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          تأسيس شركتك أصبح أسهل من أي وقت مضى. انطلق في عالم الأعمال مع خدماتنا الموثوقة والمرنة.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://tally.so/r/me092e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg bg-secondary text-primary hover:bg-secondary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            ابدأ الآن
            <ArrowLeft className="mr-2 h-6 w-6" />
          </a>
          <PaymentButton />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;