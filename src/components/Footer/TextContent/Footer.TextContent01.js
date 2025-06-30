import { useTranslation } from 'react-i18next'
import config from '../../../config'

export default function FooterTextContent01() {
    const [t] = useTranslation(["chapter_footer"])
    const introFooter = config.common.introFooter
    const object = "footer_tile_01."

    return (
        <div>
            <p className={"textContent--footer--head"}>{ introFooter }</p>
            <p className={"textContent--footer--head"}>{ t(object + "part_01") }</p>
            <p className={"textContent--footer--item"}>{ t(object + "part_02") }</p>
        </div>
    )
}