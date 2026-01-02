/**
 * Converts 24-hour time format to 12-hour format with am/pm
 * @param {string} time - Time string in format "HH:MM" or "HH"
 * @returns {string} Time in 12-hour format, e.g., "9:30 am" or "5:00 pm"
 */
function convertTo12HourFormat(time) {
    if (!time) return ''

    // Parse hours and minutes
    const [hoursStr, minutesStr = '00'] = time.split(':')
    let hours = parseInt(hoursStr, 10)
    const minutes = minutesStr.padStart(2, '0')

    // Determine am/pm
    const period = hours >= 12 ? 'pm' : 'am'

    // Convert to 12-hour format
    if (hours === 0) {
        hours = 12 // Midnight
    } else if (hours > 12) {
        hours -= 12
    }

    return `${hours}:${minutes} ${period}`
}

/**
 * Transforms a 2D array of time strings from 24-hour to 12-hour format
 * @param {string[][]} target - 2D array of time strings
 * @returns {string[][]} Transformed array with 12-hour format times
 */
function TransformFormat(target) {
    if (!Array.isArray(target)) {
        return []
    }

    return target.map(row => {
        if (!Array.isArray(row)) return []

        return row.map(timeStr => {
            if (!timeStr || timeStr === '') return ''

            // Clean the string
            const cleaned = timeStr.replace(/\s/g, '').replace(/[,:]/g, '.')
            const num = parseFloat(cleaned)

            if (isNaN(num)) return timeStr

            // Handle integer hours (e.g., 9 -> 9:00)
            if (Number.isInteger(num)) {
                return convertTo12HourFormat(`${num}:00`)
            }

            // Handle decimal format (e.g., 9.5 -> 9:30)
            const [hoursStr, decimals] = cleaned.split('.')
            const minutes = decimals ? decimals.padEnd(2, '0') : '00'

            return convertTo12HourFormat(`${hoursStr}:${minutes}`)
        })
    })
}

export default TransformFormat