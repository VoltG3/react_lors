import React from 'react'
import { TileAvailability as StyledTileAvailability } from './styles'
import config from '../../../config'

import { useTranslation } from 'react-i18next'
import LineTiny from '../../line.short'

function TileAvailability() {
    const [t] = useTranslation(["accessible"])
    const header = "textcontent--tabledata--header"
    const paragraph = "textcontent--tabledata--item--small"

    const { icons_availability } = config

    return (
        <StyledTileAvailability>
            <div className={"innerTile"}>
                <p className={ header }>{ t("accessible:accessible01") }</p>

                <LineTiny color={"colorThird"}/>

                <div className={"availabilitySquare"}>
                    <div>
                        <img src={ icons_availability.icon01 } alt={"icon"} />
                        <p className={ paragraph }>{ t("accessible:accessible02") }</p>
                    </div>

                    <div>
                        <img src={ icons_availability.icon02 } alt={"icon"} />
                        <p className={ paragraph }>{ t("accessible:accessible03") }</p>
                    </div>

                    <div>
                        <img src={ icons_availability.icon03 } alt={"icon"} />
                        <p className={ paragraph }>{ t("accessible:accessible04") }</p>
                    </div>

                    <div>
                        <img src={ icons_availability.icon04 } alt={"icon"} />
                        <p className={ paragraph }>{ t("accessible:accessible05") }</p>
                    </div>

                    <div>
                        <img src={ icons_availability.icon05 } alt={"icon"} />
                        <p className={ paragraph }>{ t("accessible:accessible06") }</p>
                    </div>

                    <div>
                        <img src={ icons_availability.icon06 } alt={"icon"} />
                        <p className={ paragraph }>{ t("accessible:accessible07") }</p>
                    </div>

                    <div>
                        <img src={ icons_availability.icon07 } alt={"icon"} />
                        <p className={ paragraph }>{ t("accessible:accessible08") }</p>
                    </div>

                    <div>
                        <img style={{ width: '28px', height: '25px'}} src={ icons_availability.icon08 } alt={"icon"} />
                        <p className={ paragraph }>{ t("accessible:accessible09") }</p>
                    </div>
                </div>
            </div>
        </StyledTileAvailability>
    )
}

export default TileAvailability