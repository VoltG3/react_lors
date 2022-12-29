import '../translations/i18n'
import { useTranslation } from 'react-i18next'
import { I18nRenderListServices } from '../translations/i18n.render.list.services'

import ImgSetTwo from '../components/ImgSetTwo'
import ImgSetTre from '../components/ImgSetTre'

export default function About() {
    const [t] = useTranslation(["common", "sections", "temporary"])

    return (
        <div className={"page"}>
            <h1>{ t("common:about") }</h1>
            <h1>{ t("temporary:tempHeader.tempLogo.tempPart") }</h1>

            <span>
                <p className={"textcontent--paragraph"}>{ t("sections:section_about_part01") }</p>
                <p className={"textcontent--paragraph"}>{ t("sections:section_about_part02") }</p>
                <p className={"textcontent--paragraph"}>{ t("sections:section_about_part03") }</p>
                <p className={"textcontent--paragraph"}>{ t("sections:section_about_part04") }</p>
            </span>

            <ImgSetTre />
            <I18nRenderListServices showHeader={"true"} />
            <ImgSetTwo />
        </div>
    )
}
