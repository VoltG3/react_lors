import React from "react"
import { useTranslation } from 'react-i18next'
import '../../translations/i18n'
import i18n from 'i18next'
import config from '../../config'

import * as S from './footer.styles'
import ResponsiveLogo from "../ResponsiveLogo/responsiveLogo"

// Import logo sources
import logoTransparentBalta from '../../assets/logo/transparent_logo_01.svg'
import logoTransparentBTA from '../../assets/logo/transparent_logo_02.svg'
import logoTransparentErgo from '../../assets/logo/transparent_logo_03.svg'
import logoTransparentGjensidige from '../../assets/logo/transparent_logo_04.svg'
import logoTransparentSeesam from '../../assets/logo/transparent_logo_05.svg'

function Footer() {
    const { t } = useTranslation(["navigation", "section_footer"])
    const object01 = "footer_tile_01."
    const object02 = "footer_tile_02."
    const object03 = "footer_tile_03."

    const appointmentUrl = i18n.language === 'lv'
        ? config.external_url.URL_01
        : config.external_url.URL_00

    const buttonText = t("navigation_secondary.e_appointment")

    const insuranceLogos = [
        { src: logoTransparentBalta, alt: "Balta" },
        { src: logoTransparentBTA, alt: "BTA" },
        { src: logoTransparentErgo, alt: "ERGO" },
        { src: logoTransparentGjensidige, alt: "Gjensidige" },
        { src: logoTransparentSeesam, alt: "Seesam" },
    ]

    const renderParts = (obj, parts) => parts.map(part => (
        <p key={part} className="textContent--footer--item">
            {t(`section_footer:${obj}part_${part}`)}
        </p>
    ))

    return (
        <S.StyledFooterContainer>
            <S.StyledFooterCredentials>
                <div className="footer-column">
                    <p className="textContent--footer--head">{t(`section_footer:${object01}part_01`)}</p>
                    {renderParts(object01, ["02", "03", "04", "05"])}
                </div>

                <div className="footer-column">
                    <p className="textContent--footer--head">{t(`section_footer:${object02}part_01`)}</p>
                    {renderParts(object02, ["02", "03", "04", "05"])}
                </div>

                <div className="footer-column">
                    <p className="textContent--footer--head">{t(`section_footer:${object03}part_01`)}</p>
                    {renderParts(object03, ["02"])}
                </div>

                <div className="footer-column">
                    <p className="textContent--footer--head">{t(`section_footer:${object03}part_03`)}</p>
                    {renderParts(object03, ["04", "05"])}

                    <S.StyledFooterButton href={appointmentUrl} target="_blank" rel="noopener noreferrer">
                        {buttonText}
                    </S.StyledFooterButton>
                </div>
            </S.StyledFooterCredentials>

            <S.StyledFooterLogo>
                <div className="inner-footer-logo">
                    <div className="inner-footer-logo-logo-container">
                        <div className="inner-footer-logo-logo-row">
                            {insuranceLogos.map((logo, index) => (
                                <ResponsiveLogo
                                    key={index}
                                    src={logo.src}
                                    alt={logo.alt}
                                    maxHeight="40px"
                                    mobileMaxHeight="25px"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="text-block">
                        <p>{t("section_footer:insurance_text")}</p>
                    </div>
                </div>
            </S.StyledFooterLogo>

            <S.StyledFooterDeveloper>
                <p>LORS.LV © {new Date().getFullYear()} SIA "Jautrītes Liepiņas ārsta prakse otorinolaringoloģijā"</p>
            </S.StyledFooterDeveloper>
        </S.StyledFooterContainer>
    )
}

export default Footer