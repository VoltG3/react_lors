import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { COMMON_LV } from './LV/common'
import { COMMON_EN } from './EN/common'
import { COMMON_RU } from './RU/common'
import { SECTIONS_LV } from './LV/sections'
import { SECTIONS_EN } from './EN/sections'
import { SECTIONS_RU } from './RU/sections'
import { ACCESSIBLE_LV } from './LV/accessible'
import { ACCESSIBLE_EN } from './EN/accessible'
import { ACCESSIBLE_RU } from './RU/accessible'

import { NAVIGATION_LV } from './LV/navigation'
import { NAVIGATION_EN } from './EN/navigation'
import { NAVIGATION_RU } from './RU/navigation'
import { CHAPTER_HEADER_LV } from './LV/chapter_header'
import { CHAPTER_HEADER_EN } from './EN/chapter_header'
import { CHAPTER_HEADER_RU } from './RU/chapter_header'
import { CHAPTER_PAGES_LV } from './LV/chapter_pages'
import { CHAPTER_PAGES_EN } from './EN/chapter_pages'
import { CHAPTER_PAGES_RU } from './RU/chapter_pages'
import { CHAPTERS_LV } from './LV/chapters'
import { CHAPTERS_EN } from './EN/chapters'
import { CHAPTERS_RU } from './RU/chapters'
import { LIST_SERVICES_LV } from './LV/list_services'
import { LIST_SERVICES_EN } from './EN/list_services'
import { LIST_SERVICES_RU } from './RU/list_services'
import { LIST_INFORMATION_LV } from './LV/list_information'
import { LIST_INFORMATION_EN } from './EN/list_information'
import { LIST_INFORMATION_RU } from './RU/list_information'
import { LIST_PRICES_LV } from './LV/list_prices'
import { LIST_PRICES_EN } from './EN/list_prices'
import { LIST_PRICES_RU } from './RU/list_prices'

import { TIMES_LV} from './LV/week'
import { TIMES_EN} from './EN/week'
import { TIMES_RU} from './RU/week'
import { COOKIE_LV } from './LV/cookie'
import { COOKIE_EN } from './EN/cookie'
import { COOKIE_RU } from './RU/cookie'
import { COVID_LV } from './LV/covid'
import { COVID_EN } from './EN/covid'
import { COVID_RU } from './RU/covid'

import { DAYS_LV } from "./LV/days";
import {DAYS_EN} from "./EN/days";
import {DAYS_RU} from "./RU/days";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            lv: {
                common: COMMON_LV,
                sections: SECTIONS_LV,
                accessible: ACCESSIBLE_LV,

                navigation: NAVIGATION_LV,
                chapter_header: CHAPTER_HEADER_LV,
                chapter_pages: CHAPTER_PAGES_LV,
                chapters : CHAPTERS_LV,
                list_services: LIST_SERVICES_LV,
                list_information: LIST_INFORMATION_LV,
                list_prices: LIST_PRICES_LV,

                times: TIMES_LV,
                cookies: COOKIE_LV,
                covid: COVID_LV,
                DAYS: DAYS_LV
            },
            en: {
                common: COMMON_EN,
                sections: SECTIONS_EN,
                accessible: ACCESSIBLE_EN,

                navigation: NAVIGATION_EN,
                chapter_header: CHAPTER_HEADER_EN,
                chapter_pages : CHAPTER_PAGES_EN,
                chapters : CHAPTERS_EN,
                list_services: LIST_SERVICES_EN,
                list_information: LIST_INFORMATION_EN,
                list_prices: LIST_PRICES_EN,

                times: TIMES_EN,
                cookies: COOKIE_EN,
                covid: COVID_EN,
                DAYS: DAYS_EN
            },
            ru: {
                common: COMMON_RU,
                sections: SECTIONS_RU,
                accessible: ACCESSIBLE_RU,

                navigation: NAVIGATION_RU,
                chapter_header: CHAPTER_HEADER_RU,
                chapter_pages : CHAPTER_PAGES_RU,
                chapters : CHAPTERS_RU,
                list_services: LIST_SERVICES_RU,
                list_information: LIST_INFORMATION_RU,
                list_prices: LIST_PRICES_RU,

                times: TIMES_RU,
                cookies: COOKIE_RU,
                covid: COVID_RU,
                DAYS: DAYS_RU
            }
        }
    });

    i18n.changeLanguage('lv')

     /*   export default i18n;

                    initReactI18next.init(i18n);


async function initI18n() {
    await i18n.init({
        lng: 'en',
    })

    await i18n.use(LanguageDetector).init({
        fallbackLng: 'en',

    })

    const detectedLanguage = i18n.language;
    const language = detectedLanguage === 'lv' ? 'lv' : detectedLanguage === 'ru' ? 'ru' : 'en'
    try {
        await i18n.changeLanguage(language)
        console.log(`Language set to ${language}`)
    } catch (error) {
        console.error(error)
    }
}

function handleInit() {
    initI18n()
        .then(() => {
            console.log('i18n initialized successfully')
        })
        .catch(error => {
            console.error(error)
        })
}

handleInit()
*/