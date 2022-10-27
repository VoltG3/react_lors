import styled from 'styled-components'

import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import BtnVariant02 from './BTN_variant02'

const StyledTextcontentPrices = styled.div`
  max-width: calc(var(--page--width) - calc(var(--page--side--margin) * 2));
  width: 100%;
  //padding-bottom: 60px;
  
  .text--with--btn--link {
    display: flex;
    flex-direction: row;
    align-items: center;
      width: 100%;
      height: auto;
  }
  
  .marginTop {
    margin-top: 9px;
  }
  
  & div {
    width: 100%;
    height: 100%;
  }

  & h1 {
    margin: 40px 0 40px 0;
  }
`

export default function TextcontentPrices() {
    const [t] = useTranslation(["sections", "prices"])

    return (
        <StyledTextcontentPrices>
            <h1 className={"textcontent--section--header"}>{t("common:prices")}</h1>

            <div>
                <p className={"marginTop textcontent--paragraph--header"}>{ i18next.t("sections:section_prices_part01") }</p>
                <p className={"marginTop textcontent--paragraph"}>{ i18next.t("sections:section_prices_part02") }</p>

                <div className={"marginTop text--with--btn--link"}>
                    <p className={"textcontent--paragraph"}>{ i18next.t("sections:section_prices_part03") }</p>
                    <BtnVariant02 />
                </div>

                <div className={"marginTop text--with--btn--link"}>
                    <p className={"textcontent--paragraph"}>{ i18next.t("sections:section_prices_part04") }</p>
                    <BtnVariant02 />
                </div>
            </div>
        </StyledTextcontentPrices>
    )
}
