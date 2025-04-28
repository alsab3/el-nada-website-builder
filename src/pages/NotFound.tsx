
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-construction">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">Page Not Found</h2>
        <p className="mt-2 text-lg text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
        <div className="mt-6">
          <Button asChild className="bg-construction hover:bg-construction-gold">
            <Link to="/">{t('home')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
