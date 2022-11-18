import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import BtnVariant02 from './BTN_variant02'
import { Link02 } from '../env'
import { Link } from 'react-router-dom'

const BtnWithText = styled.div`
  
    display: flex;
    flex-direction: row;
    align-items: center;
      gap: 0;
      width: 100%;
      height: auto;

  @media only screen and (max-width: 563px) {
    flex-direction: column;
    gap: 15px;
  }
`

export default function TextcontentPrices() {
    const [t] = useTranslation(["common", "sections"])

    return (
        <div className={"box textcontent"}
             style={{
                marginBottom: '30px'
             }}
        >
            <h1 className={"textcontent--index--header"}>{t("common:prices")}</h1>

            <div>
                <p className={"textcontent--paragraph"}>{ t("sections:section_prices_part01") }</p>
                <p className={"textcontent--paragraph"}>{ t("sections:section_prices_part02") }</p>

                <BtnWithText style={{
                    marginBottom: '15px'
                }}>
                    <div>
                        <p className={"textcontent--paragraph"}>{ t("sections:section_prices_part03") }</p>
                    </div>

                    <Link to={"/info"}>
                        <BtnVariant02 />
                    </Link>
                </BtnWithText>

                <BtnWithText>
                    <div>
                        <p className={"textcontent--paragraph"}>{ t("sections:section_prices_part04") }</p>
                    </div>

                    <a href={ Link02 } target="_blank" rel="noopener noreferrer">
                        <BtnVariant02 />
                    </a>
                </BtnWithText>

            </div>
        </div>
    )
}
