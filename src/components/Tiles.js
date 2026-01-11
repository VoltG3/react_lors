import React from 'react'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import config from '../config'
import * as S from '../styles/styles.tiles'
import { LineTiny } from './Lines'
import { ButtonController } from './Button/Button.controller'
import ResponsiveLogo from './Logo'
import { useProjectData } from '../DataContext'
import { TransformData, TransformFormat } from '../json/json'

// Import icons
import {
    IconAvailability01,
    IconAvailability02,
    IconAvailability03,
    IconAvailability04,
    IconAvailability05,
    IconAvailability06,
    IconAvailability07,
    IconAvailability08
} from '../assets/icons'

// Import colored logos
import logoColoredBalta from '../assets/logo/colored_logo_01.png'
import logoColoredBTA from '../assets/logo/colored_logo_02.png'
import logoColoredErgo from '../assets/logo/colored_logo_03.png'
import logoColoredGjensidige from '../assets/logo/colored_logo_04.png'
import logoColoredSeesam from '../assets/logo/colored_logo_05.png'

const TileHoursJSON = () => {
    const { data: jsonData, loading, error } = useProjectData()
    const [t] = useTranslation(["tiles"])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error loading data</div>

    const arrayOpeningHoursEU = jsonData.map(obj => TransformData(obj.open))
    const arrayOpeningHoursUS = TransformFormat(jsonData.map(obj => TransformData(obj.open)))
    const arrayOpeningHours = i18n.language === 'en' ? arrayOpeningHoursUS : arrayOpeningHoursEU

    const tableParagraph = "textContent--tabledata--item--small"
    const days = [
        t("openingHours.item.day_01"),
        t("openingHours.item.day_02"),
        t("openingHours.item.day_03"),
        t("openingHours.item.day_04"),
        t("openingHours.item.day_05")
    ]

    return (
        <S.StyledHoursList>
            {arrayOpeningHours.map((array, index) => (
                <div key={index} className={"row line"}>
                    <div className={"dayCell"}>
                        <p className={tableParagraph}>{days[index]}</p>
                    </div>
                    <div className={"hoursCell"}>
                        <div className={"hoursWrapper"}>
                            <div><p className={tableParagraph}>{array[0]}</p></div>
                            <div><p className={tableParagraph}>-</p></div>
                            <div><p className={tableParagraph}>{array[1]}</p></div>
                        </div>
                    </div>
                </div>
            ))}
        </S.StyledHoursList>
    )
}

const TileHours = () => {
    const [t] = useTranslation(["tiles"])
    const URL_01 = config.external_url.URL_01
    const header = "textContent--tabledata--header"
    const paragraph = "textContent--tabledata--item"

    return (
        <S.TileHours>
            <div className={"innerTile"}>
                <p className={header}>{t("openingHours.head")}</p>
                <LineTiny color={"colorFirst"} />
                <div className={"timetable"}>
                    <TileHoursJSON />
                </div>
                <p className={paragraph} style={{ paddingTop: '44px', paddingBottom: '22px' }}>{t("openingHours.text")}</p>
                <a style={{ paddingBottom: '22px' }} href={`${URL_01}`} target="_blank" rel="noopener noreferrer">
                    <ButtonController variant={"appointment"} />
                </a>
            </div>
        </S.TileHours>
    )
}

const TileContracts = () => {
    const [t] = useTranslation(["tiles"])
    const header = "textContent--tabledata--header"
    const paragraph = "textContent--tabledata--item"

    const insuranceLogos = [
        { src: logoColoredBalta, alt: "Balta" },
        { src: logoColoredBTA, alt: "BTA" },
        { src: logoColoredErgo, alt: "ERGO" },
        { src: logoColoredGjensidige, alt: "Gjensidige" },
        { src: logoColoredSeesam, alt: "Seesam" }
    ]

    return (
        <S.TileContracts>
            <div className={"innerTile"}>
                <p className={header}>{t("contracts.head")}</p>
                <LineTiny color={"colorSecond"} />
                <p className={paragraph}>{t("contracts.text")}</p>
                <div className={"logoSquare"}>
                    {insuranceLogos.map((logo, index) => (
                        <ResponsiveLogo key={index} src={logo.src} alt={logo.alt} maxHeight="35px" mobileMaxHeight="25px" />
                    ))}
                </div>
            </div>
        </S.TileContracts>
    )
}

const TileAvailability = () => {
    const [t] = useTranslation(["tiles"])
    const header = "textContent--tabledata--header"
    const paragraph = "textContent--tabledata--item--small"
    const object_head = "availability."
    const object_item = "availability.item."

    const availabilityItems = [
        { Icon: IconAvailability01, key: "part_01" },
        { Icon: IconAvailability02, key: "part_02" },
        { Icon: IconAvailability03, key: "part_03" },
        { Icon: IconAvailability04, key: "part_04" },
        { Icon: IconAvailability05, key: "part_05" },
        { Icon: IconAvailability06, key: "part_06" },
        { Icon: IconAvailability07, key: "part_07" },
        { Icon: IconAvailability08, key: "part_08" }
    ]

    return (
        <S.TileAvailability>
            <div className={"innerTile"}>
                <p className={header}>{t(object_head + "head")}</p>
                <LineTiny color={"colorThird"} />
                <div className={"availabilitySquare"}>
                    {availabilityItems.map(({ Icon, key }) => (
                        <div key={key}>
                            <Icon size={32} />
                            <p className={paragraph}>{t(object_item + key)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </S.TileAvailability>
    )
}

const Tiles = () => {
    return (
        <S.StyledTiles>
            <div className={"tableContentContainer"}><TileHours /></div>
            <div className={"tableContentContainer"}><TileContracts /></div>
            <div className={"tableContentContainer"}><TileAvailability /></div>
        </S.StyledTiles>
    )
}

export default Tiles