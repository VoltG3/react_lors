import React from 'react'
import { StyledPageContainer as PageContainer } from './styles/StyledPageContainer'
import { StyledInlineParagraphWithButtonContainer as InlineParagraphWithButton } from './styles/styled.inline.paragraph.button'
import { Link } from 'react-router-dom'
import config from '../config'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { Images } from '../components/Images'
import { ButtonController } from '../components/Button/Button.controller'
import { LineLang } from '../components/Lines'
import { ListPricesWithReference, ListPricesWithoutReference } from "../components/Lists"

export default function Prices() {
    const [t] = useTranslation(["chapter_pages", "chapters"])
    const paragraph = i18n.language === 'ru' ? 'textContent--paragraph--rus' : 'textContent--paragraph'
    const h = i18n.language === 'ru' ? 'textContent--h1--rus' : 'textContent--h1'
    const semiHeader = i18n.language === 'ru' ? 'textContent--h2--rus' : 'textContent--h2'

    const URL_02 = config.external_url.URL_02
    const repeatSign = config.common.repeatSign

    return (
        <PageContainer>
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
            <div style={{ height: 'var(--size--padding40)' }} />
            <ListPricesWithoutReference />
            <Images variant={"office"} />
        </PageContainer>
    )
}
