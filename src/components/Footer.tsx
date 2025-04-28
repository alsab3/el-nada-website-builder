
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-construction text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">El Nada Group</h3>
            <p className="mb-4">{t('since')}</p>
            <p>{t('tagline')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('home')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-construction-gold transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-construction-gold transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-construction-gold transition-colors">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-construction-gold transition-colors">
                  {t('projects')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              <li className="hover:text-construction-gold transition-colors">
                {t('general_contracting_service')}
              </li>
              <li className="hover:text-construction-gold transition-colors">
                {t('supply_logistics')}
              </li>
              <li className="hover:text-construction-gold transition-colors">
                {t('project_management_service')}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>{t('address_value')}</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>01006022098 / 01018216333</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>Elnada2012@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>
            © {currentYear} {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
