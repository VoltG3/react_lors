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
    size,
    width,
    height,
    bgColor = '#3F3F3F',
    stripeColor = 'white',
    className = '',
    style = {},
    ...props
}) => {
    // Calculate dimensions: if size is provided, scale proportionally (43:27 ratio)
    // Otherwise use individual width/height or defaults
    const finalWidth = width || (size ? size : 43)
    const finalHeight = height || (size ? (size * 27 / 43) : 27)

    return (
        <svg
            width={finalWidth}
            height={finalHeight}
            viewBox="0 0 43 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
            {...props}
        >
            <path
                d="M0 3.25301C0 1.45642 1.35576 0 3.02817 0H39.9718C41.6442 0 43 1.45642 43 3.25301V23.747C43 25.5436 41.6442 27 39.9718 27H3.02817C1.35576 27 0 25.5436 0 23.747V3.25301Z"
                fill={bgColor}
            />
            <rect y="5.53012" width="43" height="6.50602" fill={stripeColor} />
        </svg>
    )
}

export default IconAvailability08
