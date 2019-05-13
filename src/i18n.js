import i18n from "i18next";

var url = new URL(window.location.href);
var language = url.searchParams.get("vk_language") || 'ru';

i18n.init({
    lng: language,
    resources: require(`./locales/${language}.json`)
});

export default i18n;