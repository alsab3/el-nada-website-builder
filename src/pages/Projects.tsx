
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const completedProjects = [
    {
      name: 'Extension and renovation of the El-Sterral Maritime Building, Alexandria',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2231',
      year: '2021',
    },
    {
      name: 'Outpatient Clinics Project - El Hankestep',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
      year: '2020',
    },
    {
      name: 'Social Housing Services in Badr City',
      image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2070',
      year: '2019',
    },
    {
      name: 'New Suez Canal University Colleges Buildings',
      image: 'https://images.unsplash.com/photo-1575379972039-7856afcfc586?q=80&w=1975',
      year: '2022',
    },
    {
      name: '134 Residential Buildings - Badr City',
      image: 'https://images.unsplash.com/photo-1507639450518-6284d4a0cc85?q=80&w=2070',
      year: '2018',
    },
    {
      name: '84 Residential Buildings - New Administrative Capital',
      image: 'https://images.unsplash.com/photo-1627548914756-4bd00e7a5607?q=80&w=2070',
      year: '2023',
    },
  ];

  const ongoingProjects = [
    {
      name: 'Commercial Complex - Sheikh Zayed City',
      image: 'https://images.unsplash.com/photo-1526489550178-7bd5d9944e4f?q=80&w=2077',
      status: 'In progress - 60% Complete',
    },
    {
      name: 'Industrial Park Infrastructure - 10th of Ramadan City',
      image: 'https://images.unsplash.com/photo-1578658671785-8a76ce84464b?q=80&w=1974',
      status: 'In progress - 40% Complete',
    },
    {
      name: 'Hospital Extension - Maadi District',
      image: 'https://images.unsplash.com/photo-1612655107885-43265a7e593e?q=80&w=2070',
      status: 'In progress - 30% Complete',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header Banner */}
      <div className="relative h-80">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1936')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t('projects')}</h1>
        </div>
      </div>

      {/* Completed Projects */}
      <section className="website-section">
        <div className="container mx-auto">
          <h2 className="section-title mb-12">{t('completed_projects')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-64">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                    <h3 className="font-bold text-lg">{project.name}</h3>
                    <p className="text-sm">{project.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="website-section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-title mb-12">{t('ongoing_projects')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((project, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-64">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-0 right-0 bg-construction-gold py-1 px-3 text-white text-sm">
                    Ongoing
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                    <h3 className="font-bold text-lg">{project.name}</h3>
                    <p className="text-sm">{project.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="website-section">
        <div className="container mx-auto">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-96 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2231" 
                  alt="Featured Project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Featured Project: New Suez Canal University</h3>
                <p className="mb-6">
                  A comprehensive university campus development project featuring multiple educational buildings, 
                  administration facilities, and supporting infrastructure. Completed on time and within budget, 
                  this project showcases El Nada Group's ability to handle large-scale institutional projects.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex">
                    <span className="font-bold w-28">Client:</span>
                    <span>Ministry of Higher Education</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold w-28">Duration:</span>
                    <span>24 months</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold w-28">Value:</span>
                    <span>180 million EGP</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold w-28">Completed:</span>
                    <span>2022</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
