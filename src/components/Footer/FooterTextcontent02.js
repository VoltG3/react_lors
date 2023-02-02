import { useTranslation } from 'react-i18next'

export default function FooterTextcontent02() {
    const [t] = useTranslation(["sections"])

    return (
        <div>
            <p className={"textcontent--footer--header"}>{ t("sections:section_footer_part04") }</p>
            <p className={"textcontent--footer--item"}>{ t("sections:section_footer_part05") }</p>
        </div>
    )
}
