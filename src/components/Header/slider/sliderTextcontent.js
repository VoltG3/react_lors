import styled from "styled-components";
import { useTranslation } from 'react-i18next'
import BTN from "../../../materials/BTN";
import BtnVariant04 from "../../BTN_variant04";
function SliderTextcontent() {
    const [t] = useTranslation(["sections"])

    return (
      <StyledSliderTextcontent>
          <div style={{ margin: '67px 0 0 var(--margin--v1)' }}>
              <p className={"textcontent--header--firstline"}>{ t("sections:section_header_part05") }</p>
              <p className={"textcontent--header--secondline"}>{ t("sections:section_header_part06") }</p>
              <BTN />

              <div style={{ margin: '115px 0 0 0'}}>
                  <BtnVariant04 />
              </div>
          </div>
      </StyledSliderTextcontent>
    )
}

const StyledSliderTextcontent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
      width: 100%;
      height: inherit;
  border: solid 1px green;
`

export default SliderTextcontent