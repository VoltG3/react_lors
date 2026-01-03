import React from 'react'
import ResponsiveLogo from '../../components/ResponsiveLogo/responsiveLogo'
import logoSvg from './source/transparent_logo_01.svg'

/**
 * Logo Transparent - Balta
 * @param {Object} props - Component props
 * @param {string} [props.maxWidth] - Max width for desktop
 * @param {string} [props.maxHeight] - Max height for desktop (recommended for consistent logo heights)
 * @param {string} [props.tabletMaxWidth] - Max width for tablet
 * @param {string} [props.tabletMaxHeight] - Max height for tablet
 * @param {string} [props.mobileMaxWidth] - Max width for mobile
 * @param {string} [props.mobileMaxHeight] - Max height for mobile
 * @param {string} [props.opacity] - Logo opacity
 * @param {boolean} [props.noHover] - Disable hover effect
 * @returns {JSX.Element} Logo component
 */
const LogoTransparentBalta = (props) => {
    return (
        <ResponsiveLogo
            src={logoSvg}
            alt="Balta Logo"
            {...props}
        />
    )
}

export default LogoTransparentBalta
