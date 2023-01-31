import { useTranslation } from 'react-i18next'

export default function FooterTextcontent01() {
    const [t] = useTranslation(["sections"])
    const introFooter = 'SIA "Jautrītes Liepiņas ārsta prakse \notorinolaringoloģijā"'

    return (
        <div>
            <p className={"pMarginBottom textcontent--header--footer"}>{ introFooter }</p>
            <p className={"pMarginBottom textcontent--header--footer"}>{ t("sections:section_footer_part02") }</p>
            <p className={"              textcontent--paragraph_older--footer"}>{ t("sections:section_footer_part03") }</p>
        </div>
    )
}
