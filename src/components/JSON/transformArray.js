import TransformData from './transformData'

export const TransformArray = (target) => {

        let toReturn
        target.forEach(function(obj) {
            let obj1 = TransformData(obj.line_01)
            let obj2 = TransformData(obj.line_02)

            toReturn = obj1.concat(obj2)

            console.log("[  ARRAY ] - TransformArray", toReturn)
            return toReturn
        })

    return toReturn
}