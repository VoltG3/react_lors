import { CHAPTERS_LV } from './chapters'

function createNavigation() {
    const buttons = {
        btn__01 : "E - pieraksts",
        btn__02 : "skatīt šeit",
        btn__03 : "(sk. sadaļu Kontakti)",
        btn__04 : "Kontakti un darba laiks",
        btn__05 : "Es sapratu"
    }

    return {
        navigation_primary : {
            home : CHAPTERS_LV.home,
            about : CHAPTERS_LV.about,
            services : CHAPTERS_LV.services,
            prices : CHAPTERS_LV.prices,
            info : CHAPTERS_LV.info,
            contacts : CHAPTERS_LV.contacts,
            e_appointment : buttons.btn__01,
        },
        navigation_secondary : {
            telephone : "Telefons: reģistratūrā: +371 67186950, praksē: +371 67223546",
            email : "E - pasts: info@lors.lv",
            e_appointment : buttons.btn__01,
        },
        navigation_buttons : {
            btn_variant_01 : buttons.btn__01,
            btn_variant_02 : buttons.btn__02,
            btn_variant_03 : buttons.btn__03,
            btn_variant_04 : buttons.btn__04,
        },
        buttons,
    }
}

const NAVIGATION_LV = createNavigation()
export { NAVIGATION_LV }