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
            <path
                d="M12.1844 31V9.18182H20.7923C22.4472 9.18182 23.857 9.49787 25.0218 10.13C26.1865 10.755 27.0743 11.625 27.6851 12.7401C28.303 13.848 28.612 15.1264 28.612 16.5753C28.612 18.0241 28.2995 19.3026 27.6745 20.4105C27.0495 21.5185 26.1439 22.3814 24.9578 22.9993C23.7789 23.6172 22.3513 23.9261 20.6752 23.9261H15.1887V20.2294H19.9294C20.8172 20.2294 21.5487 20.0767 22.124 19.7713C22.7064 19.4588 23.1396 19.0291 23.4237 18.4822C23.7149 17.9283 23.8605 17.2926 23.8605 16.5753C23.8605 15.8509 23.7149 15.2187 23.4237 14.679C23.1396 14.1321 22.7064 13.7095 22.124 13.4112C21.5416 13.1058 20.803 12.9531 19.9081 12.9531H16.7973V31H12.1844Z"
                fill={iconColor}
            />
        </svg>
    )
}

export default IconAvailability07
