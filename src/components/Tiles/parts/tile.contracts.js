import { TileContracts as StyledTileContracts } from './styles'
import { useTranslation } from 'react-i18next'
import LineTiny from '../../line.short'
import ResponsiveLogo from '../../ResponsiveLogo/responsiveLogo'

// Import colored logos
import logoColoredBalta from '../../../assets/logo/colored_logo_01.png'
import logoColoredBTA from '../../../assets/logo/colored_logo_02.png'
import logoColoredErgo from '../../../assets/logo/colored_logo_03.png'
import logoColoredGjensidige from '../../../assets/logo/colored_logo_04.png'
import logoColoredSeesam from '../../../assets/logo/colored_logo_05.png'

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
                        <div className={"logoSquareCell r1c1"}>
                            <ResponsiveLogo src={logoColoredBalta} alt="Balta" maxWidth="200px" />
                        </div>
                        <div className={"logoSquareCell r1c2"}>
                            <ResponsiveLogo src={logoColoredBTA} alt="BTA" maxWidth="200px" />
                        </div>
                        <div className={"logoSquareCell r1c3"}>
                            <ResponsiveLogo src={logoColoredErgo} alt="ERGO" maxWidth="200px" />
                        </div>
                    </div>

                    <div className={"logoSquareRow"}>
                        <div className={"logoSquareCell r2c1"}>
                            <ResponsiveLogo src={logoColoredGjensidige} alt="Gjensidige" maxWidth="200px" />
                        </div>
                        <div className={"logoSquareCell r2c2"}>
                            <ResponsiveLogo src={logoColoredSeesam} alt="Seesam" maxWidth="200px" />
                        </div>
                    </div>
                </div>

            </div>
        </StyledTileContracts>
    )
}

export default TileContracts