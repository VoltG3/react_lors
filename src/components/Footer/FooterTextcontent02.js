import { useTranslation } from 'react-i18next'

export default function FooterTextcontent02() {
    const [t] = useTranslation(["sections"])

    return (

        <div>
            <p className={"pMarginBottom textcontent--header--footer"}>{ t("sections:section_footer_part04") }</p>
            <p className={"              textcontent--paragraph--footer"}>{ t("sections:section_footer_part05") }</p>
        </div>

    )
}
