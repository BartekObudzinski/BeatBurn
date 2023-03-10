import translationEN from '@Locales/en.json';
import translationPL from '@Locales/pl.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pl: { translation: translationPL },
  en: { translation: translationEN },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    compatibilityJSON: 'v3',
    lng: 'pl',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
      skipOnVariables: false,
    },
  });

export default i18n;
