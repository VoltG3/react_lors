import { TileContracts as StyledTileContracts } from './styles'

import { useTranslation } from 'react-i18next'

import LineTiny from '../../line.short'
import config from '../../../config'

function TileContracts() {
    const [t] = useTranslation(["tiles"])
    const { logo_colored } = config
    const header = "textcontent--tabledata--header"
    const paragraph = "textcontent--tabledata--item"

    return (
        <StyledTileContracts>
            <div className={"innerTile"}>
                <p className={ header }>{ t("contracts.head") }</p>

                <LineTiny color={"colorSecond"}/>

                <p className={ paragraph }>{ t("contracts.text") }</p>

                <div className={"logoSquare"}>
                    <div className={"logoSquareRow"}>
                        <div className={"logoSquareCell r1c1"}><img src={ logo_colored.logoColored01 } alt={"logo"} style={{ width: '100%', height: 'auto' }} /></div>
                        <div className={"logoSquareCell r1c2"}><img src={ logo_colored.logoColored02 } alt={"logo"} style={{ width: '100%', height: 'auto' }} /></div>
                        <div className={"logoSquareCell r1c3"}><img src={ logo_colored.logoColored03 } alt={"logo"} style={{ width: '100%', height: 'auto' }} /></div>
                    </div>

                    <div className={"logoSquareRow"}>
                        <div className={"logoSquareCell r2c1"}><img src={ logo_colored.logoColored04 } alt={"logo"} style={{ width: '100%', height: 'auto' }} /></div>
                        <div className={"logoSquareCell r2c2"}><img src={ logo_colored.logoColored05 } alt={"logo"} style={{ width: '100%', height: 'auto' }} /></div>
                    </div>
                </div>

            </div>
        </StyledTileContracts>
    )
}

export default TileContracts