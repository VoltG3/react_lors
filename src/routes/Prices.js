import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { I18nRenderListPrices } from '../translations/i18n.render.list.prices'

import {image08, Link02} from '../env'
import Img from '../components/Image/Img'

import { Link } from 'react-router-dom'
import BTNSmall from '../components/Button/BTNSmall'
import LineLang from "../components/line.lang";



export default function Prices() {
    const [t] = useTranslation(["common", "sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--header1--rus' : 'textcontent--header1'
    const semiheader = i18n.language === 'ru' ? 'textcontent--semiheader--rus' : 'textcontent--semiheader'

    return (
        <div className={"page"}>
            <h1 className={ h1 }>{ t("common:prices") }</h1>

            <LineLang />

            <span style={{ marginBottom: 'var(--margin--h1--bottom)'}}>
                <p className={ semiheader }>{ t("sections:section_prices_part01") }</p>
                <p className={ paragraph }>{ t("sections:section_prices_part02") }</p>

                <div className={"BTNSmallComponent"}>
                    <p className={ paragraph }>{ t("sections:section_prices_part03") }</p>

                    <Link to={"/info"}>
                        <BTNSmall />
                    </Link>
                </div>

                <div className={"BTNSmallComponent"}>
                    <p className={ paragraph }>{ t("sections:section_prices_part04") }</p>

                    <a href={ Link02 } target="_blank" rel="noopener noreferrer">
                        <BTNSmall />
                    </a>
                </div>
            </span>

            <I18nRenderListPrices variant={'LIST_PRICES:list_prices01'} headerOf={'listWithoutReference'} />
            <div style={{ width: '100%', height: '1px', paddingBottom: '30px'}}></div>
            <I18nRenderListPrices variant={'LIST_PRICES:list_prices02'} headerOf={'listWithReference'} />
            <Img img={ image08 } width={"1280"} height={"auto"} verticalMargin={"--margin--img--vertical"} />
        </div>
    )
}
