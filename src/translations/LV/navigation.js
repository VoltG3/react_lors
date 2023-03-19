import { CHAPTERS_LV } from './chapters'

/*const { buttons: { btn_variant_05 } } = NAVIGATION_EN*/
function createNavigation() {
    const buttons = {
        btn_variant_01 : "E - pieraksts",
        btn_variant_02 : "skatīt šeit",
        btn_variant_03 : "(sk. sadaļu Kontakti)",
        btn_variant_04 : "Kontakti un darba laiks",
    }

    return {
        navigation_primary: {
            home : CHAPTERS_LV.home,
            about : CHAPTERS_LV.about,
            services : CHAPTERS_LV.services,
            prices : CHAPTERS_LV.prices,
            info : CHAPTERS_LV.info,
            contacts : CHAPTERS_LV.contacts,
        },
        navigation_secondary: {
            covid : "Covid drošība",
            telephone : "Telefons: reģistratūrā: +371 67186950, praksē: +371 67223546",
            email : "E - pasts: info@lors.lv",
            e_appointment : buttons.btn_variant_01,
        },
        buttons,
    }
}

const NAVIGATION_LV = createNavigation()
export { NAVIGATION_LV }
