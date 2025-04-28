
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Header Banner */}
      <div className="relative h-80">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=1974')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t('about')}</h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="website-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title">{t('who_we_are')}</h2>
              <p className="text-lg mb-6">{t('about_desc')}</p>
              <ul className="space-y-2 mb-6 list-disc list-inside">
                <li>{t('reg_no')}</li>
                <li>{t('union_no')}</li>
              </ul>
              
              <h3 className="text-xl font-bold mb-4">{t('we_specialize')}</h3>
              <ul className="space-y-2 mb-8 list-disc list-inside">
                <li>{t('general_contracting')}</li>
                <li>{t('project_management')}</li>
                <li>{t('supply')}</li>
              </ul>

              <div className="bg-construction-light p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-2">{t('vision')}</h3>
                <p>{t('vision_desc')}</p>
              </div>
              
              <div className="bg-construction-light p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-2">{t('mission')}</h3>
                <p>{t('mission_desc')}</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{t('contact')}</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <MapPin size={20} className="mr-2 text-construction" />
                    <div>
                      <strong className="block">{t('address')}:</strong>
                      {t('address_value')}
                    </div>
                  </li>
                  <li className="flex">
                    <Phone size={20} className="mr-2 text-construction" />
                    <div>
                      <strong className="block">{t('phones')}:</strong>
                      01006022098 / 01018216333
                    </div>
                  </li>
                  <li className="flex">
                    <Mail size={20} className="mr-2 text-construction" />
                    <div>
                      <strong className="block">{t('email')}:</strong>
                      Elnada2012@gmail.com
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="space-y-8">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070" 
                    alt="El Nada Group Office" 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1578772752638-61e44e5b783e?q=80&w=2070" 
                    alt="Construction Site" 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6750561175262!2d31.425793!3d30.0414147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cc197d13ef7%3A0x7a77b4eaaa171ad!2z2KfZhNiq2KzZhdiuINin2YTYrtmA2KfZhdizINin2YTZgtmA2KfZh9ix2Kkg2KfZhNmA2KzYr9mK2K_YqQ!5e0!3m2!1sen!2sus!4v1683059084973!5m2!1sen!2sus" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="El Nada Group Location"
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
