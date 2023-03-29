import { useTranslation } from 'react-i18next'

export default function FooterTextContent03() {
    const [t] = useTranslation(["chapter_footer"])
    const object = "footer_tile_03."

    return (
        <div>
            <p className={"textContent--footer--head"}>{ t(object + "part_01") }</p>
            <p className={"textContent--footer--item"}>{ t(object + "part_02") }</p>
            <p className={"textContent--footer--head"}>{ t(object + "part_03") }</p>
            <p className={"textContent--footer--item"}>{ t(object + "part_04") }</p>
        </div>
    )
}
