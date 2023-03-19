import React from 'react'
import { StyledPageContainer as Page } from './styles/styled.page'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { ImageController } from '../components/Image/image.controller'

import LineLang from '../components/line.lang'
import Tiles from '../components/Tiles/tiles'

export default function Home() {
    const [t] = useTranslation(["chapter_pages"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'

    return (
        <Page>
            <h1 className={ h }>{ t("chapter_home.part_01") }</h1>

            <LineLang />

            <span>
                 <p className={ paragraph }>{ t("chapter_home.part_02") }</p>
                 <p className={ paragraph }>{ t("chapter_home.part_03") }</p>
                 <p className={ paragraph }>{ t("chapter_home.part_04") }</p>
            </span>

            <ImageController variant={"collective4"} />
            <Tiles />
        </Page>
    )
}
