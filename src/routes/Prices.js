import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { PageContainer as StyledPageContainer } from './Styles'

import { LISTPrices } from '../components/TextContent/Lists/LIST.prices'

import { Link02 } from '../env'
import { Link } from 'react-router-dom'

import BTNSmall from '../components/Button/BTNSmall'
import LineLang from '../components/line.lang'
import ImgOffice from '../components/Image/IMG.office'

export default function Prices() {
    const [t] = useTranslation(["common", "sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--header1--rus' : 'textcontent--header1'
    const semiheader = i18n.language === 'ru' ? 'textcontent--semiheader--rus' : 'textcontent--semiheader'

    return (
        <StyledPageContainer>
            <h1 className={ h1 }>{ t("common:prices") }</h1>

            <LineLang />

            <span style={{ marginBottom: 'var(--margin--h1--bottom)', border: 'solid 1px red'}}>
                <p className={ semiheader }>{ t("sections:section_prices_part01") }</p>
                <p className={ paragraph }>{ t("sections:section_prices_part02") }</p>

                <div className={"BTNSmallComponent"}>
                    <p className={ paragraph }>{ t("sections:section_prices_part03") }</p>

                    <Link to={"/info"}><BTNSmall /></Link>
                </div>

                <div className={"BTNSmallComponent"}>
                    <p className={ paragraph }>{ t("sections:section_prices_part04") }</p>
                    <a href={ Link02 } target="_blank" rel="noopener noreferrer"><BTNSmall /></a>
                </div>
            </span>

            <LISTPrices variant={'LIST_PRICES:list_prices01'} isReference={ true } />
            <div style={{ paddingBottom: 'var(--size--padding30)'}} />
            <LISTPrices variant={'LIST_PRICES:list_prices02'} isReference={ false } />

            <ImgOffice />
        </StyledPageContainer>
    )
}
