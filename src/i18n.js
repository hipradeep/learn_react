import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/translation.json';
import ja from './locales/ja/translation.json';
import hi from './locales/hi/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ja: { translation: ja },
            hi: { translation: hi },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
            format: (value, format, lng) => {
                if (format === 'number') return new Intl.NumberFormat(lng).format(value);
                if (format === 'date') return new Intl.DateTimeFormat(lng).format(value);
                if (format === 'currency') return new Intl.NumberFormat(lng, { style: 'currency', currency: 'USD' }).format(value); // Default to USD for demo, usually dynamic
                return value;
            }
        },
    });

export default i18n;
