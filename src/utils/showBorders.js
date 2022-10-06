
export default function showBorders(bordersVisible) {
   function addBorders() {
        let element = document.querySelectorAll("*")
            element.forEach( elm => {
                elm.style.border = "solid 1px red"
            })
    }

    function removeBorders() {
        let element = document.querySelectorAll("*")
            element.forEach( elm => {
                elm.style.border = "none"
            })
    }


    document.addEventListener('keypress', function(e) {
        if(e.key.toLowerCase() === 'b') {
            bordersVisible === false ? bordersVisible = true : bordersVisible = false

            console.log("showBorders", bordersVisible)
        }

        bordersVisible === false ? addBorders() : removeBorders()
    })
}
