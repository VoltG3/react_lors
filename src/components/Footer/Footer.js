import React from "react"
import { useTranslation } from 'react-i18next'
import '../../translations/i18n'
import i18n from 'i18next'
import config from '../../config'

import { StyledFooterContainer as FooterContainer } from './Styles/StyledFooterContainer'
import { StyledFooterCredentials as FooterCredentials } from './Styles/StyledFooterCredentials'
import { StyledFooterLogo as FooterLogo } from './Styles/StyledFooterLogo'
import { StyledFooterDeveloper as FooterDeveloper } from './Styles/StyledFooterDeveloper'
import { StyledFooterButton as FooterButton } from './Styles/StyledFooterButton'
import ResponsiveLogo from "../ResponsiveLogo/responsiveLogo"

// Import logo sources
import logoTransparentBalta from '../../assets/logo/transparent_logo_01.svg'
import logoTransparentBTA from '../../assets/logo/transparent_logo_02.svg'
import logoTransparentErgo from '../../assets/logo/transparent_logo_03.svg'
import logoTransparentGjensidige from '../../assets/logo/transparent_logo_04.svg'
import logoTransparentSeesam from '../../assets/logo/transparent_logo_05.svg'

function Footer() {
    const [t] = useTranslation(["navigation", "section_footer"])
    const object01 = "footer_tile_01."
    const object02 = "footer_tile_02."
    const object03 = "footer_tile_03."

    const appointmentUrl = i18n.language === 'lv'
        ? config.external_url.URL_01
        : config.external_url.URL_00

    const buttonText = t("navigation_secondary.e_appointment")
    console.log("Button text:", buttonText)
    console.log("Language:", i18n.language)

    return (
        <FooterContainer>
            <FooterCredentials>
                <div className={"footer-column"}>
                    <p className={"textContent--footer--head"}>{ t("section_footer:" + object01 + "part_01") }</p>
                    <p className={"textContent--footer--item"}>{ t("section_footer:" + object01 + "part_02") }</p>
                    <p className={"textContent--footer--item"}>{ t("section_footer:" + object01 + "part_03") }</p>
                    <p className={"textContent--footer--item"}>{ t("section_footer:" + object01 + "part_04") }</p>
                    <p className={"textContent--footer--item"}>{ t("section_footer:" + object01 + "part_05") }</p>
                </div>

                <div className={"footer-column"}>
                    <p className={"textContent--footer--head"}>{ t("section_footer:" + object02 + "part_01") }</p>
                    <p className={"textContent--footer--item"}>{ t("section_footer:" + object02 + "part_02") }</p>
                    <p className={"textContent--footer--item"}>{ t("section_footer:" + object02 + "part_03") }</p>
                    <p className={"textContent--footer--item"}>{ t("section_footer:" + object02 + "part_04") }</p>
                    <p className={"textContent--footer--item"}>{ t("section_footer:" + object02 + "part_05") }</p>
                </div>

                <div className={"footer-column"}>
                    <p className={"textContent--footer--head"}>{ t("section_footer:" + object03 + "part_01") }</p>
                    <p className={"textContent--footer--item"}>{ t("section_footer:" + object03 + "part_02") }</p>
                </div>

                <div className={"footer-column"}>
                    <p className={"textContent--footer--head"}>{ t("section_footer:" + object03 + "part_03") }</p>
                    <p className={"textContent--footer--item"}>{ t("section_footer:" + object03 + "part_04") }</p>
                    <p className={"textContent--footer--item"}>{ t("section_footer:" + object03 + "part_05") }</p>

                    <FooterButton href={appointmentUrl} target="_blank" rel="noopener noreferrer">
                        { buttonText }
                    </FooterButton>
                </div>
            </FooterCredentials>

            <FooterLogo>
                <div className={"inner-footer-logo"}>
                    <div className={"inner-footer-logo-logo-container"}>
                        <div className={"inner-footer-logo-logo-row"}>
                            <ResponsiveLogo
                                src={logoTransparentBalta}
                                alt="Balta"
                                maxHeight="40px"
                                mobileMaxHeight="25px"
                            />
                            <ResponsiveLogo
                                src={logoTransparentBTA}
                                alt="BTA"
                                maxHeight="40px"
                                mobileMaxHeight="25px"
                            />
                            <ResponsiveLogo
                                src={logoTransparentErgo}
                                alt="ERGO"
                                maxHeight="40px"
                                mobileMaxHeight="25px"
                            />
                            <ResponsiveLogo
                                src={logoTransparentGjensidige}
                                alt="Gjensidige"
                                maxHeight="40px"
                                mobileMaxHeight="25px"
                            />
                            <ResponsiveLogo
                                src={logoTransparentSeesam}
                                alt="Seesam"
                                maxHeight="40px"
                                mobileMaxHeight="25px"
                            />
                        </div>

                        <div className={"text-block"}>

                        </div>
                    </div>
                </div>
            </FooterLogo>

            <FooterDeveloper>
                <p>LORS.LV © {new Date().getFullYear()} SIA "Jautrītes Liepiņas ārsta prakse otorinolaringoloģijā"</p>
            </FooterDeveloper>
        </FooterContainer>
    )
}

export default Footer