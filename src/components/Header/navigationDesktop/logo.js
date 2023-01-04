import LogoColored00 from '../../../assets/img/logo_colored/Lors_colored.svg'
import LogoTransparent from '../../../assets/img/logo_transparent/Lors_transparent.svg'

export default function Logo(props) {
    console.log("--->", props.variant)

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
             style={{
                 width: '60px',
                 height: '60px'
             }}/>
    )
}
