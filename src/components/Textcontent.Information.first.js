import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import BtnVariant02 from './BTN_variant02'
import {Link} from "react-router-dom";
import {Link02, Link03} from "../env";

const StyledTExtcontentInformation = styled.div`
  
  width: 100%;
  height: auto;
  
  .marginTop {
    margin-top: 12px;
  }

  
  ul {
    margin-left: 25px;
  }
`

const BtnWithTexttLI = styled.div`
  
    display: flex;
    flex-direction: row;
    align-items: center;
      gap: 0;
      width: 100%;
      height: auto;

  .thisLink {
    margin-left: 5px;
    font-weight: 600!important;
  }
  
  .thisLink:hover {
    cursor: pointer;
    color: var(--color--highlight);
  }
  
  @media only screen and (max-width: 563px) {
   
  }
`

const BtnWithTextt = styled.div`
  
    display: flex;
    flex-direction: row;
    align-items: center;
      gap: 0;
      width: 100%;
  //max-height: 20px;//white-space: pre-wrap;
     // height: 100%;
  
 // border: solid 1px red;

  & p {
   // display: flex;
   // align-self: center;
   // border: solid 1px brown;
  }

  @media only screen and (max-width: 563px) {
    flex-direction: column;
    gap: 15px;
  }
`

export default function TextcontentInformationFirst() {
    const [t] = useTranslation(["common","sections"])

    return (
        <div className={"box textcontent"}>
            <StyledTExtcontentInformation>
                <h1 className={"textcontent--index--header"}>{ t("common:info") }</h1>


                    <p className={"marginTop textcontent--paragraph--header"}>{ t("sections:section_info_part01") }</p>

                    <ul className={"marginTop"}>
                        <li>
                            <BtnWithTexttLI>
                                <div>
                                    <p className={"textcontent--paragraph"}>{ t("sections:section_info_list01_part01") }</p>
                                </div>

                                <div>
                                    <Link to={"/Contacts"}>
                                        <p className={"textcontent--paragraph thisLink"}>{ t("sections:section_info_list01_part01_link") }</p>
                                    </Link>
                                </div>
                            </BtnWithTexttLI>
                        </li>
                        <li><p className={"textcontent--paragraph"}>{ t("sections:section_info_list01_part02") }</p></li>
                        <li><p className={"textcontent--paragraph"}>{ t("sections:section_info_list01_part03") }</p></li>
                        <li><p className={"textcontent--paragraph"}>{ t("sections:section_info_list01_part04") }</p></li>
                        <li><p className={"textcontent--paragraph"}>{ t("sections:section_info_list01_part05") }</p></li>
                    </ul>

                    <p className={"marginTop textcontent--paragraph--bold"}>{ t("sections:section_info_part02") }</p>

                    <BtnWithTextt>
                     {/*   */}
                        <div>
                            <p className={"textcontent--paragraph"}>{ t("sections:section_info_part03") }</p>
                        </div>

                        <div>
                            <a href={ Link03 } target="_blank" rel="noopener noreferrer">
                                <BtnVariant02 />
                            </a>
                        </div>
                    </BtnWithTextt>

                    <ul className={"marginTop"}>
                        <li><p className={"textcontent--paragraph"}>{ t("sections:section_info_list02_part01") }</p></li>
                        <li><p className={"textcontent--paragraph"}>{ t("sections:section_info_list02_part02") }</p></li>
                        <li><p className={"textcontent--paragraph"}>{ t("sections:section_info_list02_part03") }</p></li>
                    </ul>

            </StyledTExtcontentInformation>

        </div>
    )
}
