import styled from 'styled-components'

import { useTranslation } from 'react-i18next'
import BtnVariant01 from './BTN_variant01'

const StyledThisContent = styled.div`
  display: flex;
  flex-direction: row;
`

export default function TextcontentContactsFirst() {
    const [t] = useTranslation(["common", "sections"])

    return (
        <div className={"box textcontent"}>
            <h1 className={"textcontent--index--header"}>{ t("common:contacts") }</h1>

            <p style={{
                color: 'var(--color--highlight)'
            }}
               className={"textcontent--paragraph"}>{t("sections:section_contacts_part01")}</p>

            <div>
                <div>
                    <p className={"textcontent--paragraph"}>{t("sections:section_contacts_part02")}</p>
                </div>

                <BtnVariant01 />
            </div>
        </div>
    )
}
