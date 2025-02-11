import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { supabase } from '../lib/supabase';
import PaymentButton from './PaymentButton';

interface ContactInfo {
  id: string;
  phone: string;
  email: string;
  address: string;
}

interface SocialLink {
  id: string;
  platform: string;
  url: string;
  order: number;
}

interface QuickLink {
  id: string;
  title: string;
  url: string;
  section: string;
  order: number;
}

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
};

const Footer = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [quickLinks, setQuickLinks] = useState<QuickLink[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch contact info
        const { data: contactData, error: contactError } = await supabase
          .from('contact_info')
          .select('*')
          .single();

        if (contactError) {
          console.error('Error fetching contact info:', contactError);
        } else {
          setContactInfo(contactData);
        }

        // Fetch social links
        const { data: socialData, error: socialError } = await supabase
          .from('social_links')
          .select('*')
          .order('order');

        if (socialError) {
          console.error('Error fetching social links:', socialError);
        } else {
          setSocialLinks(socialData);
        }

        // Fetch quick links
        const { data: linksData, error: linksError } = await supabase
          .from('quick_links')
          .select('*')
          .order('order');

        if (linksError) {
          console.error('Error fetching quick links:', linksError);
        } else {
          setQuickLinks(linksData);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !contactInfo) return null;

  const quickLinksSection = quickLinks.filter(link => link.section === 'quick_links');
  const legalLinksSection = quickLinks.filter(link => link.section === 'legal');

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
                <a href={`tel:${contactInfo.phone}`} dir="ltr">{contactInfo.phone}</a>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5 ml-2" />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 ml-2 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.platform as keyof typeof socialIcons];
                return Icon ? (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ) : null;
              })}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {quickLinksSection.map((link) => (
                <li key={link.id}>
                  {link.url.startsWith('/') ? (
                    <Link to={link.url} className="text-gray-400 hover:text-white transition-colors">
                      {link.title}
                    </Link>
                  ) : (
                    <a 
                      href={link.url} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <PaymentButton />
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">الشروط والسياسات</h4>
            <ul className="space-y-2">
              {legalLinksSection.map((link) => (
                <li key={link.id}>
                  {link.url.startsWith('/') ? (
                    <Link to={link.url} className="text-gray-400 hover:text-white transition-colors">
                      {link.title}
                    </Link>
                  ) : (
                    <a 
                      href={link.url} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
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