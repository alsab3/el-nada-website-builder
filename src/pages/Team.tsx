
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Team = () => {
  const { t } = useLanguage();

  const technicalTeam = [
    {
      name: 'Alaa Mohamed Ibrahim',
      position: t('projects_manager'),
      qualification: 'B.Sc. Architectural Engineering',
    },
    {
      name: 'Amr Abdelaziz Nada',
      position: t('head_construction'),
      qualification: 'Ph.D. Structural Engineering',
    },
    {
      name: 'Ahmed Abdellatif Ali',
      position: t('head_contracts'),
      qualification: 'B.Sc. Civil Engineering',
    },
    {
      name: 'Mahmoud Abdelaziz Abdelhamid',
      position: t('head_technical'),
      qualification: 'B.Sc. Civil Engineering',
    },
    {
      name: 'Mahmoud Ahmed Mohamed',
      position: t('head_mechanical'),
      qualification: 'B.Sc. Mechanical Engineering',
    },
    {
      name: 'Dina Elsaid Ali',
      position: t('head_electrical'),
      qualification: 'B.Sc. Electrical Engineering',
    },
    {
      name: 'Alaa Mamdouh Mohamed',
      position: t('head_quality'),
      qualification: 'B.Sc. Architectural Engineering',
    },
  ];

  const administrativeTeam = [
    {
      name: 'Abdelaziz Abdelhamid Nada',
      position: t('chairman'),
      qualification: 'B.A. in Arts and Education',
    },
    {
      name: 'Yehia Abdallah Ibrahim',
      position: t('general_manager'),
      qualification: 'B.A. in Arts',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header Banner */}
      <div className="relative h-80">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618477462146-aa55d119ad97?q=80&w=2070')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t('team')}</h1>
        </div>
      </div>

      {/* Technical Team */}
      <section className="website-section">
        <div className="container mx-auto">
          <h2 className="section-title mb-12">{t('technical_team')}</h2>
          
          {/* Table for larger screens */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-construction text-white">
                  <th className="tbl-header">{t('full_name')}</th>
                  <th className="tbl-header">{t('position')}</th>
                  <th className="tbl-header">{t('qualification')}</th>
                </tr>
              </thead>
              <tbody>
                {technicalTeam.map((member, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="tbl-cell">{member.name}</td>
                    <td className="tbl-cell">{member.position}</td>
                    <td className="tbl-cell">{member.qualification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Cards for mobile */}
          <div className="md:hidden space-y-4">
            {technicalTeam.map((member, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-sm bg-white">
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-construction">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Team */}
      <section className="website-section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-title mb-12">{t('administrative_team')}</h2>
          
          {/* Table for larger screens */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-construction text-white">
                  <th className="tbl-header">{t('full_name')}</th>
                  <th className="tbl-header">{t('position')}</th>
                  <th className="tbl-header">{t('qualification')}</th>
                </tr>
              </thead>
              <tbody>
                {administrativeTeam.map((member, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="tbl-cell">{member.name}</td>
                    <td className="tbl-cell">{member.position}</td>
                    <td className="tbl-cell">{member.qualification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Cards for mobile */}
          <div className="md:hidden space-y-4">
            {administrativeTeam.map((member, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-sm bg-white">
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-construction">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074" 
              alt="El Nada Team" 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
