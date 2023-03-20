import React from 'react'
import { StyledPageContainer as Page } from './styles/styled.page'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { ListServices } from '../components/Lists/ListServices'
import { ImageController } from '../components/Image/image.controller'

import LineLang from '../components/line.lang'

export default function Services() {
    const [t] = useTranslation(["chapters"])
    const h = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'

    return (
        <Page>
           <h2 className={ h }>{ t("chapters:services") }</h2>

            <LineLang />

           <ListServices />
           <ImageController variant={"equipment"} />
        </Page>
    )
}
