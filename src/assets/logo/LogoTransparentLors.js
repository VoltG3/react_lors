import React from 'react'
import ResponsiveLogo from '../../components/ResponsiveLogo/responsiveLogo'
import logoSvg from './source/transparent_logo_00.svg'

/**
 * Logo Transparent - Lors
 * @param {Object} props - Component props
 * @param {string} [props.maxWidth] - Max width for desktop
 * @param {string} [props.tabletMaxWidth] - Max width for tablet
 * @param {string} [props.mobileMaxWidth] - Max width for mobile
 * @param {string} [props.opacity] - Logo opacity
 * @param {boolean} [props.noHover] - Disable hover effect
 * @returns {JSX.Element} Logo component
 */
const LogoTransparentLors = (props) => {
    return (
        <ResponsiveLogo
            src={logoSvg}
            alt="Lors Logo"
            {...props}
        />
    )
}

export default LogoTransparentLors
