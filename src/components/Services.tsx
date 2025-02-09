import React from 'react';
import { Building2, Scale, Calculator, Users, Globe, FileText } from 'lucide-react';

const services = [
  {
    title: 'تأسيس الشركات',
    description: 'نساعدك في تأسيس شركتك بسهولة وسرعة مع كافة المتطلبات القانونية',
    icon: Building2,
  },
  {
    title: 'الخدمات القانونية',
    description: 'نقدم استشارات قانونية شاملة لحماية مصالح شركتك',
    icon: Scale,
  },
  {
    title: 'خدمات الضرائب',
    description: 'نساعدك في إدارة الضرائب والامتثال للمتطلبات المالية',
    icon: Calculator,
  },
  {
    title: 'خدمات الموارد البشرية',
    description: 'نوفر حلول متكاملة لإدارة الموظفين والتوظيف',
    icon: Users,
  },
  {
    title: 'خدمات التوسع الدولي',
    description: 'نساعدك في التوسع إلى أسواق جديدة في المنطقة',
    icon: Globe,
  },
  {
    title: 'خدمات التراخيص',
    description: 'نساعدك في الحصول على التراخيص اللازمة لعملك',
    icon: FileText,
  },
];

const Services = () => {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">خدماتنا</h2>
          <p className="mt-4 text-xl text-gray-600">نقدم مجموعة شاملة من الخدمات لدعم نمو أعمالك</p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-0 right-0 -mt-6 mr-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;