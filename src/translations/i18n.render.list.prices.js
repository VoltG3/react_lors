import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const StyledGetJsonData = styled.div`
  width: 100%;
  
  & div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    //min-height: var(--list--line--height);
  }
  
  .firstPart {
    //max-width: 1080px;
    width: 100%;
    
    & p {
      margin-top: 5px;
      margin-bottom: 5px;
      margin-left: 30px;
    }
  }
  
  .secondPart {
    max-width: 181px;
    
    & :nth-child(1) {
      justify-content: flex-end;
      max-width: 96px;
    }
    
    & :nth-child(2) {
      max-width: 74px;
    }
  }
 
  @media only screen and (max-width: 1205px) {
   
  }
  
  .line {
    min-height: var(--list--line--height);
  }
  
  & div:nth-child(even) .line {
    background: var(--clr--default--ltst);
  }
  
  & div:nth-child(odd) .line {
    background: var(--color--list);
  }
`

const cyrrencySign = '€'

export const I18nRenderListPrices = (props) => {
    const [t] = useTranslation(["LIST_PRICES"])

    return (
        <StyledGetJsonData>

            <div style={{
                display: props.showHeader === "firstHeader"
                    ? 'flex'
                    : 'none',
                alignItems: 'center',
                background: 'var(--color--primary)'
            }}>
                <p style={{
                    marginTop: '15px',
                    marginBottom: '15px',
                    marginLeft: '30px'
                }}
                   className={"textcontent--list--header"}>{ t("common:list_header_02")}</p>
            </div>

            <div style={{
                display: props.showHeader === "secondHeader"
                    ? 'flex'
                    : 'none',
                background: 'var(--color--primary)'
            }}>
                <p style={{
                    marginTop: '15px',
                    marginBottom: '15px',
                    marginLeft: '30px'
                }}
                   className={"textcontent--list--header"}>{ t("common:list_header_03")}</p>
            </div>

            { t(props.variant, { returnObjects: true }).map((list_prices, key) => (
                    <div key={ key }>
                        <div className={"line firstPart"}>
                            <p className={"textcontent--list--item"}>{ t(list_prices.item) }</p>
                        </div>

                        <div className={"line secondPart"}>
                            <div>
                                <p className={"textcontent--list--item"}>{ t(list_prices.price) }</p>
                            </div>

                            <div>
                                <p className={"textcontent--list--item"}>{ cyrrencySign }</p>
                            </div>
                        </div>
                    </div>

                ))}
        </StyledGetJsonData>
    )
}
