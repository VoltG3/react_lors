import { useTranslation } from 'react-i18next'

export default function FooterTextcontent01() {
    const [t] = useTranslation(["sections"])

    return (

        <div>
            <p className={"pMarginBottom textcontent--header--footer"}>{ t("sections:section_footer_part01") }</p>
            <p className={"pMarginBottom textcontent--header--footer"}>{ t("sections:section_footer_part02") }</p>
            <p className={"              textcontent--paragraph--footer"}>{ t("sections:section_footer_part03") }</p>
        </div>


    )
}
