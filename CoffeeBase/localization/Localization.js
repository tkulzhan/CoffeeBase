import i18n from "i18n-js";
import * as Localization from "expo-localization";

export function changeLanguage(lang) {
  i18n.locale = lang;
}

i18n.locale = Localization.locale;
i18n.fallbacks = true;
i18n.translations = {
  en: {
    greeting: "Hello",
  },
  ru: {
    greeting: "Привет",
  },
  kz: {
    greeting: "Сәлем",
  },
};

export default i18n;
