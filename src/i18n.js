import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from './locales/en/en.json';
import translationDE from './locales/de/de.json';

const resources = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
};

i18n
  .use(reactI18nextModule)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

const t = i18n.t.bind(i18n);
export { t };

