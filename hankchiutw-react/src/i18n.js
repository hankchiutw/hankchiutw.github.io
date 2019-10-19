import i18next from "i18next";
import XHR from "i18next-xhr-backend";

export const _ = i18next.t.bind(i18next);

export const i18nReady = i18next.use(XHR).init({
  debug: false,
  lng: "en",
  fallbackLng: "en",
  ns: ["translation", "resume"],
  defaultNS: "translation"
});
