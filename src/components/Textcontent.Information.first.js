import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import BtnVariant02 from './BTN_variant02'

const StyledTExtcontentInformation = styled.div`
  width: calc(var(--page--width) - calc(var(--page--side--margin) * 2));;
  height: auto;

  .text--with--btn--link {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: auto;
  }

  .marginTop {
    margin-top: 12px;
  }

  .liWITHlink {
    display: flex;
    flex-direction: row;
    
    & :nth-child(2) {
      margin-left: 5px;
      color: var(--color--highlight);
      
      &:hover {
        color: yellow;
      }
    }
  }
  
  ul {
    margin-left: 25px;
  }
`

export default function TextcontentInformationFirst() {
    const [t] = useTranslation(["common","sections"])

    return (
        <StyledTExtcontentInformation>
            <h1 className={"textcontent--section--header"}>{ t("common:info") }</h1>

            <div>
                <p className={"marginTop textcontent--paragraph--header"}>{ t("sections:section_info_part01") }</p>

                <ul className={"marginTop"}>
                    <li>
                        <div className={"liWITHlink"}>
                            <p className={"textcontent--paragraph"}>{ t("sections:section_info_list01_part01") }</p>
                            <p className={"textcontent--paragraph--bold"}>{ t("sections:section_info_list01_part01_link") }</p>
                        </div>
                    </li>
                    <li><p className={"textcontent--paragraph"}>{ t("sections:section_info_list01_part02") }</p></li>
                    <li><p className={"textcontent--paragraph"}>{ t("sections:section_info_list01_part03") }</p></li>
                    <li><p className={"textcontent--paragraph"}>{ t("sections:section_info_list01_part04") }</p></li>
                    <li><p className={"textcontent--paragraph"}>{ t("sections:section_info_list01_part05") }</p></li>
                </ul>

                <p className={"marginTop textcontent--paragraph--bold"}>{ t("sections:section_info_part02") }</p>

                <div className={"marginTop marginTop text--with--btn--link"}>
                    <p className={"textcontent--paragraph"}>{ t("sections:section_info_part03") }</p>
                    <BtnVariant02 />
                </div>

                <ul className={"marginTop"}>
                    <li><p className={"textcontent--paragraph"}>{ t("sections:section_info_list02_part01") }</p></li>
                    <li><p className={"textcontent--paragraph"}>{ t("sections:section_info_list02_part02") }</p></li>
                    <li><p className={"textcontent--paragraph"}>{ t("sections:section_info_list02_part03") }</p></li>
                </ul>

            </div>
        </StyledTExtcontentInformation>
    )
}
