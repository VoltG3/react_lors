import styled from 'styled-components'

import '../translations/i18n'
import { useTranslation } from 'react-i18next'

import GetImg from "../components/GetImg";
import { image02, image09, image10 } from '../env'

import TimesTable from '../components/TimesTable/TimesTable'
import GoogleMap from '../materials/GoogleMap'
import Get_BTN from "../materials/Get_BTN";

import Gmap from '../materials/Gmap'

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

    return (
        <div className={"page"}>
            <h1>{ t("common:contacts") }</h1>

           <span>
               <p style={{ color: 'var(--color--highlight)' }} className={"textcontent--paragraph"}>{t("sections:section_contacts_part01")}</p>

               <Get_BTN
                   text={ t("sections:section_contacts_part02") }
                   btn={"hrefLink01"} />
           </span>

            <TimesTable />

            <StyledImg>
                <div>
                    <GetImg img={ image10 } width={"770"} height={"auto"} />
                </div>

                <div>
                    <GetImg img={ image09 } width={"670"} height={"auto"} />
                </div>
            </StyledImg>

            <span className={"rmBottomMargin center"} >
                <p style={{
                    paddingBottom: '15px'
                }} className={"textcontent--small--header"}>{ t("sections:section_footer_part01") }</p>

                <div>
                    <p style={{ color: 'var(--color--highlight)' }} className={"textcontent--small--header"}>{ t("sections:section_contacts_part03") }</p>
                    <p style={{ }} className={"textcontent--small--header"}>{ t("sections:section_contacts_part04") }</p>
                </div>
            </span>

            <GetImg img={ image02 } width={"1280"} height={"auto"} verticalMargin={"--margin--img--vertical"} />
        <GoogleMap />
            {/*<Gmap />*/}
        </div>
    )
}
