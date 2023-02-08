import { TileAvailability as StyledTileAvailability } from './styles'

import Icon01 from '../../../assets/icons/icon_accessible_01.svg'
import Icon02 from '../../../assets/icons/icon_accessible_02.svg'
import Icon03 from '../../../assets/icons/icon_accessible_03.svg'
import Icon04 from '../../../assets/icons/icon_accessible_04.svg'
import Icon05 from '../../../assets/icons/icon_accessible_05.svg'
import Icon06 from '../../../assets/icons/icon_accessible_06.svg'
import Icon07 from '../../../assets/icons/icon_accessible_07.svg'
import Icon08 from '../../../assets/icons/icon_accessible_08.svg'

import { useTranslation } from 'react-i18next'

import LineTiny from '../../line.short'

function TileAvailability() {
    const [t] = useTranslation(["accessible"])
    const header = "textcontent--tabledata--header"
    const paragraph = "textcontent--tabledata--item--small"

    return (
        <StyledTileAvailability>
            <div className={"innerTile"}>
                <p className={ header }>{ t("accessible:accessible01") }</p>

                <LineTiny color={"colorThird"}/>

                <div className={"availabilitySquare"}>
                    <div>
                        <img src={ Icon01 } alt={"icon"} />
                        <p className={ paragraph }>{ t("accessible:accessible02") }</p>
                    </div>

                    <div>
                        <img src={ Icon02 } alt={"icon"} />
                        <p className={ paragraph }>{ t("accessible:accessible03") }</p>
                    </div>

                    <div>
                        <img src={ Icon03 } alt={"icon"} />
                        <p className={ paragraph }>{ t("accessible:accessible04") }</p>
                    </div>

                    <div>
                        <img src={ Icon04 } alt={"icon"} />
                        <p className={ paragraph }>{ t("accessible:accessible05") }</p>
                    </div>

                    <div>
                        <img src={ Icon05 } alt={"icon"} />
                        <p className={ paragraph }>{ t("accessible:accessible06") }</p>
                    </div>

                    <div>
                        <img src={ Icon06 } alt={"icon"} />
                        <p className={ paragraph }>{ t("accessible:accessible07") }</p>
                    </div>

                    <div>
                        <img src={ Icon07 } alt={"icon"} />
                        <p className={ paragraph }>{ t("accessible:accessible08") }</p>
                    </div>

                    <div>
                        <img style={{ width: '28px', height: '25px'}} src={ Icon08 } alt={"icon"} />
                        <p className={ paragraph }>{ t("accessible:accessible09") }</p>
                    </div>
                </div>
            </div>
        </StyledTileAvailability>
    )
}

export default TileAvailability