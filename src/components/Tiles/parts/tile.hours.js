import React from 'react'
import { TileHours as StyledTileHours } from './styles'
import config from '../../../config'

import { useTranslation } from 'react-i18next'

import LineTiny from '../../line.short'
import TileHoursJSON from './tile.hours.JSON'

import { ButtonController } from '../../Button/Button.controller'


const TileHours = () => {
    const [t] = useTranslation(["times", "sections", "common"])
    const URL_01 = config.external_url.URL_01
    const header = "textcontent--tabledata--header"
    const paragraph = "textcontent--tabledata--item"
    const tableParagraph = "textcontent--tabledata--item--small"

    return (
        <StyledTileHours>
            <div className={"innerTile"}>
                <p className={ header }>{ t("times:times03") }</p>

                <LineTiny color={"colorFirst"}/>

                <div className={"timetable"}>
                    <div className={"timetableSquareFirstColumn"}>
                        <div className={"cell"}><p className={ tableParagraph }>{ t("times:times04") }</p></div>
                        <div className={"cell"}><p className={ tableParagraph }>{ t("times:times05") }</p></div>
                        <div className={"cell"}><p className={ tableParagraph }>{ t("times:times06") }</p></div>
                        <div className={"cell"}><p className={ tableParagraph }>{ t("times:times07") }</p></div>
                        <div className={"cell"}><p className={ tableParagraph }>{ t("times:times08") }</p></div>
                    </div>

                    <div className={"timetableSquareSecondColumn"}>
                        <TileHoursJSON />
                    </div>
                </div>

                <p className={ paragraph } style={{ paddingTop: '44px', paddingBottom: '22px'}}>{ t("sections:section_contacts_part02") }</p>

                <a  style={{ paddingBottom: '22px' }} href={ `${URL_01}` } target="_blank" rel="noopener noreferrer">
                    <ButtonController variant={"appointment"} />
                </a>

            </div>
        </StyledTileHours>
    )
}

export default TileHours