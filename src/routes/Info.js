import React from 'react'
import { StyledPageContainer as Page } from './styles/styled.page'
import { StyledInlineParagraphWithButtonContainer as InlineParagraphWithButton } from './styles/styled.inline.paragraph.button'

import config from '../config'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { LISTInformation } from '../components/TextContent/Lists/LIST.information'
import { ImageController } from '../components/Image/image.controller'

import LineLang from '../components/line.lang'
import { ButtonController } from '../components/Button/Button.controller'

export default function Info() {
    const [t] = useTranslation(["common","sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'
    const semiHeader = i18n.language === 'ru' ? 'textcontent--h2--rus' : 'textcontent--h2'

    const URL_03 = config.external_url.URL_03
    const repeatSign = config.common.repeatSign

    return (
        <Page>
            <h2 className={ h }>{ t("common:info") }</h2>

            <LineLang />

            <span>
                <p style={{ paddingBottom: '0' }} className={ semiHeader }>{ t("sections:section_info_part01") }</p>

                <ul>
                    <li>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <div><p style={{ marginRight: '10px'}} className={ paragraph }>{ t("sections:section_info_list01_part01") }</p></div>
                            <Link to={"/contacts"}><ButtonController variant={"info"} /></Link>
                        </div>
                    </li>
                    <li><p className={ paragraph }>{ t("sections:section_info_list01_part02") }</p></li>
                    <li><p className={ paragraph }>{ t("sections:section_info_list01_part03") }</p></li>
                    <li><p className={ paragraph }>{ t("sections:section_info_list01_part04") }</p></li>
                    <li><p className={ paragraph }>{ t("sections:section_info_list01_part05") }</p></li>
                </ul>

                <p style={{ fontWeight: '600' }} className={ paragraph }>{ t("sections:section_info_part02") }</p>

                <InlineParagraphWithButton>
                    <div className={"inlineParagraphWithButton"}>
                        <p className={ paragraph }>{ t("sections:section_info_part03") }</p>
                         <p className={ paragraph }>{ repeatSign }</p>
                    </div>

                    <div><a href={ `${URL_03}` } target="_blank" rel="noopener noreferrer"><ButtonController variant={"info"} /></a></div>
                </InlineParagraphWithButton>

                <ul style={{ paddingTop: '0'}}>
                    <li><p className={ paragraph }>{ t("sections:section_info_list02_part01") }</p></li>
                    <li><p className={ paragraph }>{ t("sections:section_info_list02_part02") }</p></li>
                    <li><p className={ paragraph }>{ t("sections:section_info_list02_part03") }</p></li>
                </ul>
            </span>

            <ImageController variant={"collective3"} />
            <LISTInformation showHeader={"true"} />
        </Page>
    )
}
