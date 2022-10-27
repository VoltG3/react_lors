import { image00, image08 } from '../env'
import STDIMG from '../components/IMG'
import { useTranslation } from 'react-i18next'
import TextcontentPrices from '../components/Textcontent.Prices'
import {I18nRenderListPrices} from "../translations/i18n.render.list.prices";
import {t} from "i18next";


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

            <STDIMG img={ image08 } imgPreview={ image00 } variant={"square"} width={"1280"} height={"auto"} verticalMargin={"--image--vertical--margin"} />
        </div>
    )
}
