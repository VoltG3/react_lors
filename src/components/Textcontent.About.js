import { useTranslation } from 'react-i18next'

export default function TextcontentAbout() {
    const [t] = useTranslation(["common", "sections"])

    return (
        <div className={"box textcontent"}>
            <h1 className={"textcontent--index--header"}>{ t("common:about") }</h1>

            <p className={"textcontent--paragraph"}>{ t("sections:section_about_part01") }</p>
            <p className={"textcontent--paragraph"}>{ t("sections:section_about_part02") }</p>
            <p className={"textcontent--paragraph"}>{ t("sections:section_about_part03") }</p>
            <p className={"textcontent--paragraph"}>{ t("sections:section_about_part04") }</p>
        </div>
    )
}
