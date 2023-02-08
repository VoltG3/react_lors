import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { PageContainer as StyledPageContainer } from './Styles'

import { LISTPrices } from '../components/TextContent/Lists/LIST.prices'

import { Link02 } from '../env'
import { Link } from 'react-router-dom'

import BTNSmall from '../components/Button/temp/BTNSmall'
import LineLang from '../components/line.lang'
import ImgOffice from '../components/Image/IMG.office'
import BTNSecondary from "../components/Button/BTN.secondary";

export default function Prices() {
    const [t] = useTranslation(["common", "sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'
    const semiheader = i18n.language === 'ru' ? 'textcontent--h2--rus' : 'textcontent--h2'

    return (
        <StyledPageContainer>
            <h2 className={ h1 }>{ t("common:prices") }</h2>

            <LineLang />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                paddingBottom: 'var(--size--padding30)',
                width: '100%',
                /*border: 'solid 1px red'*/ }}>

                <span>
                    <p className={ semiheader }>{ t("sections:section_prices_part01") }</p>
                    <p className={ paragraph }>{ t("sections:section_prices_part02") }</p>

                    <span className={"inlineSpanWithBtn"}>
                        <div><p className={ paragraph }>{ t("sections:section_prices_part03") }</p></div>
                        <div><Link to={"/info"}><BTNSecondary /></Link></div>
                    </span>

                    <span className={"inlineSpanWithBtn"}>
                        <div><p className={ paragraph }>{ t("sections:section_prices_part04") }</p></div>
                        <div><a href={ Link02 } target="_blank" rel="noopener noreferrer"><BTNSecondary /></a></div>
                    </span>
                </span>
            </div>


            <LISTPrices variant={'LIST_PRICES:list_prices01'} isReference={ true } />
            <div style={{ paddingBottom: 'var(--size--padding30)'}} />
            <LISTPrices variant={'LIST_PRICES:list_prices02'} isReference={ false } />

            <ImgOffice />
        </StyledPageContainer>
    )
}
