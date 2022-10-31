import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import BtnVariant02 from './BTN_variant02'
import { Link02 } from '../env'
import { Link } from 'react-router-dom'

const StyledTextcontentPrices = styled.div`
  max-width: calc(var(--page--width) - calc(var(--page--side--margin) * 2));
  width: 100%;
  
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
`

export default function TextcontentPrices() {
    const [t] = useTranslation(["common", "sections"])

    return (
        <StyledTextcontentPrices>
            <h1 className={"textcontent--index--header"}>{t("common:prices")}</h1>

            <div>
                <p className={"marginTop textcontent--paragraph--header"}>{ t("sections:section_prices_part01") }</p>
                <p className={"marginTop textcontent--paragraph"}>{ t("sections:section_prices_part02") }</p>

                <div className={"marginTop text--with--btn--link"}>
                    <p className={"textcontent--paragraph"}>{ t("sections:section_prices_part03") }</p>

                   {/*
                            -
                            -
                            -
                            -
                   */}

                    <Link to={"info"}>
                        <BtnVariant02 />
                    </Link>
                </div>

                <div className={"marginTop text--with--btn--link"}>
                    <p className={"textcontent--paragraph"}>{ t("sections:section_prices_part04") }</p>

                    <a href={ Link02 } target="_blank" rel="noopener noreferrer">
                        <BtnVariant02 />
                    </a>
                </div>
            </div>
        </StyledTextcontentPrices>
    )
}
