
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Building, Settings, Construction } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <div className="pt-20">
      {/* Header Banner */}
      <div className="relative h-80">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t('services')}</h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="website-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-16">
            {/* General Contracting */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-40 h-40 rounded-full bg-construction-light flex items-center justify-center">
                  <Building size={80} className="text-construction" />
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">{t('general_contracting_service')}</h2>
                <p className="mb-4 text-lg">
                  {t('general_contracting_desc')}
                </p>
                <p>
                  Our general contracting services encompass a wide range of projects from planning and design to construction and completion. We handle residential buildings, commercial complexes, and infrastructure projects with the highest standards of quality and safety.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-construction-light p-4 rounded-lg text-center">
                    <h4 className="font-semibold">Residential</h4>
                  </div>
                  <div className="bg-construction-light p-4 rounded-lg text-center">
                    <h4 className="font-semibold">Commercial</h4>
                  </div>
                  <div className="bg-construction-light p-4 rounded-lg text-center">
                    <h4 className="font-semibold">Infrastructure</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Supply and Logistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center md:order-2">
                <div className="w-40 h-40 rounded-full bg-construction-light flex items-center justify-center">
                  <Settings size={80} className="text-construction" />
                </div>
              </div>
              <div className="md:col-span-2 md:order-1">
                <h2 className="text-2xl font-bold mb-4">{t('supply_logistics')}</h2>
                <p className="mb-4 text-lg">
                  {t('supply_logistics_desc')}
                </p>
                <p>
                  Our logistics team ensures timely delivery of all necessary materials and equipment. We manage the supply chain efficiently to prevent delays and minimize costs while maintaining the highest quality standards.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-construction-light p-4 rounded-lg text-center">
                    <h4 className="font-semibold">Materials</h4>
                  </div>
                  <div className="bg-construction-light p-4 rounded-lg text-center">
                    <h4 className="font-semibold">Equipment</h4>
                  </div>
                  <div className="bg-construction-light p-4 rounded-lg text-center">
                    <h4 className="font-semibold">Logistics</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-40 h-40 rounded-full bg-construction-light flex items-center justify-center">
                  <Construction size={80} className="text-construction" />
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">{t('project_management_service')}</h2>
                <p className="mb-4 text-lg">
                  {t('project_management_desc')}
                </p>
                <p>
                  Our project management expertise ensures that every project is delivered on time, within budget, and to the highest standards of quality. We coordinate all aspects of the project from design to completion, including planning, scheduling, resource allocation, and quality control.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-construction-light p-4 rounded-lg text-center">
                    <h4 className="font-semibold">Planning</h4>
                  </div>
                  <div className="bg-construction-light p-4 rounded-lg text-center">
                    <h4 className="font-semibold">Execution</h4>
                  </div>
                  <div className="bg-construction-light p-4 rounded-lg text-center">
                    <h4 className="font-semibold">Coordination</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-construction text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('contact_us')}</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Ready to start your project with El Nada Group? Contact us today to discuss your requirements and get a personalized solution.
          </p>
          <a href="/contact" className="bg-construction-gold hover:bg-white hover:text-construction text-white font-bold py-3 px-8 rounded-lg transition-colors">
            {t('contact_us')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
