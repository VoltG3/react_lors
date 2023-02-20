import React from 'react'
import { ButtonComponent } from './Button.component'

export const ButtonController = (props) => {

    const covid = <ButtonComponent label={"covid"} />
    const mobile = <ButtonComponent label={"mobile"} />
    const sliderDesktop = <ButtonComponent label={"sliderDesktop"} />
    const appointment = <ButtonComponent label={"appointment"} />
    const contacts = <ButtonComponent label={"contacts"} />
    const sliderMobile = <ButtonComponent label={"sliderMobile"} />
    const info = <ButtonComponent label={"info"} />

    return (
        <div variant={ props.variant }>
            { (() => {
                switch (props.variant) {
                    case 'covid': return covid
                    case 'mobile': return mobile
                    case 'sliderDesktop': return sliderDesktop
                    case 'sliderMobile': return sliderMobile
                    case 'appointment': return appointment
                    case 'contacts': return contacts
                    case 'info': return info
                    default: return ""
                }
            })() }
        </div>
    )
}