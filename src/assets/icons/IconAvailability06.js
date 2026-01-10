import React from 'react'

/**
 * Availability Icon 06 - Elevator/Lift icon
 * @param {Object} props - Component props
 * @param {string|number} [props.size=40] - Icon size
 * @param {string} [props.circleColor='#3F3F3F'] - Background circle color
 * @param {string} [props.iconColor='white'] - Icon color
 * @param {string} [props.accentColor='#3F3F3F'] - Accent color
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.style] - Additional inline styles
 */
const IconAvailability06 = ({
    size = 40,
    circleColor = '#3F3F3F',
    iconColor = 'white',
    accentColor = '#3F3F3F',
    className = '',
    style = {},
    ...props
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
            {...props}
        >
            <circle cx="20" cy="20" r="20" fill={circleColor} />
            {/* Lifts */}
            <rect x="11" y="9" width="18" height="22" rx="2" stroke={iconColor} strokeWidth="2" fill="none" />
            {/* Bultas */}
            <path d="M20 6l-3 3h6l-3-3zM20 34l-3-3h6l-3 3z" fill={iconColor} />
            {/* Personas */}
            <circle cx="17" cy="14" r="2" fill={iconColor} />
            <path d="M15 17h4c1 0 1.5.5 1.5 1.5v6.5h-1.5v-4h-1v4h-1.5v-6.5C13.5 17.5 14 17 15 17z" fill={iconColor} />
            <circle cx="23" cy="14" r="2" fill={iconColor} />
            <path d="M21 17h4c1 0 1.5.5 1.5 1.5v6.5h-1.5v-4h-1v4h-1.5v-6.5C19.5 17.5 20 17 21 17z" fill={iconColor} />
        </svg>
    )
}

export default IconAvailability06
