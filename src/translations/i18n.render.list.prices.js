import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const StyledI18nRenderListPrices = styled.div`
  box-sizing: border-box;
    width: 100%;
    height: auto;
  box-shadow: var(--box--shadow);
  
  &:hover {
    transition: box-shadow .3s linear;
    box-shadow: var(--box--hover);
  }
  
  & div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  
  .productItemDescribe {
    width: 100%;
    
    & p {
      word-break: break-all;
      margin-top: 5px;
      margin-bottom: 5px;
      margin-left: 30px;
    }
  }
  
  .productItemPrice {
    max-width: 181px;
    height: auto;
    //border: solid 1px red;
    
    & :nth-child(1) {
      justify-content: flex-end;
      max-width: 96px;
    }
    
    & :nth-child(2) {
      max-width: 74px;
    }
  }
  
  .line {
    height: auto;
    min-height: var(--list--line--height);
  }   & div:nth-child(even) .line { background: var(--clr--default--ltst); }
      & div:nth-child(odd) .line { background: var(--color--list); }
`

const cyrrencySign = '€'

export const I18nRenderListPrices = (props) => {
    const [t] = useTranslation(["LIST_PRICES"])

    const listHeaderWithoutReference = `${ t("common:list_header_02")}`
    const listHeaderWithReference = `${ t("common:list_header_03")}`

    const GetHeader = () => {
        if(props.headerOf === 'listWithoutReference') {
            return listHeaderWithoutReference
        } else {
            return listHeaderWithReference
        }
    }

    return (
        <StyledI18nRenderListPrices>
            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--color--primary)' }}>
                <p style={{ margin: `15px 0 15px 30px` }} className={"textcontent--list--header"}>{ GetHeader() }</p>
            </div>

            { t(props.variant, { returnObjects: true }).map((list_prices, key) => (
                    <div key={ key }>
                        <div className={"line"}>
                            <div className={"productItemDescribe"}>
                                <p className={"textcontent--list--item"}>{ t(list_prices.item) }</p>
                            </div>

                            <div className={"productItemPrice"}>
                                <div>
                                    <p className={"textcontent--list--item"}>{ t(list_prices.price) }</p>
                                </div>

                                <div>
                                    <p className={"textcontent--list--item"}>{ cyrrencySign }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </StyledI18nRenderListPrices>
    )
}
