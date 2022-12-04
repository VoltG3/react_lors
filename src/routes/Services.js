import '../translations/i18n'
import { useTranslation } from 'react-i18next'
import { I18nRenderListServices } from '../translations/i18n.render.list.services'

import ImgSetTwo from '../components/ImgSetTwo'

export default function Services() {
    const [t] = useTranslation(["common"])

    return (
        <div className={"page"}>
           <h1>{ t("common:services") }</h1>

           <I18nRenderListServices showHeader={"false"} />
           <ImgSetTwo />
        </div>
    )
}
