import React from 'react'
import { TileAvailability as StyledTileAvailability } from './styles'
import config from '../../../config'

import { useTranslation } from 'react-i18next'
import LineTiny from '../../line.short'

function TileAvailability() {
    const [t] = useTranslation(["tiles"])
    const header = "textContent--tabledata--header"
    const paragraph = "textContent--tabledata--item--small"
    const object_head = "availability."
    const object_item = "availability.item."

    const { icons_availability } = config

    return (
        <StyledTileAvailability>
            <div className={"innerTile"}>
                <p className={ header }>{ t(object_head + "head") }</p>

                <LineTiny color={"colorThird"}/>

                <div className={"availabilitySquare"}>
                    <div>
                        <img src={ icons_availability.icon01 } alt={"icon"} />
                        <p className={ paragraph }>{ t(object_item + "part_01") }</p>
                    </div>

                    <div>
                        <img src={ icons_availability.icon02 } alt={"icon"} />
                        <p className={ paragraph }>{ t(object_item + "part_02") }</p>
                    </div>

                    <div>
                        <img src={ icons_availability.icon03 } alt={"icon"} />
                        <p className={ paragraph }>{ t(object_item + "part_03") }</p>
                    </div>

                    <div>
                        <img src={ icons_availability.icon04 } alt={"icon"} />
                        <p className={ paragraph }>{ t(object_item + "part_04") }</p>
                    </div>

                    <div>
                        <img src={ icons_availability.icon05 } alt={"icon"} />
                        <p className={ paragraph }>{ t(object_item + "part_05") }</p>
                    </div>

                    <div>
                        <img src={ icons_availability.icon06 } alt={"icon"} />
                        <p className={ paragraph }>{ t(object_item + "part_06") }</p>
                    </div>

                    <div>
                        <img src={ icons_availability.icon07 } alt={"icon"} />
                        <p className={ paragraph }>{ t(object_item + "part_07") }</p>
                    </div>

                    <div>
                        <img style={{ width: '28px', height: '25px'}} src={ icons_availability.icon08 } alt={"icon"} />
                        <p className={ paragraph }>{ t(object_item + "part_08") }</p>
                    </div>
                </div>
            </div>
        </StyledTileAvailability>
    )
}

export default TileAvailability