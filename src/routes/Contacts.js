import React, { lazy, Suspense } from 'react'
import { StyledPageContainer as Page } from './styles/styled.page'
import { StyledInlineParagraphContainer as InlineParagraph } from './styles/styled.inline.paragraph'
import { StyledInlineParagraphWithImageContainer as InlineParagraphWithImage } from './styles/styled.inline.paragraph.image'

import config from '../config'

import '../translations/i18n'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { ImageController } from '../components/Image/image.controller'

import OpeningHoursController from '../components/OpeningHours/OpeningHours.controller'
import LineLang from '../components/line.lang'

import { ButtonController } from '../components/Button/Button.controller'
import {ShowData} from "../JSON/showData";

const GoogleMap = lazy(() => import('../components/GoogleMap'));

export default function Contacts() {
    const [t] = useTranslation(["chapter_pages", "chapters"])
    const jsonShowData = ShowData()
    const paragraph = i18n.language === 'ru' ? 'textContent--paragraph--rus' : 'textContent--paragraph'
    const h = i18n.language === 'ru' ? 'textContent--h1--rus' : 'textContent--h1'

    const introHeader = config.common.introHeader
    const URL_01 = config.external_url.URL_01

    const ShowDataWithtReference = jsonShowData[0]
    const ShowDataWithoutReference = jsonShowData[1]
    const IfBothFalseContent = jsonShowData[2]

    function isBothFalse() {
        if(ShowDataWithtReference === false && ShowDataWithoutReference === false) {
            return "false"
        } else {
            return "true"
        }
    }

    const ShowDataWithoutReferenceContent = <p style={{ color: 'var(--color--paragraph--highlight)'}} className={ paragraph }>{ t("chapter_contacts.part_03") }</p>
    const ShowDataBothFalseContent = <p style={{ color: 'var(--color--paragraph--highlight)'}} className={ paragraph }>{ t("chapter_contacts.part_04") + IfBothFalseContent }</p>

    return (
        <>
            <Page style={{ paddingBottom: '0'}}>
                <h2 className={ h }>{ t("chapters:contacts") }</h2>

                <LineLang />

                <InlineParagraphWithImage>
                    <span>
                        <p style={{ color: 'var(--color--paragraph--highlight)'}} className={ paragraph }>{ t("chapter_contacts.part_01") }</p>
                        <p className={ paragraph }>{ t("chapter_contacts.part_02") }</p>

                        {
                            isBothFalse() === "false"
                                ? ShowDataBothFalseContent
                                : ShowDataWithoutReference === false ? ShowDataWithoutReferenceContent : ''
                        }

                        <a href={ `${URL_01}` } target={"_blank"} rel={"noopener noreferrer"}>
                           <ButtonController variant={"contacts"} />
                        </a>

                    </span>

                    <div className={"inlineParagraphWithImage"}>
                        <ImageController variant={"building"} />
                    </div>
                </InlineParagraphWithImage>

                <OpeningHoursController />
                <ImageController variant={"contacts"} />

                <InlineParagraph>
                    <p className={"textContent--h3"}>{ introHeader }</p>
                    <p className={"textContent--h3"}>{ t("chapter_contacts.part_05") }</p>
                    <p className={"textContent--h3"}>{ t("chapter_contacts.part_06") }</p>
                </InlineParagraph>

            </Page>

            <Suspense fallback={<div>Loading...</div>}>
                <GoogleMap />
            </Suspense>
        </>
    )
}
