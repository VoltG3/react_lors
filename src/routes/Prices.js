import { image08 } from '../env'
import GetImg from '../components/GetImg'

import { useTranslation } from 'react-i18next'
import { I18nRenderListPrices } from '../translations/i18n.render.list.prices'

import TextcontentPrices from '../components/Textcontent.Prices'

export default function Prices() {
    const [t] = useTranslation("common")

    return (
        <div className={"page"}>
            <TextcontentPrices />

            <div style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: '40px',
                marginTop: '60px',
                background: 'var(--color--primary)' }}>
                <p style={{marginLeft: '30px'}} className={"textcontent--list--header"}>{ t("common:list_header_02")}</p>
            </div>
            <I18nRenderListPrices variant={'LIST_PRICES:list_prices01'} header={'first_header'}/>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: '40px',
                marginTop: '60px',
                background: 'var(--color--primary)' }}>
                <p style={{marginLeft: '30px'}} className={"textcontent--list--header"}>{ t("common:list_header_03")}</p>
            </div>
            <I18nRenderListPrices variant={'LIST_PRICES:list_prices02'} />

            <GetImg img={ image08 } width={"1280"} height={"auto"} verticalMargin={"--margin--img"} />
        </div>
    )
}
