import React from 'react'
import { StyledPageContainer as Page } from './styles/styled.page'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { LISTServices } from '../components/TextContent/Lists/LIST.services'
import { ImageController } from '../components/Image/image.controller'

import LineLang from '../components/line.lang'

export default function About() {
    const [t] = useTranslation(["common", "sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'

    return (
        <Page>
            <h2 className={ h }>{ t("common:about") }</h2>

            <LineLang />

            <span>
                <p className={ paragraph }>{ t("sections:section_about_part01") }</p>
                <p className={ paragraph }>{ t("sections:section_about_part02") }</p>
                <p className={ paragraph }>{ t("sections:section_about_part03") }</p>
                <p className={ paragraph }>{ t("sections:section_about_part04") }</p>
            </span>

            <ImageController variant={"eachPerson"} />
            <LISTServices showHeader={"true"} />
            <ImageController variant={"equipment"} />
        </Page>
    )
}
