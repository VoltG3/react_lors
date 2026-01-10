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
                    <ResponsiveLogo src={logoColoredBalta} alt="Balta" maxHeight="35px" mobileMaxHeight="25px" />
                    <ResponsiveLogo src={logoColoredBTA} alt="BTA" maxHeight="35px" mobileMaxHeight="25px" />
                    <ResponsiveLogo src={logoColoredErgo} alt="ERGO" maxHeight="35px" mobileMaxHeight="25px" />
                    <ResponsiveLogo src={logoColoredGjensidige} alt="Gjensidige" maxHeight="35px" mobileMaxHeight="25px" />
                    <ResponsiveLogo src={logoColoredSeesam} alt="Seesam" maxHeight="35px" mobileMaxHeight="25px" />
                </div>

            </div>
        </StyledTileContracts>
    )
}

export default TileContracts