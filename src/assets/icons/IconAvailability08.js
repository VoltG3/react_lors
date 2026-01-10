import React from 'react'

/**
 * Availability Icon 08 - Payment by card
 * @param {Object} props - Component props
 * @param {string|number} [props.size] - Icon size (scales proportionally)
 * @param {string|number} [props.width=43] - Icon width (overrides size)
 * @param {string|number} [props.height=27] - Icon height (overrides size)
 * @param {string} [props.bgColor='#3F3F3F'] - Background color
 * @param {string} [props.stripeColor='white'] - Stripe color
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.style] - Additional inline styles
 */
const IconAvailability08 = ({
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
            {/* Karte */}
            <rect x="9" y="14" width="22" height="15" rx="2" fill={iconColor} />
            {/* Magnētiskā josla */}
            <rect x="9" y="17" width="22" height="3" fill={circleColor} />
            {/* Mikroshēma */}
            <rect x="12" y="22" width="4" height="3" rx="0.5" fill={circleColor} opacity="0.8" />
        </svg>
    )
}

export default IconAvailability08
