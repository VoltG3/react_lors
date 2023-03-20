import { DAYS_RU } from './days'

const TILES_RU = {
    openingHours : {
        head : "Рабочее время",
        text : "Посещение очных или дистанционных консультаций только по предварительной записи, записаться по телефону +371 67186950 или",
        item : {
            day_01 : DAYS_RU.list_days[0].item,
            day_02 : DAYS_RU.list_days[1].item,
            day_03 : DAYS_RU.list_days[2].item,
            day_04 : DAYS_RU.list_days[3].item,
            day_05 : DAYS_RU.list_days[4].item,
        },
    },
    contracts : {
        head : "Договорные обязательства",
        text : "Мы принимаем полисы медицинского страхования Balta, BTA, Ergo, Gjensidige, Seesam, включая договорные обязательства перед государством.",
    },
    availability : {
        head : "Доступностьy",
        item : {
            part_01 : "Есть доступ для людей с особыми потребностями",
            part_02 : "Есть доступ к туалету для людей с особыми потребностями",
            part_03 : "Доступ для людей с колясками, а также возможность оставить коляски в безопасном месте",
            part_04 : "Есть пеленальная поверхность",
            part_05 : "Есть зал ожидания и места для сидения",
            part_06 : "есть лифт",
            part_07 : "Вы можете припарковать свой автомобиль на улице Бриви Бас.",
            part_08 : "Мы принимаем платежные карты",
        }
    },
    admissionTimes : "Время приема",
    payingTimes : "Время платных консультаций",
}

export { TILES_RU }