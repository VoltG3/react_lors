import React from 'react'
import { StyledPageContainer as PageContainer } from './styles/StyledPageContainer'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { ListServices } from '../components/Lists/Lists'
import { ImageController } from '../components/Image/image.controller'
import LineLang from '../components/line.lang'

export default function About() {
    const [t] = useTranslation(["chapter_pages", "chapters"])
    const paragraph = i18n.language === 'ru' ? 'textContent--paragraph--rus' : 'textContent--paragraph'
    const h = i18n.language === 'ru' ? 'textContent--h1--rus' : 'textContent--h1'

    return (
        <PageContainer>
            <h2 className={ h }>{ t("chapters:about") }</h2>

            <LineLang />

            <span>
                <p className={ paragraph }>{ t("chapter_about.part_01") }</p>
                <p className={ paragraph }>{ t("chapter_about.part_02") }</p>
                <p className={ paragraph }>{ t("chapter_about.part_03") }</p>
                <p className={ paragraph }>{ t("chapter_about.part_04") }</p>
                <p className={ paragraph }>{ t("chapter_about.part_05") }</p>
            </span>

            <ImageController variant={"eachPerson"} />
            <ListServices  />
            <ImageController variant={"equipment"} />
        </PageContainer>
    )
}