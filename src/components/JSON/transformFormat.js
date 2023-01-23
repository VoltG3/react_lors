
function TransformFormat(target) {

    function isInt(n) {
        return Number(n) === n && n % 1 === 0
    }

    function isFloat(n) {
        return Number(n) === n && n % 1 !==0
    }

    function TransformINT(t) {
        let result = ""
            if(t > 12) { t -= 10; result = t + ":00 pm"}
            else if(t === 12) { result = t + ":00 am"}
            else if(t < 12) { result = t + ":00 am"}
        return result
    }

    function TransformFLOAT(b, a) {
        a = a.replace('.', ':')

        let result = ""
            if(b > 12) { b -= 10; result = b + "" + a + " pm"}
            else if(b === 12) { result = b + "" + a + " am"}
            else if(b < 12) { result = b + "" + a + " am"}

        return result
    }

        for(let i = 0; i < target.length; i++) {
            for(let j = 0; j < target[i].length; j++) {

                if(target[i][j] === "") {
                    target[i][j] = ""
                } else {
                    target[i][j] = target[i][j].replace(' ', '')
                    target[i][j] = target[i][j].replace(':', '.')
                    target[i][j] = target[i][j].replace(',', '.')

                    let tmp = Number(target[i][j])

                    // console.log("-----------------------------------")
                    // console.log("[    REM ] - [", target[i][j], "]")
                    // console.log("[  isINT ] - [", isInt(tmp), "]")
                    // console.log("[  isNOT ] - [", isFloat(tmp), "]")

                    if(isInt(tmp)) {
                        target[i][j] = TransformINT(tmp)
                        // console.log("[    NEW ] - [", TransformINT(tmp), "]")
                    }

                    if(isFloat(tmp)) {
                        let temp = ""; temp += tmp
                        let before = "", after = ""
                        for(let i = 0; i < temp.indexOf('.'); i++) {
                            before += "" + temp[i]
                        }

                        for(let i = temp.indexOf('.'); i < temp.length; i++) {
                            after += "" + temp[i]
                        } // console.log("[ UPDATE ] - [ before:: [", before, "] after:: [", after , "]]")

                        before = Number(before)
                        target[i][j] = TransformFLOAT(before, after)
                        // console.log("[    NEW ] - [", TransformFLOAT(before, after), "]")
                }
            }
        }
    }
}

export default TransformFormat