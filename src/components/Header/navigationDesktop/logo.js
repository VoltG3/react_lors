import React from 'react'
import ResponsiveLogo from '../../ResponsiveLogo/responsiveLogo'
import logoColoredLors from '../../../assets/logo/colored_logo_00.svg'
import logoTransparentLors from '../../../assets/logo/transparent_logo_00.svg'

export default function Logo({ variant }) {

    const isColored = variant === "colored"
    const logoSrc = isColored ? logoColoredLors : logoTransparentLors

    return (
        <ResponsiveLogo
            src={logoSrc}
            alt="Lors"
            maxHeight="45px"
        />
    )
}