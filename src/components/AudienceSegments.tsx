import React from 'react';
import { Briefcase, ShoppingCart, Video, BarChart } from 'lucide-react';

const segments = [
  {
    icon: Briefcase,
    title: 'المستقلين',
    description: 'إذا كنت تعمل كفريلانسر في السعودية أو دول أخرى في المنطقة، نحن نقدم لك الحلول المثالية لتأسيس عملك بشكل قانوني وآمن مع الوصول إلى بوابات الدفع الدولية مثل Stripe.'
  },
  {
    icon: ShoppingCart,
    title: 'التجارة الإلكترونية',
    description: 'أنت صاحب متجر إلكتروني وتحتاج إلى تأسيس شركة في المملكة المتحدة؟ نحن نقدم لك خدمات مخصصة لتساعدك على توسيع نطاق أعمالك عبر الإنترنت بسهولة مع دعم متكامل ودفع آمن.'
  },
  {
    icon: Video,
    title: 'المبدعين في المحتوى',
    description: 'إذا كنت مديرًا لوسائل الإعلام أو منتج محتوى، نحن نقدم لك الحلول القانونية المناسبة وتسهيلات الدفع لمساعدتك على النمو في السوق الدولي، مع دعم قوي ودائم.'
  },
  {
    icon: BarChart,
    title: 'المسوقين الرقميين',
    description: 'سواء كنت تعمل كمسوق رقمي أو تدير وكالة تسويق، نحن هنا لدعمك من خلال تأسيس شركتك وتحقيق جميع احتياجاتك في السوق الدولية بكل سهولة.'
  }
];

const AudienceSegments = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">الخدمات المناسبة لكل نوع من الأعمال</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <segment.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mr-4">{segment.title}</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{segment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudienceSegments;