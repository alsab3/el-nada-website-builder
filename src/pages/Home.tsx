
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from "@/components/ui/button";
import { Construction, Building, Settings, MapPin, Phone, Mail } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gray-100">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container relative mx-auto px-6 z-10 animate-fade-in">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('welcome')}
            </h1>
            <p className="text-xl text-white mb-6">
              {t('since')}
            </p>
            <p className="text-lg text-white mb-8">
              {t('professional')}
            </p>
            <p className="text-lg text-white mb-8">
              🌟 {t('explore')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-construction-gold hover:bg-construction text-white border-none">
                <Link to="/services">
                  {t('explore_our_services')}
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white hover:text-construction">
                <Link to="/contact">
                  {t('contact_us')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="website-section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">{t('who_we_are')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">{t('about_desc')}</p>
              <ul className="space-y-2 mb-6">
                <li>• {t('reg_no')}</li>
                <li>• {t('union_no')}</li>
              </ul>
              
              <h3 className="text-xl font-bold mb-2">{t('we_specialize')}</h3>
              <ul className="space-y-2 mb-6">
                <li>• {t('general_contracting')}</li>
                <li>• {t('project_management')}</li>
                <li>• {t('supply')}</li>
              </ul>
              
              <div className="flex justify-center md:justify-start">
                <Button asChild className="bg-construction hover:bg-construction-gold">
                  <Link to="/about">{t('learn_more_about_us')}</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070" 
                alt="El Nada Group Office" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="website-section bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">{t('services')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="inline-block p-4 rounded-full bg-construction-light mb-4">
                <Building size={40} className="text-construction" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('general_contracting_service')}</h3>
              <p>{t('general_contracting_desc')}</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="inline-block p-4 rounded-full bg-construction-light mb-4">
                <Settings size={40} className="text-construction" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('supply_logistics')}</h3>
              <p>{t('supply_logistics_desc')}</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="inline-block p-4 rounded-full bg-construction-light mb-4">
                <Construction size={40} className="text-construction" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('project_management_service')}</h3>
              <p>{t('project_management_desc')}</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-construction hover:bg-construction-gold">
              <Link to="/services">{t('view_all_services')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="website-section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">{t('projects')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2231" 
                  alt="Suez Canal University" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg">New Suez Canal University</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1507639450518-6284d4a0cc85?q=80&w=2070" 
                  alt="Badr City Housing" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg">134 Residential Buildings - Badr City</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1627548914756-4bd00e7a5607?q=80&w=2070" 
                  alt="Administrative Capital" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg">84 Residential Buildings - New Administrative Capital</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-construction hover:bg-construction-gold">
              <Link to="/projects">{t('see_our_projects')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Quick Info */}
      <section className="website-section bg-construction text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('get_in_touch')}</h2>
              <p className="mb-6">{t('professional')}</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-2 mt-1 text-construction-gold" />
                  <span>{t('address_value')}</span>
                </li>
                <li className="flex items-start">
                  <Phone className="mr-2 mt-1 text-construction-gold" />
                  <span>01006022098 / 01018216333</span>
                </li>
                <li className="flex items-start">
                  <Mail className="mr-2 mt-1 text-construction-gold" />
                  <span>Elnada2012@gmail.com</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild className="bg-construction-gold hover:bg-white hover:text-construction">
                  <Link to="/contact">{t('contact_us_now')}</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6750561175262!2d31.425793!3d30.0414147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cc197d13ef7%3A0x7a77b4eaaa171ad!2z2KfZhNiq2KzZhdiuINin2YTYrtmA2KfZhdizINin2YTZgtmA2KfZh9ix2Kkg2KfZhNmA2KzYr9mK2K_YqQ!5e0!3m2!1sen!2sus!4v1683059084973!5m2!1sen!2sus" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="El Nada Group Location"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
