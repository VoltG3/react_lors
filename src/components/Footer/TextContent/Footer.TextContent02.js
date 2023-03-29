import { useTranslation } from 'react-i18next'

export default function FooterTextContent02() {
    const [t] = useTranslation(["chapter_footer"])
    const object = "footer_tile_02."

    return (
        <div>
            <p className={"textContent--footer--head"}>{ t(object + "part_01") }</p>
            <p className={"textContent--footer--item"}>{ t(object + "part_02") }</p>
        </div>
    )
}
