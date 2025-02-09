import React from 'react';
import { Building2, Globe2, Users2 } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'تأسيس سهل وموثوق',
    description: 'خدمات تأسيس شركات بريطانية مع دعم كامل باللغة العربية'
  },
  {
    icon: Globe2,
    title: 'وصول عالمي',
    description: 'افتح آفاقاً جديدة لأعمالك من خلال التواجد في السوق البريطاني'
  },
  {
    icon: Users2,
    title: 'دعم محلي',
    description: 'فريق متخصص يتحدث العربية لمساعدتك في كل خطوة'
  }
];

const About = () => {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">من نحن؟</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl leading-relaxed text-gray-700 mb-12">
              مينا لونشر هو حل مبتكر يهدف إلى تمكين رواد الأعمال في منطقة الشرق الأوسط وشمال إفريقيا من تأسيس وإدارة شركاتهم عبر الإنترنت بكل سهولة وموثوقية. نحن نقدم خدمات تأسيس الشركات البريطانية والدعم الكامل باللغة العربية، مع خيارات دفع مرنة وسهلة تتيح لك الوصول إلى أسواق عالمية. من خلال شراكتنا القانونية، نساعدك على بناء سمعة قوية والتوسع في بيئة عمل موثوقة.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="h-12 w-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;