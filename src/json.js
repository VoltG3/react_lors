/**
 * Splits a time range string (e.g., "9 - 17" or "9:30 - 13:45") into an array of two time strings
 * @param {string} target - Time range string in format "HH:MM - HH:MM" or "HH - HH"
 * @returns {string[]} Array with start and end times, e.g., ["9:30", "13:45"]
 */
export function TransformData(target) {
    if (!target || typeof target !== 'string') {
        return ['', '']
    }

    // Check if it's just a placeholder dash
    if (target.trim() === '-') {
        return ['-', '']
    }

    // Split by dash and clean up spaces
    const [start = '', end = ''] = target
        .split('-')
        .map(time => time.trim().replace(/[^\d:]/g, ''))
    return [start, end]
}

/**
 * Transforms an array of objects with line_01 and line_02 properties
 * into a 2D array of time ranges
 * @param {Array} target - Array of objects with line_01 and line_02 properties
 * @returns {Array[]} 2D array where each row contains [start1, end1, start2, end2]
 */
export const TransformArray = (target) => {
    if (!Array.isArray(target) || target.length === 0) {
        return []
    }
    return target.map(obj => {
        const line1Times = TransformData(obj.line_01 || '')
        const line2Times = TransformData(obj.line_02 || '')
        return [...line1Times, ...line2Times]
    })
}

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
export function TransformFormat(target) {
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
