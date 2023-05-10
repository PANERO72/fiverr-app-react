// Importar las librerías
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Referencias a los archivos de los idiomas con las traducciones
import { languageCAT } from './lang/cat/translate';
import { languageDE } from './lang/de/translate';
import { languageEN } from './lang/en/translate';
import { languageES } from './lang/es/translate';

// Establecer los archivos de traducciones con el idioma
const resources = {
    // ca: { translation: { "welcome": "Benvingut@", "title": "Català"}},
    // de: { translation: { "welcome": "Willkommen", "title": "Germany"}},
    // en: { translation: { "welcome": "Welcome", "title": "English"}},
    // es: { translation: { "welcome": "Bienvenid@", "title": "Español"}}
    cat: { translation: languageCAT },
    de: { translation: languageDE },
    en: { translation: languageEN },
    es: { translation: languageES }
}
// Llamar a los métodos de la librería i18next, para establecer el idioma por defecto y el idioma de respaldo
i18n.use(LanguageDetector).use(initReactI18next).init({
    resources, lgn: 'cat',
    fallbackLng: 'es',
    interpolation: { escapeValue: false }
});
// Establecer el valor del atributo 'lang' de HTML al idioma por defecto o seleccionado por el usuario
document.documentElement.lang = i18n.language;

export default i18n;