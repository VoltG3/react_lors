import { TileContracts as StyledTileContracts } from './styles'

import Logo01 from '../../../assets/logo_colored/BALTA_colored.png'
import Logo02 from '../../../assets/logo_colored/BTA_colored.png'
import Logo03 from '../../../assets/logo_colored/ERGO_colored.jpg'
import Logo04 from '../../../assets/logo_colored/Gjensidige_colored.png'
import Logo05 from '../../../assets/logo_colored/Seesam_colored.png'

import { useTranslation } from 'react-i18next'

import LineTiny from '../../line.short'

function TileContracts() {
    const [t] = useTranslation(["common"])
    const header = "textcontent--tabledata--header"
    const paragraph = "textcontent--tabledata--item"

    return (
        <StyledTileContracts>
            <div className={"innerTile"}>
                <p className={ header }>{ t("common:contracts01") }</p>

                <LineTiny color={"colorSecond"}/>

                <p className={ paragraph }>{ t("common:contracts02")}</p>

                <div className={"logoSquare"}>
                    <div className={"logoSquareRow"}>
                        <div className={"logoSquareCell r1c1"}><img src={ Logo01 } alt={"logo"} style={{ width: '100%', height: 'auto' }} /></div>
                        <div className={"logoSquareCell r1c2"}><img src={ Logo02 } alt={"logo"} style={{ width: '100%', height: 'auto' }} /></div>
                        <div className={"logoSquareCell r1c3"}><img src={ Logo03 } alt={"logo"} style={{ width: '100%', height: 'auto' }} /></div>
                    </div>

                    <div className={"logoSquareRow"}>
                        <div className={"logoSquareCell r2c1"}><img src={ Logo04 } alt={"logo"} style={{ width: '100%', height: 'auto' }} /></div>
                        <div className={"logoSquareCell r2c2"}><img src={ Logo05 } alt={"logo"} style={{ width: '100%', height: 'auto' }} /></div>
                    </div>
                </div>

            </div>
        </StyledTileContracts>
    )
}

export default TileContracts