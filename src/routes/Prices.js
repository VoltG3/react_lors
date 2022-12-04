import '../translations/i18n'
import { useTranslation } from 'react-i18next'
import { I18nRenderListPrices } from '../translations/i18n.render.list.prices'

import { image08 } from '../env'
import GetImg from '../components/GetImg'

import Get_BTN from '../materials/Get_BTN'

export default function Prices() {
    const [t] = useTranslation(["common", "sections"])

    return (
        <div className={"page"}>
            <h1>{ t("common:prices") }</h1>

            <span style={{ marginBottom: 'var(--margin--h1--bottom)'}}>
                <p className={"textcontent--paragraph"}>{ t("sections:section_prices_part01") }</p>
                <p className={"textcontent--paragraph"}>{ t("sections:section_prices_part02") }</p>

               <Get_BTN
                   text={ t("sections:section_prices_part03") }
                   btn={"routesToInfo"} />

               <Get_BTN
                   text={ t("sections:section_prices_part04") }
                   btn={"hrefLink02"} />
            </span>

            <I18nRenderListPrices variant={'LIST_PRICES:list_prices01'} showHeader={'firstHeader'} />
            <I18nRenderListPrices variant={'LIST_PRICES:list_prices02'} showHeader={'secondHeader'} />
            <GetImg img={ image08 } width={"1280"} height={"auto"} verticalMargin={"--margin--img--vertical"} />
        </div>
    )
}
