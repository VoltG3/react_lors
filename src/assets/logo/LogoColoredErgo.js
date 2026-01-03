import React from 'react'
import logoPng from './source/colored_logo_03.png'

/**
 * Logo Colored - ERGO
 * @param {Object} props - Component props
 * @param {string|number} [props.size] - Logo size (width, height auto)
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.style] - Additional inline styles
 * @returns {JSX.Element} Logo component
 */
const LogoColoredErgo = ({
    size,
    className = '',
    style = {},
    ...props
}) => {
    return (
        <img
            src={logoPng}
            alt="ERGO Logo"
            width={size}
            className={className}
            style={style}
            {...props}
        />
    )
}

export default LogoColoredErgo
