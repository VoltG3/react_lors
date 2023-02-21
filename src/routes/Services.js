import React from 'react'
import { StyledPageContainer as Page } from './styles/styled.page'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { LISTServices } from '../components/TextContent/Lists/LIST.services'
import { ImageController } from '../components/Image/image.controller'

import LineLang from '../components/line.lang'

export default function Services() {
    const [t] = useTranslation(["common"])
    const h = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'

    return (
        <Page>
           <h2 className={ h }>{ t("common:services") }</h2>

            <LineLang />

           <LISTServices showHeader={"true"} />
           <ImageController variant={"equipment"} />
        </Page>
    )
}
