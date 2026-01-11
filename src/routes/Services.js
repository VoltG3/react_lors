import React from 'react'
import { StyledPageContainer as PageContainer } from '../styles/styles.pages'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { ListServices } from '../components/Lists'
import { Images } from '../components/Images'

import { LineLang } from '../components/Lines'

export default function Services() {
    const [t] = useTranslation(["chapters"])
    const h = i18n.language === 'ru' ? 'textContent--h1--rus' : 'textContent--h1'

    return (
        <PageContainer>
           <h2 className={ h }>{ t("chapters:services") }</h2>

            <LineLang />

           <ListServices />
           <Images variant={"equipment"} />
        </PageContainer>
    )
}
