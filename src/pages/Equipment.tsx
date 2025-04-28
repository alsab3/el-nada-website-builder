
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Equipment = () => {
  const { t } = useLanguage();

  const equipment = [
    {
      type: 'Loader CAT 963',
      power: '-',
      ownership: t('owned'),
      year: '2020',
      quantity: '2',
    },
    {
      type: 'Loader CAT906H2',
      power: '-',
      ownership: t('owned'),
      year: '2021',
      quantity: '2',
    },
    {
      type: '30-Ton Transport Trucks',
      power: '-',
      ownership: t('owned'),
      year: '2022',
      quantity: '4',
    },
    {
      type: 'Excavator',
      power: '150 HP',
      ownership: t('owned'),
      year: '2019',
      quantity: '3',
    },
    {
      type: 'Concrete Mixer Truck',
      power: '300 HP',
      ownership: t('owned'),
      year: '2021',
      quantity: '5',
    },
    {
      type: 'Crane',
      power: '80 Tons',
      ownership: t('owned'),
      year: '2020',
      quantity: '2',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header Banner */}
      <div className="relative h-80">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599707254554-027aeb4deacd?q=80&w=2057')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t('equipment')}</h1>
        </div>
      </div>

      {/* Equipment List */}
      <section className="website-section">
        <div className="container mx-auto">
          <h2 className="section-title mb-12">{t('owned_equipment')}</h2>
          
          {/* Table for larger screens */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-construction text-white">
                  <th className="tbl-header">{t('type')}</th>
                  <th className="tbl-header">{t('power')}</th>
                  <th className="tbl-header">{t('ownership')}</th>
                  <th className="tbl-header">{t('year')}</th>
                  <th className="tbl-header">{t('quantity')}</th>
                </tr>
              </thead>
              <tbody>
                {equipment.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="tbl-cell">{item.type}</td>
                    <td className="tbl-cell">{item.power}</td>
                    <td className="tbl-cell">{item.ownership}</td>
                    <td className="tbl-cell">{item.year}</td>
                    <td className="tbl-cell">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Cards for mobile */}
          <div className="md:hidden space-y-4">
            {equipment.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-sm bg-white">
                <h3 className="font-bold">{item.type}</h3>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div>
                    <p className="text-sm text-gray-600">{t('power')}:</p>
                    <p>{item.power}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t('ownership')}:</p>
                    <p>{item.ownership}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t('year')}:</p>
                    <p>{item.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t('quantity')}:</p>
                    <p>{item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Gallery */}
      <section className="website-section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-title mb-12">{t('equipment')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1599707254554-027aeb4deacd?q=80&w=2057" 
                alt="Construction Equipment" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Loader CAT 963</h3>
                <p className="text-gray-600">{t('quantity')}: 2</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1523467327888-a8a445992901?q=80&w=1974" 
                alt="Construction Equipment" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Loader CAT906H2</h3>
                <p className="text-gray-600">{t('quantity')}: 2</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1603559509128-1eb01ef28cc4?q=80&w=1974" 
                alt="Construction Equipment" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">30-Ton Transport Trucks</h3>
                <p className="text-gray-600">{t('quantity')}: 4</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1573247514939-2d7404834872?q=80&w=1776" 
                alt="Construction Equipment" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Excavator</h3>
                <p className="text-gray-600">{t('quantity')}: 3</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1583953808538-e67babc1560d?q=80&w=1836" 
                alt="Construction Equipment" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Concrete Mixer Truck</h3>
                <p className="text-gray-600">{t('quantity')}: 5</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1615486780246-76809146e7ac?q=80&w=1974" 
                alt="Construction Equipment" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Crane</h3>
                <p className="text-gray-600">{t('quantity')}: 2</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;
