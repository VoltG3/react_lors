import { DAYS_LV } from './days'

const TILES_LV = {
    openingHours : {
        head : "Darba laiki",
        text : "Apmeklējums klātienes vai attālinātajām konsultācijām tikai pēc iepriekšēja pieraksta pa telefonu +371 67186950 vai +371 67223546",
        item : {
            day_01 : DAYS_LV.list_days[0].item,
            day_02 : DAYS_LV.list_days[1].item,
            day_03 : DAYS_LV.list_days[2].item,
            day_04 : DAYS_LV.list_days[3].item,
            day_05 : DAYS_LV.list_days[4].item,
        },
    },
    contracts : {
        head : "Līgumsaistības",
        text : "Pieņemam Balta, BTA, Ergo, Gjensidige, Seesam veselības apdrošināšanas polises, tajā skaitā līgumsaistības ar valsti.",
    },
    availability : {
        head : "Pieejamība",
        item : {
            part_01 : "Ir piekļuve cilvēkiem ar īpašām vajadzībām",
            part_02 : "Ir piekļuve WC cilvēkiem ar īpašām vajadzībām",
            part_03 : "Ir piekļuve personām ar bērnu ratiņiem, kā arī iespēja bērnu ratiņus atstāt drošā vietā",
            part_04 : "Ir bērnu pārtinamā virsma",
            part_05 : "Ir uzgaidāmā telpa un sēdvietas",
            part_06 : "Ir lifts",
            part_07 : "Auto var parkot Brīvības ielā",
            part_08 : "Pieņemam norēķinu kartes",
        }
    },
    admissionTimes : "Pieņemšanas laiki",
    payingTimes : "Maksas konsultāciju laiki",
}

export { TILES_LV }