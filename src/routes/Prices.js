import React from 'react'

import { StyledPageContainer as Page } from './styles/styled.page'
import { StyledInlineParagraphWithButtonContainer as InlineParagraphWithButton } from './styles/styled.inline.paragraph.button'

import { Link } from 'react-router-dom'
import config from '../config'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

import { ImageController } from '../components/Image/image.controller'
import { ButtonController } from '../components/Button/Button.controller'
import LineLang from '../components/line.lang'
import {ListPricesWithReference} from "../components/TextContent/ListPricesWithReference";
import {ListPricesWithoutReference} from "../components/TextContent/ListPricesWithoutReference";

export default function Prices() {
    const [t] = useTranslation(["chapter_pages", "chapters"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'
    const semiHeader = i18n.language === 'ru' ? 'textcontent--h2--rus' : 'textcontent--h2'

    const URL_02 = config.external_url.URL_02
    const repeatSign = config.common.repeatSign

    return (
        <Page>
            <h2 className={ h }>{ t("chapters:prices") }</h2>

            <LineLang />

            <span style={{ paddingBottom: '30px' }}>
                <p className={ semiHeader }>{ t("chapter_prices.part_01") }</p>
                <p className={ paragraph }>{ t("chapter_prices.part_02") }</p>

                <InlineParagraphWithButton>
                    <div className={"inlineParagraphWithButton"}>
                        <p className={ paragraph }>{ t("chapter_prices.part_03") }</p>
                        <p className={ paragraph }>{ repeatSign }</p>
                    </div>

                    <div style={{ paddingBottom: '10px'}}><Link to={"/info"}><ButtonController variant={"info"} /></Link></div>
                </InlineParagraphWithButton>

                <InlineParagraphWithButton>
                    <div className={"inlineParagraphWithButton"}>
                        <p className={ paragraph }>{ t("chapter_prices.part_04") }</p>
                        <p className={ paragraph }>{ repeatSign }</p>
                    </div>

                    <div><a href={ `${URL_02}` } target="_blank" rel="noopener noreferrer"><ButtonController variant={"info"} /></a></div>
                </InlineParagraphWithButton>
            </span>

            <ListPricesWithReference />
            <ListPricesWithoutReference />
            <ImageController variant={"office"} />
        </Page>
    )
}
