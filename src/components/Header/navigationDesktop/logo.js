import React from 'react'
import { LogoColoredLors, LogoTransparentLors } from '../../../assets/logo/index'

export default function Logo({ variant }) {

    const isColored = variant === "colored"

    return isColored ? (
        <LogoColoredLors maxHeight="45px" />
    ) : (
        <LogoTransparentLors maxHeight="45px" />
    )
}