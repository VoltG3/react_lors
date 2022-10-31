import '../translations/i18n'

import { image08 } from '../env'
import GetImg from '../components/GetImg'

import { I18nRenderListPrices } from '../translations/i18n.render.list.prices'

import TextcontentPrices from '../components/Textcontent.Prices'

export default function Prices() {

    return (
        <div className={"page"}>
            <TextcontentPrices />
            <I18nRenderListPrices variant={'LIST_PRICES:list_prices01'} showHeader={'firstHeader'} />
            <I18nRenderListPrices variant={'LIST_PRICES:list_prices02'} showHeader={'secondHeader'} />
            <GetImg img={ image08 } width={"1280"} height={"auto"} verticalMargin={"--margin--img"} />
        </div>
    )
}
