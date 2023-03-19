import { CHAPTERS_EN } from './chapters'

function createNavigation() {
    const buttons = {
        btn_variant01 : "E - appointment",
        btn_variant02 : "see here",
        btn_variant03 : "(see section Contacts)",
        btn_variant04 : "Contacts and working hours",
    }

    return {
        navigation_primary: {
            home : CHAPTERS_EN.home,
            about : CHAPTERS_EN.about,
            services : CHAPTERS_EN.services,
            prices : CHAPTERS_EN.prices,
            info : CHAPTERS_EN.info,
            contacts : CHAPTERS_EN.contacts,
        },
        navigation_secondary: {
            covid : "Covid safety",
            telephone : "Telephone: at the reception: +371 67186950, in practice: +371 67223546",
            email : "E - pasts: info@lors.lv",
            e_appointment : buttons.btn_variant_01,
        },
        buttons,
    }
}

const NAVIGATION_EN = createNavigation()
export { NAVIGATION_EN }