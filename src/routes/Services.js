import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { I18nRenderListServices } from '../translations/i18n.render.list.services'

import ImgSetTwo from '../components/Image/ImgSetTwo'
import LineLang from "../components/lineLang";

export default function Services() {
    const [t] = useTranslation(["common"])
    const h1 = i18n.language === 'ru' ? 'textcontent--header1--rus' : 'textcontent--header1'

    return (
        <div className={"page"}>
           <h1 className={ h1 }>{ t("common:services") }</h1>

            <LineLang />

           <I18nRenderListServices showHeader={"false"} />
           <ImgSetTwo />
        </div>
    )
}
