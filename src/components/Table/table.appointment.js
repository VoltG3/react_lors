import styled from 'styled-components'

import { useTranslation } from 'react-i18next'

import { Link01 } from '../../env'
import BtnVariant03 from "../BTN_variant03";

const StyledThisTable = styled.div`
  
    /*margin-top: 50px;
    margin-bottom: 50px;*/
  
  .thisInline {
    display: flex;
    flex-direction: column;
    //align-items: center;
    gap: 0;
    width: 100%;
    height: auto;
    //white-space: pre-wrap;
    margin-top: 50px;
    margin-bottom: 50px;
    box-sizing: border-box;
    
    .thisLink {
      & p {
        font-weight: 600!important;
      }

      & p:hover {
        color: var(--color--highlight);
      }
    }
  }
`

export default function TableAppointment() {
    const [t] = useTranslation(["sections", "common"])

    return (
        <StyledThisTable>
            <div className={"thisInline"}>

        <div>
            <p className={"textcontent--small--item"}>{ t("sections:section_contacts_part02") }</p>
            {/*   <BtnVariant03 />*/}
        </div>


                <div className={"thisLink"}>
                    <a href={ Link01 } target="_blank" rel="noopener noreferrer">
                        <p className={"textcontent--small--item"}>{ t("common:eapointment") }</p>
                    </a>
                </div>
            </div>

           {/* <p className={"textcontent--small--item"}>{ t("sections:section_contacts_part02") }</p>*/}

        </StyledThisTable>
    )
}
