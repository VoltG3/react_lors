import styled from 'styled-components'

import '../translations/i18n'
import { useTranslation } from 'react-i18next'

import Img from "../components/Image/Img";
import { image02, image09, image10 } from '../env'

import GoogleMap from '../components/GoogleMap'
import i18n from "i18next";
import LineLang from "../components/lineLang";
import TimesTable from "../components/Times/TimesTable";
import BTNSmall from "../components/Button/BTNSmall";
import BTNSmallNext from "../components/Button/BTNSmallNext";

const StyledImg = styled.div`
  display: flex;
  flex-direction: row;
    margin-bottom: 80px;

  @media only screen and (max-width: 1260px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
  }
`

export default function Contacts() {
    const [t] = useTranslation(["common", "sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--header1--rus' : 'textcontent--header1'

    return (
        <>
            <div className={"page"}>
                <h1 className={ h1 }>{ t("common:contacts") }</h1>

                <LineLang />

                <span style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: 'auto'
                }}>
                   <p style={{ color: 'var(--color--highlight)', paddingBottom: '0' }} className={ paragraph }>{t("sections:section_contacts_part01")}</p>

                    <div className={"BTNSmallComponent"}>
                        <p className={ paragraph } style={{ }}>{ t("sections:section_contacts_part02") }</p>

                        <BTNSmallNext />
                    </div>
                </span>

                <div style={{ width: '100%', height: '1px', paddingBottom: '30px'}}>

                </div>

                <TimesTable />

                <StyledImg>
                    <div>
                        <Img img={ image10 } width={"770"} height={"auto"} />
                    </div>

                    <div>
                        <Img img={ image09 } width={"670"} height={"auto"} />
                    </div>
                </StyledImg>

                <span style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    height: 'auto'
                }}>
                    <p style={{ paddingBottom: '8px'}} className={"textcontent--small--header1"}>{ t("sections:section_footer_part01") }</p>

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <p style={{ paddingBottom: '0px', paddingRight: '5px'}} className={"textcontent--small--header1"}>{ t("sections:section_contacts_part03") }</p>
                        <p style={{ color: 'var(--color--highlight)' }} className={"textcontent--small--header1"}>{ t("sections:section_contacts_part04") }</p>
                    </div>
                </span>

                <Img img={ image02 } width={"1280"} height={"auto"} verticalMargin={"--margin--img--vertical"} />
            </div>

            <GoogleMap />
        </>
    )
}
