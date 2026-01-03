import { TileContracts as StyledTileContracts } from './styles'

import { useTranslation } from 'react-i18next'

import LineTiny from '../../line.short'

import {
    LogoColoredBalta,
    LogoColoredBTA,
    LogoColoredErgo,
    LogoColoredGjensidige,
    LogoColoredSeesam
} from "../../../assets/logo/index"

function TileContracts() {
    const [t] = useTranslation(["tiles"])
    const header = "textContent--tabledata--header"
    const paragraph = "textContent--tabledata--item"

    return (
        <StyledTileContracts>
            <div className={"innerTile"}>
                <p className={ header }>{ t("contracts.head") }</p>

                <LineTiny color={"colorSecond"}/>

                <p className={ paragraph }>{ t("contracts.text") }</p>

                <div className={"logoSquare"}>
                    <div className={"logoSquareRow"}>
                        <div className={"logoSquareCell r1c1"}><LogoColoredBalta size={200} /></div>
                        <div className={"logoSquareCell r1c2"}><LogoColoredBTA size={200} /></div>
                        <div className={"logoSquareCell r1c3"}><LogoColoredErgo size={200} /></div>
                    </div>

                    <div className={"logoSquareRow"}>
                        <div className={"logoSquareCell r2c1"}><LogoColoredGjensidige size={200} /></div>
                        <div className={"logoSquareCell r2c2"}><LogoColoredSeesam size={200} /></div>
                    </div>
                </div>

            </div>
        </StyledTileContracts>
    )
}

export default TileContracts