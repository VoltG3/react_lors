import React from 'react'
import { TileAvailability as StyledTileAvailability } from './styles'

import { useTranslation } from 'react-i18next'
import LineTiny from '../../line.short'

import {
    IconAvailability01,
    IconAvailability02,
    IconAvailability03,
    IconAvailability04,
    IconAvailability05,
    IconAvailability06,
    IconAvailability07,
    IconAvailability08
} from '../../../assets/icons'

function TileAvailability() {
    const [t] = useTranslation(["tiles"])
    const header = "textContent--tabledata--header"
    const paragraph = "textContent--tabledata--item--small"
    const object_head = "availability."
    const object_item = "availability.item."

    return (
        <StyledTileAvailability>
            <div className={"innerTile"}>
                <p className={ header }>{ t(object_head + "head") }</p>

                <LineTiny color={"colorThird"}/>

                <div className={"availabilitySquare"}>
                    <div>
                        <IconAvailability01 size={32} />
                        <p className={ paragraph }>{ t(object_item + "part_01") }</p>
                    </div>

                    <div>
                        <IconAvailability02 size={32} />
                        <p className={ paragraph }>{ t(object_item + "part_02") }</p>
                    </div>

                    <div>
                        <IconAvailability03 size={32} />
                        <p className={ paragraph }>{ t(object_item + "part_03") }</p>
                    </div>

                    <div>
                        <IconAvailability04 size={32} />
                        <p className={ paragraph }>{ t(object_item + "part_04") }</p>
                    </div>

                    <div>
                        <IconAvailability05 size={32} />
                        <p className={ paragraph }>{ t(object_item + "part_05") }</p>
                    </div>

                    <div>
                        <IconAvailability06 size={32} />
                        <p className={ paragraph }>{ t(object_item + "part_06") }</p>
                    </div>

                    <div>
                        <IconAvailability07 size={32} />
                        <p className={ paragraph }>{ t(object_item + "part_07") }</p>
                    </div>

                    <div>
                        <IconAvailability08 size={32} />
                        <p className={ paragraph }>{ t(object_item + "part_08") }</p>
                    </div>
                </div>
            </div>
        </StyledTileAvailability>
    )
}

export default TileAvailability