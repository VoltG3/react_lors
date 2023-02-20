
import config from "../../../config";


export default function Logo(props) {

    const logoColored00 = config.logo_colored.logoColored00
    const logoTransparent00 = config.logo_transparent.logoTransparent00

    function getVariant() {
        if(props.variant === "colored") {
            return logoColored00
        } else {
            return logoTransparent00
        }
    }

    return (
        <img src={ getVariant() }
             alt={"icon"}
             width="auto" height="45px"
             />
    )
}
