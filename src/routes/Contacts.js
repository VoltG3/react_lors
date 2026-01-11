import React, { lazy, Suspense } from 'react'
import {
    StyledPageContainer as PageContainer,
    StyledInlineParagraphContainer as InlineParagraph,
    StyledInlineParagraphWithImageContainer as InlineParagraphWithImage
} from '../styles/styles.pages'
import config from '../config'
import '../translations/i18n'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { Images } from '../components/Images'
import Hours from '../components/Hours'
import { LineLang } from '../components/Lines'
import { ButtonController } from '../components/Button'

const GoogleMap = lazy(() => import('../components/./Map'));

export default function Contacts() {
    const [t] = useTranslation(["chapter_pages", "chapters"])
    const paragraph = i18n.language === 'ru' ? 'textContent--paragraph--rus' : 'textContent--paragraph'
    const h = i18n.language === 'ru' ? 'textContent--h1--rus' : 'textContent--h1'

    const introHeader = config.common.introHeader
    const URL_01 = config.external_url.URL_01

    return (
        <>
            <PageContainer style={{ paddingBottom: '0'}}>
                <h2 className={ h }>{ t("chapters:contacts") }</h2>

                <LineLang />

                <InlineParagraphWithImage>
                    <span>
                        <p style={{ color: 'var(--color--paragraph--highlight)'}} className={ paragraph }>{ t("chapter_contacts.part_01") }</p>
                        <p className={ paragraph }>{ t("chapter_contacts.part_02") }</p>

                        <a href={ `${URL_01}` } target={"_blank"} rel={"noopener noreferrer"}>
                           <ButtonController variant={"contacts"} />
                        </a>

                    </span>

                    <div className={"inlineParagraphWithImage"}>
                        <Images variant={"building"} />
                    </div>
                </InlineParagraphWithImage>

                <Hours />
                <Images variant={"contacts"} />

                <InlineParagraph>
                    <p className={"textContent--h3"}>{ introHeader }</p>
                    <p className={"textContent--h3"}>{ t("chapter_contacts.part_05") }</p>
                    <p className={"textContent--h3"}>{ t("chapter_contacts.part_06") }</p>
                </InlineParagraph>

            </PageContainer>

            <Suspense fallback={<div>Loading...</div>}>
                <GoogleMap />
            </Suspense>
        </>
    )
}
