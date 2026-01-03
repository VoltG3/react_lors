import React from 'react'
import ResponsiveLogo from '../../components/ResponsiveLogo/responsiveLogo'
import logoSvg from './source/transparent_logo_03.svg'

/**
 * Logo Transparent - ERGO
 * @param {Object} props - Component props
 * @param {string} [props.maxWidth] - Max width for desktop
 * @param {string} [props.tabletMaxWidth] - Max width for tablet
 * @param {string} [props.mobileMaxWidth] - Max width for mobile
 * @param {string} [props.opacity] - Logo opacity
 * @param {boolean} [props.noHover] - Disable hover effect
 * @returns {JSX.Element} Logo component
 */
const LogoTransparentErgo = (props) => {
    return (
        <ResponsiveLogo
            src={logoSvg}
            alt="ERGO Logo"
            {...props}
        />
    )
}

export default LogoTransparentErgo
