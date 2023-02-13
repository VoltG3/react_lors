import '../translations/i18n'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

import { PageContainer as StyledPageContainer } from './Styles'
import { introHeader, Link01 } from '../env'

import ImgContacts from '../components/Image/IMG.contacts'
import ImgCollective3Desktop from '../components/Image/IMG.collective3.desktop'
import ImgCollective3Mobile from '../components/Image/IMG.collective3.mobile'

import TableSectionContacts from '../components/TableContacts/table.section.contacts'

import GoogleMap from '../components/GoogleMap'
import LineLang from '../components/line.lang'
import BTNPrimary from '../components/Button/temp/BTN.primary'

export default function Contacts() {
    const [t] = useTranslation(["common", "sections"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'

    return (
        <>
            <StyledPageContainer style={{ paddingBottom: '0'}}>
                <h2 className={ h }>{ t("common:contacts") }</h2>
                <LineLang />

                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <span>
                        <p style={{ color: 'var(--color--paragraph--highlight)'}} className={ paragraph }>{ t("sections:section_contacts_part01") }</p>
                        <p className={ paragraph }>{ t("sections:section_contacts_part02") }</p>

                        <a href={ Link01 } target={"_blank"} rel={"noopner noreferrer"}>
                            <BTNPrimary
                                label={"btn_appointment"}
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
