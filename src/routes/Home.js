import React from 'react'
import { StyledPageContainer as PageContainer } from './styles/StyledPageContainer'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { Images } from '../components/Images'
import { LineLang } from '../components/Lines'
import Tiles from '../components/Tiles'

export default function Home() {
    const [t] = useTranslation(["chapter_pages"])
    const paragraph = i18n.language === 'ru' ? 'textContent--paragraph--rus' : 'textContent--paragraph'
    const h = i18n.language === 'ru' ? 'textContent--h1--rus' : 'textContent--h1'

    return (
        <PageContainer>
            <h1 className={ h }>{ t("chapter_home.part_01") }</h1>

            <LineLang />

            <span>
                 <p className={ paragraph }>{ t("chapter_home.part_02") }</p>
                 <p className={ paragraph }>{ t("chapter_home.part_03") }</p>
                 <p className={ paragraph }>{ t("chapter_home.part_04") }</p>
            </span>

            <Images variant={"collective4"} />

            <Tiles />
        </PageContainer>
    )
}
