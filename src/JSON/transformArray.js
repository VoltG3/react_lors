import TransformData from './transformData'

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
