import { StyledHeader as Header } from './css/ListHeader'
import { StyledPrices as Container } from './css/Controller'

import { useTranslation } from 'react-i18next'
import config from '../../config'

export const ListPricesWithoutReference = () => {
    const [t] = useTranslation(["list_prices"])
    const currencySign = config.common.currencySign

    return (
        <Container>
            <Header>
                <p className={"textcontent--list--header"}>{ t("list_prices_without_reference.list_header") }</p>
            </Header>

            { t("list_prices_without_reference.list_items", { returnObjects: true }).map((listItem, key) => (
                <div key={ key }>
                    <span className={"productItemDescribe"}>
                        <p className={"textcontent--list--item"}>{ t(listItem.item) }</p>
                    </span>

                    <span className={"productItemPrice"}>
                        <div className={"line"}>
                            <p className={"textcontent--list--item"}>{ t(listItem.price) }</p>
                        </div>

                        <div className={"line"}>
                            <p className={"textcontent--list--item"}>{ currencySign }</p>
                        </div>
                    </span>

                </div>
            ))}

        </Container>
    )
}