import { useTranslation } from 'react-i18next'

export default function TextcontentServices() {
    const [t] = useTranslation(["common"])

    return (
        <div className={"sectionTextContent"}>
            <h1 className={"textcontent--index--header"}>{ t("common:services") }</h1>
        </div>
    )
}
