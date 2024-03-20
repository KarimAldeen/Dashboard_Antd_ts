import { useCallback, useEffect, useState } from "react";
import translationEN from '../translate/en.json';
import translationAR from '../translate/ar.json';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next'; // Make sure this import is correct
// ... (your imports)

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN
    },
    ar: {
      translation: translationAR
    }
  },
  lng: localStorage.getItem('language') || 'en',  // Use stored language or default to English
  interpolation: {
    escapeValue: false
  }
});

export const useChangeLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    if (currentLanguage === 'ar') {
      i18n.changeLanguage('ar');
      document.body.setAttribute('dir', 'rtl');
      document.body.classList.add('ar');
    } else {
      i18n.changeLanguage('en');
      document.body.setAttribute('dir', 'ltr');
      document.body.classList.add('en');
    }

    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = useCallback((newLanguage:any) => {
    setCurrentLanguage(newLanguage);
  }, []);

  return { currentLanguage, changeLanguage };
};

  