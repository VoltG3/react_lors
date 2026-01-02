import { CHAPTERS_RU } from './chapters'

function createNavigation() {
    const buttons = {
        btn__01 : "Е - запись",
        btn__02 : "глянь сюда",
        btn__03 : "(см. раздел Контакты)",
        btn__04 : "Контакты и время работ",
        btn__05 : "Я понимаю",
    }

    return {
        navigation_primary: {
            home : CHAPTERS_RU.home,
            about : CHAPTERS_RU.about,
            services : CHAPTERS_RU.services,
            prices : CHAPTERS_RU.prices,
            info : CHAPTERS_RU.info,
            contacts : CHAPTERS_RU.contacts,
            e_appointment : buttons.btn__01,
        },
        navigation_secondary: {
            telephone : "Телефон: на рецепции: +371 67186950, на практике: +371 67223546",
            email : "Электронная почта: info@lors.lv",
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

const NAVIGATION_RU = createNavigation()
export { NAVIGATION_RU }