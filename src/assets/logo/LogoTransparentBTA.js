import React from 'react'
import ResponsiveLogo from '../../components/ResponsiveLogo/responsiveLogo'
import logoSvg from './source/transparent_logo_02.svg'

/**
 * Logo Transparent - BTA
 * @param {Object} props - Component props
 * @param {string} [props.maxWidth] - Max width for desktop
 * @param {string} [props.tabletMaxWidth] - Max width for tablet
 * @param {string} [props.mobileMaxWidth] - Max width for mobile
 * @param {string} [props.opacity] - Logo opacity
 * @param {boolean} [props.noHover] - Disable hover effect
 * @returns {JSX.Element} Logo component
 */
const LogoTransparentBTA = (props) => {
    return (
        <ResponsiveLogo
            src={logoSvg}
            alt="BTA Logo"
            {...props}
        />
    )
}

export default LogoTransparentBTA
