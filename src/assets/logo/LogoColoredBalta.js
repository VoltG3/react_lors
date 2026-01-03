import React from 'react'
import logoPng from './source/colored_logo_01.png'

/**
 * Logo Colored - Balta
 * @param {Object} props - Component props
 * @param {string|number} [props.size] - Logo size (width, height auto)
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.style] - Additional inline styles
 * @returns {JSX.Element} Logo component
 */
const LogoColoredBalta = ({
    size,
    className = '',
    style = {},
    ...props
}) => {
    return (
        <img
            src={logoPng}
            alt="Balta Logo"
            width={size}
            className={className}
            style={style}
            {...props}
        />
    )
}

export default LogoColoredBalta
