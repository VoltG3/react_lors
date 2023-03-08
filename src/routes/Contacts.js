import React, { lazy, Suspense } from 'react'
import { StyledPageContainer as Page } from './styles/styled.page'
import { StyledInlineParagraphContainer as InlineParagraph } from './styles/styled.inline.paragraph'
import { StyledInlineParagraphWithImageContainer as InlineParagraphWithImage } from "./styles/styled.inline.paragraph.image";
/*import { MediaDesktop, MediaMobile } from '../media'*/

import config from '../config'

import '../translations/i18n'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { ImageController } from '../components/Image/image.controller'

import TableSectionContacts from '../components/TableContacts/table.section.contacts'
import LineLang from '../components/line.lang'

import { ButtonController } from '../components/Button/Button.controller'

const GoogleMap = lazy(() => import('../components/GoogleMap'));

export default function Contacts() {
    const [t] = useTranslation(["common", "sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'

    const introHeader = config.common.introHeader
    const URL_01 = config.external_url.URL_01

    return (
        <>
            <Page style={{ paddingBottom: '0'}}>
                <h2 className={ h }>{ t("common:contacts") }</h2>

                <LineLang />
                <LineLang />

                <InlineParagraphWithImage>
                    <span>
                        <p style={{ color: 'var(--color--paragraph--highlight)'}} className={ paragraph }>{ t("sections:section_contacts_part01") }</p>
                        <p className={ paragraph }>{ t("sections:section_contacts_part02") }</p>

                        <a href={ `${URL_01}` } target={"_blank"} rel={"noopener noreferrer"}>
                           <ButtonController variant={"contacts"} />
                        </a>
                    </span>

                    <div className={"inlineParagraphWithImage"}>
                        <ImageController variant={"building"} />
                    </div>
                </InlineParagraphWithImage>

                <TableSectionContacts />
                <ImageController variant={"contacts"} />

                <InlineParagraph>
                    <p className={"textcontent--h3"}>{ introHeader }</p>
                    <p className={"textcontent--h3"}>{ t("sections:section_contacts_part03") }</p>
                    <p className={"textcontent--h3"}>{ t("sections:section_contacts_part04") }</p>
                </InlineParagraph>

            </Page>

            <Suspense fallback={<div>Loading...</div>}>
                <GoogleMap />
            </Suspense>
        </>
    )
}
