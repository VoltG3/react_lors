import { ListHeader as StyledListHeader } from './LIST.styles'
import { StyledPrices as StyledContainer } from './LIST.styles'
import { useTranslation } from 'react-i18next'

export const LISTPrices = (props) => {
    const [t] = useTranslation(["LIST_PRICES"])

    const WithoutRef = `${ t("common:list_header_02")}`
    const WithRef = `${ t("common:list_header_03")}`
    const currencySign = '€'

    return (
        <StyledContainer>
            <StyledListHeader>
                <p className={"textcontent--list--header"}>{ props.isReference === false ?  WithoutRef : WithRef }</p>
            </StyledListHeader>

            { t(props.variant, { returnObjects: true }).map((list_prices, key) => (
                <div key={ key }>
                    <span id={"productItemDescribe"}>
                        <p className={"textcontent--list--item"}>{ t(list_prices.item) }</p>
                    </span>

                    <span id={"productItemPrice"}>
                        <div className={"line"}>
                            <p className={"textcontent--list--item"}>{ t(list_prices.price) }</p>
                        </div>

                        <div className={"line"}>
                            <p className={"textcontent--list--item"}>{ currencySign }</p>
                        </div>
                    </span>

                </div>
            ))}

        </StyledContainer>
    )
}
