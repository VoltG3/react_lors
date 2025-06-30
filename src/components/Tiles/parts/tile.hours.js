import React from 'react'
import { TileHours as StyledTileHours } from './styles'
import config from '../../../config'
import { useTranslation } from 'react-i18next'
import LineTiny from '../../line.short'
import TileHoursJSON from './tile.hours.JSON'
import { ButtonController } from '../../Button/Button.controller'

const TileHours = () => {
    const [t] = useTranslation(["tiles"])
    const URL_01 = config.external_url.URL_01
    const header = "textContent--tabledata--header"
    const paragraph = "textContent--tabledata--item"
    const tableParagraph = "textContent--tabledata--item--small"

    return (
        <StyledTileHours>
            <div className={"innerTile"}>
                <p className={ header }>{ t("openingHours.head") }</p>

                <LineTiny color={"colorFirst"}/>

                <div className={"timetable"}>
                    <div className={"timetableSquareFirstColumn"}>
                        <div className={"cell"}><p className={ tableParagraph }>{ t("openingHours.item.day_01") }</p></div>
                        <div className={"cell"}><p className={ tableParagraph }>{ t("openingHours.item.day_02") }</p></div>
                        <div className={"cell"}><p className={ tableParagraph }>{ t("openingHours.item.day_03") }</p></div>
                        <div className={"cell"}><p className={ tableParagraph }>{ t("openingHours.item.day_04") }</p></div>
                        <div className={"cell"}><p className={ tableParagraph }>{ t("openingHours.item.day_05") }</p></div>
                    </div>

                    <div className={"timetableSquareSecondColumn"}>
                        <TileHoursJSON />
                    </div>
                </div>

                <p className={ paragraph } style={{ paddingTop: '44px', paddingBottom: '22px'}}>{ t("openingHours.text") }</p>

                <a  style={{ paddingBottom: '22px' }} href={ `${URL_01}` } target="_blank" rel="noopener noreferrer">
                    <ButtonController variant={"appointment"} />
                </a>

            </div>
        </StyledTileHours>
    )
}

export default TileHours