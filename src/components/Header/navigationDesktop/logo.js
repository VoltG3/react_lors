import LogoColored00 from '../../../assets/logo_colored/Lors4_colored.svg'
import LogoTransparent from '../../../assets/logo_transparent/Lors1_transparent.svg'

export default function Logo(props) {

    const colored = LogoColored00
    const transparent = LogoTransparent

    function getVariant() {
        if(props.variant === "colored") {
            return colored
        } else {
            return transparent
        }
    }

    return (
        <img src={ getVariant() }
             alt={"icon"}
             width="auto" height="60px"
             />
    )
}
