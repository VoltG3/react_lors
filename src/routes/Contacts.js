import React, { lazy, Suspense } from 'react'
import {
    StyledPageContainer as PageContainer,
    StyledInlineParagraphContainer as InlineParagraph,
    StyledInlineParagraphWithImageContainer as InlineParagraphWithImage,
    ContactDesktopMedia,
    ContactMobileMedia,
    ContactTile,
    ContactImageTile
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
    const lang = i18n.language

    const introHeader = config.common.introHeader
    const URL_01 = config.external_url.URL_01
    const imgBuilding = config.images.URL_img10

    return (
        <>
            <PageContainer $lang={lang} style={{ paddingBottom: '0'}}>
                <h2>{ t("chapters:contacts") }</h2>

                <LineLang />

                <ContactDesktopMedia>
                    <ContactTile>
                        <p style={{ color: '#F31850', fontWeight: '600'}}>{ t("chapter_contacts.part_01") }</p>
                        <p>{ t("chapter_contacts.part_02") }</p>

                        <a href={ `${URL_01}` } target={"_blank"} rel={"noopener noreferrer"}>
                           <ButtonController variant={"contacts"} />
                        </a>
                    </ContactTile>

                    <ContactImageTile>
                        <img src={imgBuilding} alt="Building" />
                    </ContactImageTile>
                </ContactDesktopMedia>

                <ContactMobileMedia>
                    <InlineParagraphWithImage>
                        <span>
                            <p style={{ color: '#F31850'}}>{ t("chapter_contacts.part_01") }</p>
                            <p>{ t("chapter_contacts.part_02") }</p>

                            <a href={ `${URL_01}` } target={"_blank"} rel={"noopener noreferrer"}>
                               <ButtonController variant={"contacts"} />
                            </a>
                        </span>

                        <div className={"inlineParagraphWithImage"}>
                            <Images variant={"building"} />
                        </div>
                    </InlineParagraphWithImage>
                </ContactMobileMedia>

                <Hours />
                <Images variant={"contacts"} />

                <InlineParagraph>
                    <h3>{ introHeader }</h3>
                    <h3>{ t("chapter_contacts.part_05") }</h3>
                    <h3>{ t("chapter_contacts.part_06") }</h3>
                </InlineParagraph>

            </PageContainer>

            <Suspense fallback={<div>Loading...</div>}>
                <GoogleMap />
            </Suspense>
        </>
    )
}
