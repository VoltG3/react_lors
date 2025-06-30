import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { MODULES_LV } from './LV/modules'
import { MODULES_EN } from './EN/modules'
import { MODULES_RU } from './RU/modules'
import { NAVIGATION_LV } from './LV/navigation'
import { NAVIGATION_EN } from './EN/navigation'
import { NAVIGATION_RU } from './RU/navigation'
import { CHAPTER_HEADER_LV } from './LV/chapter_header'
import { CHAPTER_HEADER_EN } from './EN/chapter_header'
import { CHAPTER_HEADER_RU } from './RU/chapter_header'
import { CHAPTER_PAGES_LV } from './LV/chapter_pages'
import { CHAPTER_PAGES_EN } from './EN/chapter_pages'
import { CHAPTER_PAGES_RU } from './RU/chapter_pages'
import { CHAPTER_FOOTER_LV } from './LV/chapter_footer'
import { CHAPTER_FOOTER_EN } from './EN/chapter_footer'
import { CHAPTER_FOOTER_RU } from './RU/chapter_footer'
import { CHAPTERS_LV } from './LV/chapters'
import { CHAPTERS_EN } from './EN/chapters'
import { CHAPTERS_RU } from './RU/chapters'
import { DAYS_LV } from './LV/days'
import { DAYS_EN } from './EN/days'
import { DAYS_RU } from './RU/days'
import { TILES_LV } from './LV/tiles'
import { TILES_EN } from './EN/tiles'
import { TILES_RU } from './RU/tiles'
import { LIST_SERVICES_LV } from './LV/list_services'
import { LIST_SERVICES_EN } from './EN/list_services'
import { LIST_SERVICES_RU } from './RU/list_services'
import { LIST_INFORMATION_LV } from './LV/list_information'
import { LIST_INFORMATION_EN } from './EN/list_information'
import { LIST_INFORMATION_RU } from './RU/list_information'
import { LIST_PRICES_LV } from './LV/list_prices'
import { LIST_PRICES_EN } from './EN/list_prices'
import { LIST_PRICES_RU } from './RU/list_prices'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            lv: {
                modules: MODULES_LV,
                navigation: NAVIGATION_LV,
                chapter_header: CHAPTER_HEADER_LV,
                chapter_pages: CHAPTER_PAGES_LV,
                chapter_footer: CHAPTER_FOOTER_LV,
                chapters : CHAPTERS_LV,
                days: DAYS_LV,
                tiles: TILES_LV,
                list_services: LIST_SERVICES_LV,
                list_information: LIST_INFORMATION_LV,
                list_prices: LIST_PRICES_LV,
            },
            en: {
                modules: MODULES_EN,
                navigation: NAVIGATION_EN,
                chapter_header: CHAPTER_HEADER_EN,
                chapter_pages : CHAPTER_PAGES_EN,
                chapter_footer: CHAPTER_FOOTER_EN,
                chapters : CHAPTERS_EN,
                days: DAYS_EN,
                tiles: TILES_EN,
                list_services: LIST_SERVICES_EN,
                list_information: LIST_INFORMATION_EN,
                list_prices: LIST_PRICES_EN,
            },
            ru: {
                modules: MODULES_RU,
                navigation: NAVIGATION_RU,
                chapter_header: CHAPTER_HEADER_RU,
                chapter_pages : CHAPTER_PAGES_RU,
                chapter_footer: CHAPTER_FOOTER_RU,
                chapters : CHAPTERS_RU,
                days: DAYS_RU,
                tiles : TILES_RU,
                list_services: LIST_SERVICES_RU,
                list_information: LIST_INFORMATION_RU,
                list_prices: LIST_PRICES_RU,
            }
        }
    });

    i18n.changeLanguage('lv')