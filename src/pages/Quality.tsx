
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle } from 'lucide-react';

const Quality = () => {
  const { t } = useLanguage();

  const qualityItems = [
    t('quality_item1'),
    t('quality_item2'),
    t('quality_item3'),
    t('quality_item4'),
    t('quality_item5'),
    t('quality_item6'),
  ];

  return (
    <div className="pt-20">
      {/* Header Banner */}
      <div className="relative h-80">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t('quality')}</h1>
        </div>
      </div>

      {/* Quality Assurance System */}
      <section className="website-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-8">{t('quality_assurance')}</h2>
              
              <ul className="space-y-4">
                {qualityItems.map((item, index) => (
                  <li key={index} className="flex">
                    <CheckCircle className="text-construction-gold mr-4 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="mt-8 text-lg">
                {t('quality_commitment')}
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" 
                alt="Quality Assurance" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="website-section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-title mb-12 text-center">Our Quality Standards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-construction-light flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-construction">01</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Planning Excellence</h3>
              <p className="text-center">
                We establish detailed project plans with clear milestones, resource allocation, and risk management strategies.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-construction-light flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-construction">02</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Material Quality</h3>
              <p className="text-center">
                We source only the highest quality materials from trusted suppliers, with rigorous testing and inspection processes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-construction-light flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-construction">03</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Workmanship</h3>
              <p className="text-center">
                Our technical team ensures all work meets or exceeds industry standards, with regular inspections throughout construction.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-construction-light flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-construction">04</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Safety Standards</h3>
              <p className="text-center">
                Safety is our top priority, with comprehensive protocols, regular training, and strict adherence to regulations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-construction-light flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-construction">05</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Communication</h3>
              <p className="text-center">
                We maintain open, transparent communication with clients, stakeholders, and team members throughout every project.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-construction-light flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-construction">06</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Environmental Responsibility</h3>
              <p className="text-center">
                We implement sustainable practices and responsible waste management in all our construction projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="website-section">
        <div className="container mx-auto text-center">
          <h2 className="section-title mx-auto mb-12">Certifications & Compliance</h2>
          
          <p className="text-lg max-w-3xl mx-auto mb-12">
            El Nada Group maintains the highest industry standards and complies with all relevant Egyptian 
            regulations and international best practices in construction and project management.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-5xl text-construction mb-2">ISO</div>
              <p className="font-semibold">ISO 9001</p>
              <p className="text-sm">Quality Management</p>
            </div>
            
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-5xl text-construction mb-2">ISO</div>
              <p className="font-semibold">ISO 14001</p>
              <p className="text-sm">Environmental Management</p>
            </div>
            
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-5xl text-construction mb-2">ISO</div>
              <p className="font-semibold">ISO 45001</p>
              <p className="text-sm">Occupational Health & Safety</p>
            </div>
            
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-5xl text-construction mb-2">ECA</div>
              <p className="font-semibold">Egyptian Code</p>
              <p className="text-sm">Construction Standards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;
