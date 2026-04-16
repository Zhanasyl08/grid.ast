import { createI18n } from "vue-i18n";

const messages = {
  ru: {
    hello: "Привет",
    login: "Войти",
  },
  en: {
    hello: "Hello",
    login: "Login",
  },
};

export const i18n = createI18n({
  legacy: false, // важно для Vue 3
  locale: "ru", // язык по умолчанию
  fallbackLocale: "en",
  messages,
});
