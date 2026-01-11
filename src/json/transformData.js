/**
 * Splits a time range string (e.g., "9 - 17" or "9:30 - 13:45") into an array of two time strings
 * @param {string} target - Time range string in format "HH:MM - HH:MM" or "HH - HH"
 * @returns {string[]} Array with start and end times, e.g., ["9:30", "13:45"]
 */
function TransformData(target) {
    if (!target || typeof target !== 'string') {
        return ['', '']
    }

    // Split by dash and clean up spaces
    const [start = '', end = ''] = target
        .split('-')
        .map(time => time.trim().replace(/[^\d:]/g, ''))

    return [start, end]
}

export default TransformData