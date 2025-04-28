
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  'home': {
    en: 'Home',
    ar: 'الرئيسية'
  },
  'about': {
    en: 'About Us',
    ar: 'من نحن'
  },
  'services': {
    en: 'Our Services',
    ar: 'خدماتنا'
  },
  'team': {
    en: 'Our Team',
    ar: 'فريقنا'
  },
  'equipment': {
    en: 'Equipment',
    ar: 'المعدات'
  },
  'projects': {
    en: 'Projects',
    ar: 'المشاريع'
  },
  'quality': {
    en: 'Quality',
    ar: 'الجودة'
  },
  'contact': {
    en: 'Contact',
    ar: 'اتصل بنا'
  },
  'welcome': {
    en: 'Welcome to El Nada Group For General Contracting',
    ar: 'مرحبا بكم في مجموعة الندى للمقاولات العامة'
  },
  'since': {
    en: 'Since 2014, El Nada Group has been a trusted leader in general contracting and supply services across Egypt.',
    ar: 'منذ عام 2014، كانت مجموعة الندى رائدة موثوقة في المقاولات العامة وخدمات التوريد في جميع أنحاء مصر.'
  },
  'professional': {
    en: 'Our professional team, modern equipment, and commitment to quality ensure excellence in every project we undertake.',
    ar: 'يضمن فريقنا المحترف ومعداتنا الحديثة والتزامنا بالجودة التميز في كل مشروع نقوم به.'
  },
  'explore': {
    en: 'Explore our services, meet our team, and discover why clients trust El Nada Group.',
    ar: 'استكشف خدماتنا، وتعرف على فريقنا، واكتشف لماذا يثق العملاء في مجموعة الندى.'
  },
  'learn_more': {
    en: 'Learn More',
    ar: 'اكتشف المزيد'
  },
  'contact_us': {
    en: 'Contact Us',
    ar: 'اتصل بنا'
  },
  'who_we_are': {
    en: 'Who We Are',
    ar: 'من نحن'
  },
  'about_desc': {
    en: 'Founded in December 2014, El Nada Group For General Contracting is registered under:',
    ar: 'تأسست مجموعة الندى للمقاولات العامة في ديسمبر 2014، وهي مسجلة تحت:'
  },
  'reg_no': {
    en: 'Commercial Registration No.: 12299',
    ar: 'رقم السجل التجاري: 12299'
  },
  'union_no': {
    en: 'Contractor Union Membership No.: 51497',
    ar: 'رقم عضوية اتحاد المقاولين: 51497'
  },
  'we_specialize': {
    en: 'We specialize in:',
    ar: 'نحن متخصصون في:'
  },
  'general_contracting': {
    en: 'General contracting',
    ar: 'المقاولات العامة'
  },
  'project_management': {
    en: 'Project management',
    ar: 'إدارة المشاريع'
  },
  'supply': {
    en: 'Supply and logistics services',
    ar: 'خدمات التوريد والخدمات اللوجستية'
  },
  'vision': {
    en: 'Vision',
    ar: 'رؤيتنا'
  },
  'vision_desc': {
    en: 'To lead the Egyptian contracting sector through innovation, reliability, and client satisfaction.',
    ar: 'لقيادة قطاع المقاولات المصري من خلال الابتكار والموثوقية ورضا العملاء.'
  },
  'mission': {
    en: 'Mission',
    ar: 'مهمتنا'
  },
  'mission_desc': {
    en: 'To deliver high-quality projects safely, on-time, and within budget.',
    ar: 'تقديم مشاريع عالية الجودة بأمان وفي الوقت المحدد وضمن الميزانية.'
  },
  'address': {
    en: 'Address',
    ar: 'العنوان'
  },
  'address_value': {
    en: '131, Second Zone, Fifth Settlement, New Cairo',
    ar: '131، المنطقة الثانية، التجمع الخامس، القاهرة الجديدة'
  },
  'phones': {
    en: 'Phones',
    ar: 'الهواتف'
  },
  'email': {
    en: 'Email',
    ar: 'البريد الإلكتروني'
  },
  'general_contracting_service': {
    en: 'General Contracting',
    ar: 'المقاولات العامة'
  },
  'general_contracting_desc': {
    en: 'Residential, commercial, and infrastructure projects.',
    ar: 'المشاريع السكنية والتجارية ومشاريع البنية التحتية.'
  },
  'supply_logistics': {
    en: 'Supply and Logistics',
    ar: 'التوريد والخدمات اللوجستية'
  },
  'supply_logistics_desc': {
    en: 'Delivering essential equipment and materials for construction projects.',
    ar: 'توريد المعدات والمواد الأساسية لمشاريع البناء.'
  },
  'project_management_service': {
    en: 'Project Management',
    ar: 'إدارة المشاريع'
  },
  'project_management_desc': {
    en: 'Ensuring seamless coordination from design through project completion.',
    ar: 'ضمان التنسيق السلس من التصميم حتى إكمال المشروع.'
  },
  'technical_team': {
    en: 'Technical Team',
    ar: 'الفريق التقني'
  },
  'administrative_team': {
    en: 'Administrative Team',
    ar: 'الفريق الإداري'
  },
  'full_name': {
    en: 'Full Name',
    ar: 'الاسم الكامل'
  },
  'position': {
    en: 'Position',
    ar: 'المنصب'
  },
  'qualification': {
    en: 'Qualification',
    ar: 'المؤهل'
  },
  'owned_equipment': {
    en: 'Owned Equipment',
    ar: 'المعدات المملوكة'
  },
  'type': {
    en: 'Type',
    ar: 'النوع'
  },
  'power': {
    en: 'Power/Capacity',
    ar: 'القدرة/السعة'
  },
  'ownership': {
    en: 'Ownership',
    ar: 'الملكية'
  },
  'year': {
    en: 'Year',
    ar: 'السنة'
  },
  'quantity': {
    en: 'Quantity',
    ar: 'الكمية'
  },
  'completed_projects': {
    en: 'Selected Completed Projects',
    ar: 'مشاريع مختارة مكتملة'
  },
  'ongoing_projects': {
    en: 'Ongoing Projects',
    ar: 'المشاريع الجارية'
  },
  'quality_assurance': {
    en: 'Our Quality Assurance System Includes',
    ar: 'يشمل نظام ضمان الجودة لدينا'
  },
  'quality_item1': {
    en: 'Weekly site inspections',
    ar: 'عمليات تفتيش أسبوعية للموقع'
  },
  'quality_item2': {
    en: 'Weekly progress meetings',
    ar: 'اجتماعات تقدم أسبوعية'
  },
  'quality_item3': {
    en: 'Monthly detailed progress reports',
    ar: 'تقارير تقدم مفصلة شهرية'
  },
  'quality_item4': {
    en: 'Supply and procurement reporting',
    ar: 'تقارير التوريد والمشتريات'
  },
  'quality_item5': {
    en: 'Financial budget tracking',
    ar: 'تتبع الميزانية المالية'
  },
  'quality_item6': {
    en: 'Supplier interviews and contract evaluations',
    ar: 'مقابلات الموردين وتقييمات العقود'
  },
  'quality_commitment': {
    en: 'We are committed to transparency, client satisfaction, and delivering excellence in every project.',
    ar: 'نحن ملتزمون بالشفافية ورضا العملاء وتقديم التميز في كل مشروع.'
  },
  'get_in_touch': {
    en: 'Get in Touch',
    ar: 'تواصل معنا'
  },
  'name': {
    en: 'Name',
    ar: 'الاسم'
  },
  'subject': {
    en: 'Subject',
    ar: 'الموضوع'
  },
  'message': {
    en: 'Message',
    ar: 'الرسالة'
  },
  'send_message': {
    en: 'Send Message',
    ar: 'إرسال الرسالة'
  },
  'back_to_top': {
    en: 'Back to Top',
    ar: 'العودة للأعلى'
  },
  'all_rights_reserved': {
    en: 'All Rights Reserved',
    ar: 'جميع الحقوق محفوظة'
  },
  'copyright': {
    en: '© 2023 El Nada Group For General Contracting. All Rights Reserved.',
    ar: '© 2023 مجموعة الندى للمقاولات العامة. جميع الحقوق محفوظة.'
  },
  'chairman': {
    en: 'Chairman',
    ar: 'رئيس مجلس الإدارة'
  },
  'general_manager': {
    en: 'General Manager',
    ar: 'المدير العام'
  },
  'projects_manager': {
    en: 'Projects Manager',
    ar: 'مدير المشاريع'
  },
  'head_construction': {
    en: 'Head of Construction',
    ar: 'رئيس البناء'
  },
  'head_contracts': {
    en: 'Head of Contracts',
    ar: 'رئيس العقود'
  },
  'head_technical': {
    en: 'Head of Technical Office',
    ar: 'رئيس المكتب الفني'
  },
  'head_mechanical': {
    en: 'Head of Mechanical Dept.',
    ar: 'رئيس قسم الميكانيكا'
  },
  'head_electrical': {
    en: 'Head of Electrical Dept.',
    ar: 'رئيس قسم الكهرباء'
  },
  'head_quality': {
    en: 'Head of Quality',
    ar: 'رئيس الجودة'
  },
  'tagline': {
    en: 'Building Excellence Since 2014',
    ar: 'بناء التميز منذ عام 2014'
  },
  'submit': {
    en: 'Submit',
    ar: 'إرسال'
  },
  'name_placeholder': {
    en: 'Enter your name',
    ar: 'أدخل اسمك'
  },
  'email_placeholder': {
    en: 'Enter your email',
    ar: 'أدخل بريدك الإلكتروني'
  },
  'subject_placeholder': {
    en: 'Enter subject',
    ar: 'أدخل الموضوع'
  },
  'message_placeholder': {
    en: 'Enter your message',
    ar: 'أدخل رسالتك'
  },
  'owned': {
    en: 'Owned',
    ar: 'مملوك'
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  isRTL: false,
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    document.documentElement.classList.toggle('rtl', language === 'en');
    document.documentElement.classList.toggle('ltr', language === 'ar');
  };

  const isRTL = language === 'ar';

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isRTL, t }}>
      <div className={language === 'ar' ? 'rtl font-arabic' : 'ltr font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
