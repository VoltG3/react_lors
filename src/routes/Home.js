import React from 'react'
import { StyledPageContainer as PageContainer } from '../styles/styles.pages'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { Images } from '../components/Images'
import { LineLang } from '../components/Lines'
import Tiles from '../components/Tiles'

export default function Home() {
    const [t] = useTranslation(["chapter_pages"])
    const lang = i18n.language

    return (
        <PageContainer $lang={lang}>
            <h1>{ t("chapter_home.part_01") }</h1>

            <LineLang />

            <span>
                 <p>{ t("chapter_home.part_02") }</p>
                 <p>{ t("chapter_home.part_03") }</p>
                 <p>{ t("chapter_home.part_04") }</p>
            </span>

            <Images variant={"collective4"} />

            <Tiles />
        </PageContainer>
    )
}
