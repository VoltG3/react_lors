import '../translations/i18n'
import i18n from "i18next";
import { useTranslation } from 'react-i18next'
import { PageContainer as StyledPageContainer } from './Styles'
import {introHeader, Link01} from "../env";
import React from 'react';
import GoogleMap from '../components/GoogleMap'
import LineLang from "../components/line.lang";

import TableSectionContacts from "../components/TableContacts/table.section.contacts";
import ImgContacts from "../components/Image/IMG.contacts";
import ImgCollective3Desktop from "../components/Image/IMG.collective3.desktop";

import BUTTON_v1 from "../components/Button/BUTTON_v1";
import ImgCollective3Mobile from "../components/Image/IMG.collective3.mobile";

export default function Contacts() {
    const [t] = useTranslation(["common", "sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'

    return (
        <>
            <StyledPageContainer style={{ paddingBottom: '0'}}>
                <h1 className={ h1 }>{ t("common:contacts") }</h1>
                <LineLang />

                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <span>
                        <p style={{ color: 'var(--color--highlight)'}} className={ paragraph }>{ t("sections:section_contacts_part01") }</p>
                        <p className={ paragraph }>{ t("sections:section_contacts_part02") }</p>

                        <a href={ Link01 } target={"_blank"} rel={"noopner noreferrer"}>
                            <BUTTON_v1
                                label={"btn_appointment_m"}
                                minWidth={"218px"}
                                paragraphMarginLeft={"-25%"}
                                paddingVertical={"15px"}
                                justifyContent={"flex-start"}
                            />
                        </a>
                    </span>




                    <ImgCollective3Desktop />
                </div>

                <TableSectionContacts />
                <ImgContacts />
                <ImgCollective3Mobile />

                <div className={"inlineSpan"}>
                    <p className={"textcontent--h3"}>{ introHeader }</p>
                    <p className={"textcontent--h3"}>{ t("sections:section_contacts_part03") }</p>
                    <p className={"textcontent--h3"}>{ t("sections:section_contacts_part04") }</p>
                </div>

            </StyledPageContainer>

            <GoogleMap />
        </>
    )
}
