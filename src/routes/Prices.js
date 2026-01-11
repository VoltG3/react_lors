import React from 'react'
import { StyledPageContainer as PageContainer, StyledInlineParagraphWithButtonContainer as InlineParagraphWithButton } from '../styles/styles.pages'
import { Link } from 'react-router-dom'
import config from '../config'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { Images } from '../components/Images'
import { ButtonController } from '../components/Button'
import { LineLang } from '../components/Lines'
import { ListPricesWithReference, ListPricesWithoutReference } from "../components/Lists"

export default function Prices() {
    const [t] = useTranslation(["chapter_pages", "chapters"])
    const lang = i18n.language

    const URL_02 = config.external_url.URL_02
    const repeatSign = config.common.repeatSign

    return (
        <PageContainer $lang={lang}>
            <h2>{ t("chapters:prices") }</h2>

            <LineLang />

            <span style={{ paddingBottom: '30px' }}>
                <p style={{ textTransform: 'uppercase', fontWeight: lang === 'ru' ? '400' : '500' }}>{ t("chapter_prices.part_01") }</p>
                <p>{ t("chapter_prices.part_02") }</p>

                <InlineParagraphWithButton>
                    <div className={"inlineParagraphWithButton"}>
                        <p>{ t("chapter_prices.part_03") }</p>
                        <p>{ repeatSign }</p>
                    </div>

                    <div style={{ paddingBottom: '10px'}}><Link to={"/info"}><ButtonController variant={"info"} /></Link></div>
                </InlineParagraphWithButton>

                <InlineParagraphWithButton>
                    <div className={"inlineParagraphWithButton"}>
                        <p>{ t("chapter_prices.part_04") }</p>
                        <p>{ repeatSign }</p>
                    </div>

                    <div><a href={ `${URL_02}` } target="_blank" rel="noopener noreferrer"><ButtonController variant={"info"} /></a></div>
                </InlineParagraphWithButton>
            </span>

            <ListPricesWithReference />
            <div style={{ height: '40px' }} />
            <ListPricesWithoutReference />
            <Images variant={"office"} />
        </PageContainer>
    )
}
