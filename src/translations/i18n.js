import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { LV } from './LV/lv'
import { EN } from './EN/en'
import { RU } from './RU/ru'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            lv: LV,
            en: EN,
            ru: RU
        }
    });

i18n.changeLanguage('lv')