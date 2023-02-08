import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { PageContainer as StyledPageContainer } from './Styles'

import { LISTInformation } from '../components/TextContent/Lists/LIST.information'

import {Link03} from '../env'
import LineLang from "../components/line.lang";
import {Link} from "react-router-dom";
import BTNSmall from "../components/Button/temp/BTNSmall";

import ImgCollective3Desktop from "../components/Image/IMG.collective3.desktop";
import BTNSecondary from "../components/Button/BTN.secondary";
import ImgCollective3Mobile from "../components/Image/IMG.collective3.mobile";

export default function Info() {
    const [t] = useTranslation(["common","sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'
    const semiheader = i18n.language === 'ru' ? 'textcontent--h2--rus' : 'textcontent--h2'

    return (
        <StyledPageContainer>
            <h2 className={ h1 }>{ t("common:info") }</h2>

            <LineLang />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                paddingBottom: 'var(--size--padding30)',
                width: '100%',
                /*border: 'solid 1px red'*/ }}>

                <span>
                    <p style={{ paddingBottom: '0' }} className={ semiheader }>{ t("sections:section_info_part01") }</p>

                    <ul>
                        <li>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div><p style={{ marginRight: '10px'}} className={ paragraph }>{ t("sections:section_info_list01_part01") } - </p></div>
                                <Link to={"/contacts"}><BTNSecondary /></Link>
                            </div>
                        </li>
                        <li><p className={ paragraph }>{ t("sections:section_info_list01_part02") }</p></li>
                        <li><p className={ paragraph }>{ t("sections:section_info_list01_part03") }</p></li>
                        <li><p className={ paragraph }>{ t("sections:section_info_list01_part04") }</p></li>
                        <li><p className={ paragraph }>{ t("sections:section_info_list01_part05") }</p></li>
                    </ul>

                    <p style={{ fontWeight: '600' }} className={ paragraph }>{ t("sections:section_info_part02") }</p>

                    <div className={"inlineSpanWithBtn"}>
                        <div><p className={ paragraph }>{ t("sections:section_info_part03") }</p></div>
                        <div><a href={ Link03 } target="_blank" rel="noopener noreferrer"><BTNSecondary /></a></div>
                    </div>

                    <ul style={{ paddingTop: '0'}}>
                        <li><p className={ paragraph }>{ t("sections:section_info_list02_part01") }</p></li>
                        <li><p className={ paragraph }>{ t("sections:section_info_list02_part02") }</p></li>
                        <li><p className={ paragraph }>{ t("sections:section_info_list02_part03") }</p></li>
                    </ul>
                </span>
            </div>

            <ImgCollective3Desktop />
            <ImgCollective3Mobile />
            <LISTInformation showHeader={"true"} />
        </StyledPageContainer>
    )
}
