import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center text-primary hover:text-primary/80"
            >
              <ArrowRight className="h-5 w-5 ml-1" />
              العودة للرئيسية
            </a>
          </div>

          <h1 className="text-4xl font-bold text-primary mb-8">سياسة الخصوصية</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">مقدمة</h2>
              <p className="text-gray-600 mb-4">
                نحن في مينا لونشر نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحماية معلوماتك عند استخدام موقعنا وخدماتنا.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">المعلومات التي نجمعها</h2>
              <p className="text-gray-600 mb-4">نقوم بجمع المعلومات التالية:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>المعلومات الشخصية (الاسم، البريد الإلكتروني، رقم الهاتف)</li>
                <li>معلومات الشركة</li>
                <li>معلومات الدفع</li>
                <li>بيانات التصفح</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">كيفية استخدام المعلومات</h2>
              <p className="text-gray-600 mb-4">نستخدم معلوماتك للأغراض التالية:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>تقديم خدماتنا</li>
                <li>التواصل معك</li>
                <li>تحسين خدماتنا</li>
                <li>الامتثال للمتطلبات القانونية</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">حماية المعلومات</h2>
              <p className="text-gray-600 mb-4">
                نتخذ إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">حقوقك</h2>
              <p className="text-gray-600 mb-4">لديك الحق في:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>الوصول إلى معلوماتك</li>
                <li>تصحيح معلوماتك</li>
                <li>حذف معلوماتك</li>
                <li>الاعتراض على معالجة معلوماتك</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;