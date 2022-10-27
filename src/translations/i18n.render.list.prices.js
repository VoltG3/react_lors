import styled from 'styled-components'
import i18next, {t} from "i18next";

const StyledTable = styled.div`
  
  width: 100%;
  
  & div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    min-height: var(--list--line--height);
  }
  
  .firstPart {
    max-width: 1080px;
    
    & p {
      margin-left: 30px
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
  
  & div:nth-child(even) .line {
    background: var(--clr--default--ltst);
  }
  
  & div:nth-child(odd) .line {
    background: var(--color--list);
  }
`

const cyrrencySign = '€'

export const I18nRenderListPrices = (props) => {

    return (
        <StyledTable>
           {/* { i18next.t('LIST_PRICES:list_headers', { returnObjects: true }).map((list_prices, key) => (
                <div key={ key }>
                    <h1>
                        { t(list_prices.first_header)}
                    </h1>
                </div>
            ))}*/}

            { i18next.t(props.variant, { returnObjects: true }).map((list_prices, key) => (
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
        </StyledTable>
    )
}
