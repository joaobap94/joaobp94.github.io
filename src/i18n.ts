import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Access Vite's base URL environment variable
const base = import.meta.env.BASE_URL;

i18n
  // Load translations using http backend (from /public/locales)
  .use(HttpBackend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    supportedLngs: ['pt', 'en'],
    fallbackLng: 'pt',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${base}/locales/{{lng}}/translation.json`,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n; 