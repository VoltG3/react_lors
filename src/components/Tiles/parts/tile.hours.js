import { TileHours as StyledTileHours } from './styles'
import { Link01 } from '../../../env'

import { useTranslation } from 'react-i18next'

import LineTiny from '../../line.short'
import BTNPrimary from '../../Button/BTN.primary'
import TileHoursJSON from './tile.hours.JSON'

const TileHours = () => {
    const [t] = useTranslation(["times", "sections", "common"])
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

                <a  style={{ paddingBottom: '22px' }} href={ Link01 } target="_blank" rel="noopener noreferrer">
                    <BTNPrimary
                        label={"btn_appointment"}
                        minWidth={"190px"}
                        paragraphMarginLeft={"-25%"}
                        paddingVertical={"5px"}
                        justifyContent={"flex-end"}
                    />
                </a>

            </div>
        </StyledTileHours>
    )
}

export default TileHours