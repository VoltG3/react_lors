import { useTranslation } from 'react-i18next'

export default function FooterTextcontent03() {
    const [t] = useTranslation(["sections"])

    return (
        <div>
            <p className={"pMarginBottom textcontent--header--footer"}>{ t("sections:section_footer_part06") }</p>
            <p className={"pMarginBottom textcontent--paragraph--footer"}>{ t("sections:section_footer_part07") }</p>
            <p className={"pMarginBottom textcontent--header--footer"}>{ t("sections:section_footer_part08") }</p>
            <p className={"              textcontent--paragraph--footer"}>{ t("sections:section_footer_part09") }</p>
        </div>
    )
}
