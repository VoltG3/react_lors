import { useTranslation } from 'react-i18next'
import BtnVariant01 from './BTN_variant01'

export default function TextcontentContactsFirst() {
    const [t] = useTranslation(["common", "sections"])

    return (
        <div className={"sectionTextContent"}>
            <h1 className={"textcontent--section--header"}>{t("common:contacts")}</h1>

            <p className={"textcontent--paragraph--bold"}>{t("sections:section_contacts_part01")}</p>

            <p className={"textcontent--paragraph--header"}>{t("sections:section_contacts_part02")}</p>
            <BtnVariant01 />
        </div>
    )
}
