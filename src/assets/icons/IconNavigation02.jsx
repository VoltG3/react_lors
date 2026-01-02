import React from 'react'

/**
 * Navigation Icon 02 - Email/Mail icon
 * @param {Object} props - Component props
 * @param {string|number} [props.size] - Icon size (scales proportionally)
 * @param {string|number} [props.width=24] - Icon width (overrides size)
 * @param {string|number} [props.height=18] - Icon height (overrides size)
 * @param {string} [props.color='#EDAE0E'] - Icon fill color
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.style] - Additional inline styles
 * @returns {JSX.Element} SVG icon component
 */
const IconNavigation02 = ({
    size,
    width,
    height,
    color = '#EDAE0E',
    className = '',
    style = {},
    ...props
}) => {
    // Calculate dimensions: if size is provided, scale proportionally (24:18 ratio)
    // Otherwise use individual width/height or defaults
    const finalWidth = width || (size ? size : 24)
    const finalHeight = height || (size ? (size * 18 / 24) : 18)

    return (
        <svg
            width={finalWidth}
            height={finalHeight}
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
            {...props}
        >
            <path
                d="M21.5221 15.7195H2.4772C2.39713 15.7194 2.32036 15.686 2.26377 15.6266C2.20718 15.5673 2.1754 15.4868 2.1754 15.4028V4.54168L11.9828 10.2966L21.8246 4.88748V15.4032C21.8245 15.4448 21.8167 15.486 21.8015 15.5244C21.7862 15.5628 21.7639 15.5976 21.7358 15.627C21.7078 15.6564 21.6744 15.6797 21.6377 15.6955C21.6011 15.7114 21.5618 15.7196 21.5221 15.7195ZM21.7259 2.36638L12.0172 7.70305L2.77449 2.28011H21.5221C21.598 2.28066 21.6709 2.31151 21.7259 2.36638ZM21.5221 0H11.9997H2.4772C1.11132 0 0 1.16481 0 2.59681V15.4032C0 16.8348 1.11132 18 2.4772 18H21.5221C22.8887 18 24 16.8348 24 15.4032V2.59681C24 1.16481 22.8887 0 21.5221 0Z"
                fill={color}
            />
        </svg>
    )
}

export default IconNavigation02
