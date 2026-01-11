import React from 'react'
import { StyledPageContainer as PageContainer, StyledInlineParagraphWithButtonContainer as InlineParagraphWithButton } from '../styles/styles.pages'
import config from '../config'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Images } from '../components/Images'
import { LineLang } from '../components/Lines'
import { ButtonController } from '../components/Button'
import { ListInformation } from '../components/Lists'

export default function Info() {
    const [t] = useTranslation(["chapter_pages", "chapters"])
    const paragraph = i18n.language === 'ru' ? 'textContent--paragraph--rus' : 'textContent--paragraph'
    const h = i18n.language === 'ru' ? 'textContent--h1--rus' : 'textContent--h1'
    const semiHeader = i18n.language === 'ru' ? 'textContent--h2--rus' : 'textContent--h2'

    const URL_03 = config.external_url.URL_03
    const repeatSign = config.common.repeatSign

    const list_01 = "chapter_info.info_list_01."
    const text = "chapter_info."
    const list_02 = "chapter_info.info_list_02."

    return (
        <PageContainer>
            <h2 className={ h }>{ t("chapters:info") }</h2>

            <LineLang />

            <span>
                <p style={{ paddingBottom: '0' }} className={ semiHeader }>{ t( list_01 + "part_01") }</p>

                <ul>
                    <li>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <div><p style={{ marginRight: '10px'}} className={ paragraph }>{ t(list_01 + "part_02") }</p></div>
                            <Link to={"/contacts"}><ButtonController variant={"info"} /></Link>
                        </div>
                    </li>
                    <li><p className={ paragraph }>{ t(list_01 + "part_03") }</p></li>
                    <li><p className={ paragraph }>{ t(list_01 + "part_04") }</p></li>
                    <li><p className={ paragraph }>{ t(list_01 + "part_05") }</p></li>
                    <li><p className={ paragraph }>{ t(list_01 + "part_06") }</p></li>
                </ul>

                <p style={{ fontWeight: '600' }} className={ paragraph }>{ t( text + "info_part_01") }</p>

                <InlineParagraphWithButton>
                    <div className={"inlineParagraphWithButton"}>
                        <p className={ paragraph }>{ t(list_02 + "part_01") }</p>
                         <p className={ paragraph }>{ repeatSign }</p>
                    </div>

                    <div><a href={ `${URL_03}` } target="_blank" rel="noopener noreferrer"><ButtonController variant={"info"} /></a></div>
                </InlineParagraphWithButton>

                <ul style={{ paddingTop: '0'}}>
                    <li><p className={ paragraph }>{ t(list_02 + "part_02") }</p></li>
                    <li><p className={ paragraph }>{ t(list_02 + "part_03") }</p></li>
                    <li><p className={ paragraph }>{ t(list_02 + "part_04") }</p></li>
                </ul>
            </span>
            <Images variant={"collective3"} />

            <ListInformation />
        </PageContainer>
    )
}
