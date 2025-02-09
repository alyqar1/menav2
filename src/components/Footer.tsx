import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">مينا لونشر</h3>
            <p className="text-gray-400 mb-6">
              نساعدك في تأسيس وتطوير أعمالك في المملكة المتحدة بكل سهولة وموثوقية
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone className="h-5 w-5 ml-2" />
                <a href="tel:+96181522815" dir="ltr">+961 81 522 815</a>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5 ml-2" />
                <a href="mailto:info@menalauncher.com">info@menalauncher.com</a>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 ml-2 flex-shrink-0" />
                <span>المملكة المتحدة - لندن</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com/menalauncher" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/menalauncher" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/company/menalauncher" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/menalauncher" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  عن الشركة
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  الأسعار
                </a>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-400 hover:text-white transition-colors">
                  قصص النجاح
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">الشروط والسياسات</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            حقوق الطبع والنشر © {new Date().getFullYear()} مينا لونشر. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;