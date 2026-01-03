import React from "react"
import { useTranslation } from 'react-i18next'

import config from '../../config'

import { StyledFooterContainer as FooterContainer } from './Styles/StyledFooterContainer'
import { StyledFooterCredentials as FooterCredentials } from './Styles/StyledFooterCredentials'
import { StyledFooterLogo as FooterLogo } from './Styles/StyledFooterLogo'
import { StyledFooterDeveloper as FooterDeveloper } from './Styles/StyledFooterDeveloper'
import {
    LogoTransparentLors,
    LogoTransparentBalta,
    LogoTransparentBTA,
    LogoTransparentErgo,
    LogoTransparentGjensidige,
    LogoTransparentSeesam
} from "../../assets/logo";

function Footer() {
    const [t] = useTranslation(["section_footer"])
    const object01 = "footer_tile_01."
    const object02 = "footer_tile_02."
    const object03 = "footer_tile_03."

    return (
        <FooterContainer>
            <FooterCredentials>
                <div className={"footer-column"}>
                    <p className={"textContent--footer--head"}>{ t(object01 + "part_01") }</p>
                    <p className={"textContent--footer--item"}>{ t(object01 + "part_02") }</p>
                    <p className={"textContent--footer--item"}>{ t(object01 + "part_03") }</p>
                    <p className={"textContent--footer--item"}>{ t(object01 + "part_04") }</p>
                    <p className={"textContent--footer--item"}>{ t(object01 + "part_05") }</p>
                </div>

                <div className={"footer-column"}>
                    <p className={"textContent--footer--head"}>{ t(object02 + "part_01") }</p>
                    <p className={"textContent--footer--item"}>{ t(object02 + "part_02") }</p>
                    <p className={"textContent--footer--item"}>{ t(object02 + "part_03") }</p>
                    <p className={"textContent--footer--item"}>{ t(object02 + "part_04") }</p>
                    <p className={"textContent--footer--item"}>{ t(object02 + "part_05") }</p>
                </div>

                <div className={"footer-column"}>
                    <p className={"textContent--footer--head"}>{ t(object03 + "part_01") }</p>
                    <p className={"textContent--footer--item"}>{ t(object03 + "part_02") }</p>
                </div>

                <div className={"footer-column"}>
                    <p className={"textContent--footer--head"}>{ t(object03 + "part_03") }</p>
                    <p className={"textContent--footer--item"}>{ t(object03 + "part_04") }</p>
                    <p className={"textContent--footer--item"}>{ t(object03 + "part_05") }</p>
                </div>
            </FooterCredentials>

            <FooterLogo>
                <div className={"inner-footer-logo"}>
                    <div className={"inner-footer-logo-logo-container"}>
                        <div className={"inner-footer-logo-logo-row"}>
                            <LogoTransparentBalta
                                maxHeight={"40px"}
                                mobileMaxHeight={"25px"}
                            />
                            <LogoTransparentBTA
                                maxHeight={"40px"}
                                mobileMaxHeight={"25px"}
                            />
                            <LogoTransparentErgo
                                maxHeight={"40px"}
                                mobileMaxHeight={"25px"}
                            />
                            <LogoTransparentGjensidige
                                maxHeight={"40px"}
                                mobileMaxHeight={"25px"}
                            />
                            <LogoTransparentSeesam
                                maxHeight={"40px"}
                                mobileMaxHeight={"25px"}
                            />
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