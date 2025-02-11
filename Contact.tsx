import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactInfo {
  id: string;
  phone: string;
  email: string;
  address: string;
  working_hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  cta_text: string;
}

const Contact = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const { data, error } = await supabase
          .from('contact_info')
          .select('*')
          .single();

        if (error) {
          console.error('Error fetching contact info:', error);
          return;
        }

        if (data) {
          setContactInfo(data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  if (loading) {
    return (
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl text-gray-600">جاري تحميل معلومات الاتصال...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!contactInfo) return null;

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">تواصل معنا</h2>
          <p className="text-xl text-gray-600">نحن هنا لمساعدتك في كل خطوة من رحلة نجاح عملك</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">معلومات الاتصال</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-secondary ml-4" />
                <div>
                  <p className="font-semibold text-gray-900">اتصل بنا</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-primary transition-colors" dir="ltr">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-6 w-6 text-secondary ml-4" />
                <div>
                  <p className="font-semibold text-gray-900">راسلنا عبر البريد الإلكتروني</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-primary transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-secondary ml-4" />
                <div>
                  <p className="font-semibold text-gray-900">موقعنا</p>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">ساعات العمل:</h4>
              <p className="text-gray-600">{contactInfo.working_hours.weekdays}</p>
              <p className="text-gray-600">{contactInfo.working_hours.saturday}</p>
              <p className="text-gray-600">{contactInfo.working_hours.sunday}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold text-primary mb-6">تواصل معنا الآن</h3>
            <p className="text-gray-600 mb-8">{contactInfo.cta_text}</p>
            <a
              href="https://tally.so/r/me092e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              تواصل معنا
              <ArrowLeft className="mr-2 h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;