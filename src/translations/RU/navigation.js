import { CHAPTERS_RU } from './chapters'

function createNavigation() {
    const buttons = {
        btn_variant01 : "Е - запись",
        btn_variant02 : "глянь сюда",
        btn_variant03 : "(см. раздел Контакты)",
        btn_variant04 : "Контакты и время работ",
    }

    return {
        navigation_primary: {
            home : CHAPTERS_RU.home,
            about : CHAPTERS_RU.about,
            services : CHAPTERS_RU.services,
            prices : CHAPTERS_RU.prices,
            info : CHAPTERS_RU.info,
            contacts : CHAPTERS_RU.contacts,
        },
        navigation_secondary: {
            covid : "Ковидная безопасность",
            telephone : "Телефон: на рецепции: +371 67186950, на практике: +371 67223546",
            email : "Электронная почта: info@lors.lv",
            e_appointment : buttons.btn_variant_01,
        },
        buttons,
    }
}

const NAVIGATION_RU = createNavigation()
export { NAVIGATION_RU }