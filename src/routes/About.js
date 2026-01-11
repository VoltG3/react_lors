import React from 'react'
import { StyledPageContainer as PageContainer } from '../styles/styles.pages'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { ListServices } from '../components/Lists'
import { Images } from '../components/Images'
import { LineLang } from '../components/Lines'

export default function About() {
    const [t] = useTranslation(["chapter_pages", "chapters"])
    const lang = i18n.language

    return (
        <PageContainer $lang={lang}>
            <h2>{ t("chapters:about") }</h2>

            <LineLang />

            <span>
                <p>{ t("chapter_about.part_01") }</p>
                <p>{ t("chapter_about.part_02") }</p>
                <p>{ t("chapter_about.part_03") }</p>
                <p>{ t("chapter_about.part_04") }</p>
                <p>{ t("chapter_about.part_05") }</p>
            </span>

            <Images variant={"eachPerson"} />
            <ListServices  />
            <Images variant={"equipment"} />
        </PageContainer>
    )
}
