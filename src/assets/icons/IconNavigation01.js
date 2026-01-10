import React from 'react'

/**
 * Navigation Icon 01 - Phone/Call icon
 * @param {Object} props - Component props
 * @param {string|number} [props.size=20] - Icon size (width and height)
 * @param {string} [props.color='#EDAE0E'] - Icon fill and stroke color
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.style] - Additional inline styles
 * @returns {JSX.Element} SVG icon component
 */
const IconNavigation01 = ({
    size = 20,
    color = '#EDAE0E',
    className = '',
    style = {},
    ...props
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
            {...props}
        >
            <path
                d="M18 15.3l-3.3-2.1c-.5-.3-1.1-.2-1.4.3l-1.3 1.7c-1.8-1-3.3-2.5-4.3-4.3l1.7-1.3c.5-.4.6-1 .3-1.4L7.6 5c-.3-.5-.9-.6-1.4-.4L3.6 5.8c-.8.3-1.3 1.1-1.3 2 0 5.4 4.4 9.8 9.8 9.8.9 0 1.7-.5 2-1.3l1.2-2.6c.3-.5.1-1.1-.4-1.4z"
                fill={color}
            />
        </svg>
    )
}

export default IconNavigation01
