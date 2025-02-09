import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
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

          <h1 className="text-4xl font-bold text-primary mb-8">الشروط والأحكام</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">مقدمة</h2>
              <p className="text-gray-600 mb-4">
                تحدد هذه الشروط والأحكام القواعد والإرشادات لاستخدام خدمات مينا لونشر. باستخدام موقعنا وخدماتنا، فإنك توافق على الالتزام بهذه الشروط.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">الخدمات</h2>
              <p className="text-gray-600 mb-4">نقدم الخدمات التالية:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>تأسيس الشركات في المملكة المتحدة</li>
                <li>خدمات قانونية</li>
                <li>خدمات محاسبية وضريبية</li>
                <li>دعم في فتح الحسابات البنكية</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">المسؤولية</h2>
              <p className="text-gray-600 mb-4">
                نحن نبذل قصارى جهدنا لضمان دقة المعلومات وجودة الخدمات، لكننا لا نتحمل المسؤولية عن:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>أي خسائر غير مباشرة</li>
                <li>تأخيرات خارجة عن إرادتنا</li>
                <li>قرارات الجهات الحكومية</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">الدفع والرسوم</h2>
              <p className="text-gray-600 mb-4">
                جميع الرسوم المذكورة تشمل ضريبة القيمة المضافة. يجب دفع الرسوم مقدماً قبل بدء الخدمة.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">الإلغاء والاسترداد</h2>
              <p className="text-gray-600 mb-4">
                يمكن إلغاء الخدمة خلال 14 يوماً من تاريخ الطلب. يخضع الاسترداد لشروط محددة.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">التعديلات</h2>
              <p className="text-gray-600 mb-4">
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطار المستخدمين بأي تغييرات جوهرية.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;