import i18n from 'i18next';

const url = new URL(window.location.href);
const language = url.searchParams.get('vk_language') || 'ru';

i18n.init({
  lng: language,
  resources: require(`./locales/${language}.json`),
});

export default i18n;
