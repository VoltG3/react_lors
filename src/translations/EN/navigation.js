import { CHAPTERS_EN } from './chapters'

function createNavigation() {
    const buttons = {
        btn__01 : "E - appointment",
        btn__02 : "see here",
        btn__03 : "(see section Contacts)",
        btn__04 : "Contacts and working hours",
    }

    return {
        navigation_primary: {
            home : CHAPTERS_EN.home,
            about : CHAPTERS_EN.about,
            services : CHAPTERS_EN.services,
            prices : CHAPTERS_EN.prices,
            info : CHAPTERS_EN.info,
            contacts : CHAPTERS_EN.contacts,
            e_appointment : buttons.btn__01,
        },
        navigation_secondary: {
            covid : "Covid safety",
            telephone : "Telephone: at the reception: +371 67186950, in practice: +371 67223546",
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

const NAVIGATION_EN = createNavigation()
export { NAVIGATION_EN }