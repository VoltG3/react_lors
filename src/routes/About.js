import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { I18nRenderListServices } from '../translations/i18n.render.list.services'

import ImgSetTwo from '../components/Image/ImgSetTwo'
import ImgSetTre from '../components/Image/ImgSetTre'
import LineLang from "../components/line.lang";

export default function About() {
    const [t] = useTranslation(["common", "sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--header1--rus' : 'textcontent--header1'

    return (
        <div className={"page"}>
            <h1 className={ h1 }>{ t("common:about") }</h1>

            <LineLang />

            <span>
                <p className={ paragraph }>{ t("sections:section_about_part01") }</p>
                <p className={ paragraph }>{ t("sections:section_about_part02") }</p>
                <p className={ paragraph }>{ t("sections:section_about_part03") }</p>
                <p className={ paragraph }>{ t("sections:section_about_part04") }</p>
            </span>

            <ImgSetTre />
            <I18nRenderListServices showHeader={"true"} />
            <ImgSetTwo />
        </div>
    )
}
