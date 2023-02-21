import React from 'react'

import { StyledPageContainer as Page } from './styles/styled.page'
import { StyledInlineParagraphWithButtonContainer as InlineParagraphWithButton } from './styles/styled.inline.paragraph.button'

import { Link } from 'react-router-dom'
import config from '../config'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { LISTPrices } from '../components/TextContent/Lists/LIST.prices'

import { ImageController } from '../components/Image/image.controller'
import { ButtonController } from '../components/Button/Button.controller'
import LineLang from '../components/line.lang'

export default function Prices() {
    const [t] = useTranslation(["common", "sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'
    const semiHeader = i18n.language === 'ru' ? 'textcontent--h2--rus' : 'textcontent--h2'

    const URL_02 = config.external_url.URL_02
    const repeatSign = config.common.repeatSign

    return (
        <Page>
            <h2 className={ h }>{ t("common:prices") }</h2>

            <LineLang />

            <span style={{ paddingBottom: '30px' }}>
                <p className={ semiHeader }>{ t("sections:section_prices_part01") }</p>
                <p className={ paragraph }>{ t("sections:section_prices_part02") }</p>

                <InlineParagraphWithButton>
                    <div className={"inlineParagraphWithButton"}>
                        <p className={ paragraph }>{ t("sections:section_prices_part03") }</p>
                        <p className={ paragraph }>{ repeatSign }</p>
                    </div>

                    <div style={{ paddingBottom: '10px'}}><Link to={"/info"}><ButtonController variant={"info"} /></Link></div>
                </InlineParagraphWithButton>

                <InlineParagraphWithButton>
                    <div className={"inlineParagraphWithButton"}>
                        <p className={ paragraph }>{ t("sections:section_prices_part04") }</p>
                        <p className={ paragraph }>{ repeatSign }</p>
                    </div>

                    <div><a href={ `${URL_02}` } target="_blank" rel="noopener noreferrer"><ButtonController variant={"info"} /></a></div>
                </InlineParagraphWithButton>
            </span>

            <LISTPrices variant={'LIST_PRICES:list_prices01'} isReference={ true } />
            <div style={{ paddingBottom: 'var(--size--padding30)'}} />
            <LISTPrices variant={'LIST_PRICES:list_prices02'} isReference={ false } />
            <ImageController variant={"office"} />
        </Page>
    )
}
