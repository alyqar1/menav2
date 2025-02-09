import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface PaymentOption {
  id: string;
  title: string;
  description: string;
  url: string;
  order: number;
}

const PaymentButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<PaymentOption[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaymentOptions = async () => {
      try {
        const { data, error } = await supabase
          .from('payment_options')
          .select('*')
          .order('order', { ascending: true });

        if (error) {
          console.error('Error fetching payment options:', error);
          return;
        }

        if (data) {
          setOptions(data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentOptions();
  }, []);

  if (loading) {
    return (
      <button
        disabled
        className="bg-primary text-white px-6 py-3 rounded-lg font-medium opacity-75"
      >
        جاري التحميل...
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
      >
        ادفع الآن
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-72 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-2 space-y-1">
            {options.map((option) => (
              <a
                key={option.id}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                <div>
                  <p className="font-medium mb-1">{option.title}</p>
                  <p className="text-gray-500 text-xs">{option.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default PaymentButton;