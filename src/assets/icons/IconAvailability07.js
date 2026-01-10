import React from 'react'

/**
 * Availability Icon 07 - Parking icon
 * @param {Object} props - Component props
 * @param {string|number} [props.size=40] - Icon size
 * @param {string} [props.circleColor='#3F3F3F'] - Background circle color
 * @param {string} [props.iconColor='white'] - Icon color
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.style] - Additional inline styles
 */
const IconAvailability07 = ({
    size = 40,
    circleColor = '#3F3F3F',
    iconColor = 'white',
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
            {/* P burts */}
            <path
                d="M14 31V9h8c4 0 7 2 7 6s-3 6-7 6h-4v10"
                stroke={iconColor}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    )
}

export default IconAvailability07
