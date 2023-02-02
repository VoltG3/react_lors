import { useTranslation } from 'react-i18next'

export default function FooterTextcontent01() {
    const [t] = useTranslation(["sections"])
    const introFooter = 'SIA "Jautrītes Liepiņas ārsta prakse \notorinolaringoloģijā"'

    return (
        <div>
            <p className={"textcontent--footer--header"}>{ introFooter }</p>
            <p className={"textcontent--footer--header"}>{ t("sections:section_footer_part02") }</p>
            <p className={"textcontent--footer--item"}>{ t("sections:section_footer_part03") }</p>
        </div>
    )
}
