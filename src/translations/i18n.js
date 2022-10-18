import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { TRANSLATIONS_LV } from './LV/translations'
import { TRANSLATIONS_EN } from './EN/translations'
import { TRANSLATIONS_RU } from './RU/translations'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            lv: {
                translation: TRANSLATIONS_LV
            },
            en: {
                translation: TRANSLATIONS_EN
            },
            ru: {
                translation: TRANSLATIONS_RU
            }
        }
    });

i18n.changeLanguage("en");
