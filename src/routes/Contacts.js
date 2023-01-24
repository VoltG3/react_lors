


import '../translations/i18n'
import i18n from "i18next";
import { useTranslation } from 'react-i18next'
import { PageContainer as StyledPageContainer } from './Styles'


import GoogleMap from '../components/GoogleMap'

import LineLang from "../components/line.lang";


import BTNSmallNext from "../components/Button/BTNSmallNext";
import TableSectionContacts from "../components/table.section.contacts";
import ImgContacts from "../components/Image/IMG.contacts";
import ImgCollective3 from "../components/Image/IMG.collective3";



export default function Contacts() {
    const [t] = useTranslation(["common", "sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--header1--rus' : 'textcontent--header1'

    return (
        <>
            <StyledPageContainer>
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


                <TableSectionContacts />

                <ImgContacts />

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

                <ImgCollective3 />
            </StyledPageContainer>

            <GoogleMap />
        </>
    )
}
