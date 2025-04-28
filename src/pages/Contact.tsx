
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    toast({
      title: "Message Sent",
      description: "Thank you for contacting El Nada Group. We will respond to your inquiry soon.",
    });
  };

  return (
    <div className="pt-20">
      {/* Header Banner */}
      <div className="relative h-80">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t('contact')}</h1>
        </div>
      </div>

      {/* Contact Information and Form */}
      <section className="website-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="section-title mb-8">{t('get_in_touch')}</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex">
                  <MapPin size={24} className="mr-4 text-construction flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">{t('address')}</h3>
                    <p>{t('address_value')}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone size={24} className="mr-4 text-construction flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">{t('phones')}</h3>
                    <p>01006022098 / 01018216333</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail size={24} className="mr-4 text-construction flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">{t('email')}</h3>
                    <p>Elnada2012@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Saturday - Thursday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="section-title mb-8">{t('contact_us')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    {t('name')}
                  </label>
                  <Input 
                    id="name" 
                    placeholder={t('name_placeholder')} 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    {t('email')}
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder={t('email_placeholder')} 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    {t('subject')}
                  </label>
                  <Input 
                    id="subject" 
                    placeholder={t('subject_placeholder')} 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    {t('message')}
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder={t('message_placeholder')} 
                    rows={5} 
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-construction hover:bg-construction-gold"
                >
                  {t('send_message')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="website-section bg-gray-100 pt-0">
        <div className="container mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6750561175262!2d31.425793!3d30.0414147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cc197d13ef7%3A0x7a77b4eaaa171ad!2z2KfZhNiq2KzZhdiuINin2YTYrtmA2KfZhdizINin2YTZgtmA2KfZh9ix2Kkg2KfZhNmA2KzYr9mK2K_YqQ!5e0!3m2!1sen!2sus!4v1683059084973!5m2!1sen!2sus" 
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="El Nada Group Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
