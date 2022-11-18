import { useTranslation } from 'react-i18next'

export default function TextcontentHome() {
    const [t] = useTranslation(["sections"])

    return (
        <div className={"box textcontent"}>
            <h1 className={"textcontent--index--header"}>{ t("sections:section_home_header") }</h1>

            <div>
                <p className={"textcontent--paragraph"}>{ t("sections:section_home_part01") }</p>
                <p className={"textcontent--paragraph"}>{ t("sections:section_home_part02") }</p>
                <p className={"textcontent--paragraph"}>{ t("sections:section_home_part03") }</p>
            </div>
        </div>
    )
}
