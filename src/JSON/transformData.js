
function TransformData(target) {

    let num = ""
    const arr = []
        for(let i = 0; i < target.indexOf("-"); i++) {
            if(!isNaN(parseInt(target[i])) || target[i] === ":") {
                num += "" + target[i]
            }
        } arr.push(num)

    num = ""
        for(let i = target.indexOf("-"); i < target.length; i++ ) {
            if(!isNaN(parseInt(target[i])) || target[i] === ":") {
                num += "" + target[i]
            }
        } arr.push(num)
    //console.log("[  ARRAY ] - ", arr)

    return arr
}

export default TransformData