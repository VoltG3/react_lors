import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Button as StyledButton } from './Button.styles'
import { Tcovid, Tmobile, TsliderDesktop, TsliderMobile, Tappointment, Tcontacts, Tinfo, Tdefault } from './Button.themes'

import { useTranslation } from 'react-i18next'

export const ButtonComponent = (props) => {
    const [t] = useTranslation(["common", "sections"])

    const btn_contacts = <p className={"textcontent--button"}>{ t("btn_variant04") }</p>
    const btn_appointment = <p className={"textcontent--button"}>{ t("common:eapointment") }</p>
    const btn_seeher = <p className={"textcontent--button"}>{ t("btn_variant02") }</p>

    const theme = props.label === 'covid' ? Tcovid
                : props.label === 'mobile' ? Tmobile
                : props.label === 'sliderDesktop' ? TsliderDesktop
                : props.label === 'sliderMobile' ? TsliderMobile
                : props.label === 'appointment' ? Tappointment
                : props.label === 'contacts' ? Tcontacts
                : props.label === 'info' ? Tinfo
                : Tdefault
    return (
        <ThemeProvider theme={ theme }>
            <StyledButton>
                <div id={"button"}>
                    <button className={"button"}>{
                        props.label === "sliderDesktop" || props.label === "sliderMobile"
                            ? btn_contacts
                            : props.label === "appointment" || props.label === "contacts"
                                ? btn_appointment
                                : btn_seeher

                    }</button>
                </div>
            </StyledButton>
        </ThemeProvider>
    )
}