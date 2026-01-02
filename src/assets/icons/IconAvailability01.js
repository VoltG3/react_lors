import React from 'react'

/**
 * Availability Icon 01 - Old person
 * @param {Object} props - Component props
 * @param {string|number} [props.size=40] - Icon size (width and height)
 * @param {string} [props.circleColor='#3F3F3F'] - Background circle color
 * @param {string} [props.iconColor='white'] - Icon foreground color
 * @param {string} [props.accentColor='#3F3F3F'] - Accent color for specific elements
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.style] - Additional inline styles
 * @returns {JSX.Element} SVG icon component
 */
const IconAvailability01 = ({
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
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.769 11.7947C18.4412 11.0266 19.4382 10.3884 20.3573 10.8323C20.8661 11.078 21.1742 11.5931 21.4258 12.099C22.3681 13.9936 23.5433 15.7239 24.9514 17.2899C25.4731 17.8702 26.1189 18.5189 26.0302 19.2941C27.3459 19.2941 27.644 20.8972 27.8187 22.2013C28.2566 25.4705 28.7866 29.2158 29.1762 32.2353C28.9409 32.2353 28.7057 32.2353 28.4704 32.2353C28.3527 31.2618 28.2351 30.1176 28.1174 29.1765C25.9214 29.1765 24.1958 29.1765 21.9998 29.1765C21.8821 30.1176 21.7123 31.3309 21.5897 32.2676C21.4115 32.2676 21.0636 32.2676 20.889 32.2676C21.32 29.0383 21.6964 25.5908 22.0791 22.3033C22.2388 20.9316 22.5904 19.2941 23.9713 19.2941C22.736 18.1779 21.6664 16.6415 20.7057 15.3264C19.3588 16.5949 18.1824 18.0066 17.1762 19.5617C17.4451 20.3849 17.7063 21.2105 17.9599 22.0388C18.5448 23.949 18.5122 25.9883 17.9576 27.9075C17.9299 28.0037 17.9021 28.0999 17.8744 28.196C17.3479 30.0258 15.1136 32.2529 14.917 30.359C14.8674 29.8812 15.0069 29.212 15.1308 28.7478C15.453 27.5405 15.7427 26.3217 15.9998 25.0911C15.8652 24.2949 15.5906 23.5497 15.1762 22.8558C14.5971 25.1427 14.0899 27.4483 13.6543 29.7727C13.4126 31.0625 12.411 32.9044 11.5226 31.9386C11.0345 31.408 11.0954 30.491 11.1717 29.7741C11.4136 27.5047 11.6831 25.24 11.98 22.9802C12.3579 20.105 13.371 17.3335 15.1284 15.0268C15.9715 13.9202 16.8517 12.8428 17.769 11.7947Z"
                fill={iconColor}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.4118 20C24.4706 20 25.5294 20 26.5883 20C26.9412 20 26.9412 20.2353 27.0589 20.7059C27.4506 23.2863 27.6859 25.8841 28 28.4706C26.0393 28.4706 24.0784 28.4706 22.1177 28.4706C22.353 26.2353 22.8236 21.5294 22.9412 20.7059C23.042 20 23.1763 20 23.4118 20Z"
                fill={accentColor}
            />
            <path
                d="M25.4118 8.94116C25.4118 10.3706 24.253 11.5294 22.8236 11.5294C21.3941 11.5294 20.2354 10.3706 20.2354 8.94116C20.2354 7.51172 21.3941 6.35293 22.8236 6.35293C24.253 6.35293 25.4118 7.51172 25.4118 8.94116Z"
                fill={iconColor}
            />
        </svg>
    )
}

export default IconAvailability01
