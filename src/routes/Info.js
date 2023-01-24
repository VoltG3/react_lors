import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { PageContainer as StyledPageContainer } from './Styles'

import { LISTInformation } from '../components/TextContent/Lists/LIST.information'

import {Link03} from '../env'
import LineLang from "../components/line.lang";
import {Link} from "react-router-dom";
import BTNSmall from "../components/Button/BTNSmall";
import ImgCollective3 from "../components/Image/IMG.collective3";

export default function Info() {
    const [t] = useTranslation(["common","sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--header1--rus' : 'textcontent--header1'
    const semiheader = i18n.language === 'ru' ? 'textcontent--semiheader--rus' : 'textcontent--semiheader'

    return (
        <StyledPageContainer>
            <h1 className={ h1 }>{ t("common:info") }</h1>

            <LineLang />

            <span>
                <p style={{ paddingBottom: '0' }} className={ semiheader }>{ t("sections:section_info_part01") }</p>

                <span className={"rmBottomMargin"}>
                    <div className={"BTNSmallComponent"}>
                        <p className={ paragraph }>- { t("sections:section_info_list01_part01") }</p>

                        <Link to={"/contacts"}>
                            <BTNSmall />
                        </Link>
                    </div>

                    <p style={{ paddingBottom: '0' }} className={ paragraph }>- { t("sections:section_info_list01_part02") }</p>
                    <p style={{ paddingBottom: '0' }} className={ paragraph }>- { t("sections:section_info_list01_part03") }</p>
                    <p style={{ paddingBottom: '0' }} className={ paragraph }>- { t("sections:section_info_list01_part04") }</p>
                    <p style={{ paddingBottom: '0' }} className={ paragraph }>- { t("sections:section_info_list01_part05") }</p>
                </span>

                <p style={{ fontWeight: '500' }} className={"textcontent--paragraph_older"}>{ t("sections:section_info_part02") }</p>

                <div className={"BTNSmallComponent"}>
                    <p className={ paragraph }>{ t("sections:section_info_part03") }</p>

                    <a href={ Link03 } target="_blank" rel="noopener noreferrer">
                        <BTNSmall />
                    </a>
                </div>

                <span className={"rmBottomMargin"}>
                     <p style={{ paddingBottom: '0' }} className={ paragraph }>- { t("sections:section_info_list02_part01") }</p>
                     <p style={{ paddingBottom: '0' }} className={ paragraph }>- { t("sections:section_info_list02_part02") }</p>
                     <p style={{ paddingBottom: '0' }} className={ paragraph }>- { t("sections:section_info_list02_part03") }</p>
                </span>
            </span>

            <ImgCollective3 />

            <span style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                height: 'auto',
                paddingBottom: '30px'
            }}>
                <p style={{ paddingBottom: '10px' }} className={"textcontent--small--header1"}>{ t("sections:section_info_part04") }</p>

                <p style={{ paddingBottom: '0' }} className={"textcontent--small--item1"}>{ t("sections:section_info_part05") }</p>
                <p style={{ paddingBottom: '0' }} className={"textcontent--small--item1"}>{ t("sections:section_info_part06") }</p>
                <p style={{ paddingBottom: '0' }} className={"textcontent--small--item1"}>{ t("sections:section_info_part07") }</p>
            </span>

            <LISTInformation showHeader={"true"} />
        </StyledPageContainer>
    )
}
