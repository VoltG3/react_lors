import { StyledHeader as Header } from './css/ListHeader'
import { StyledPrices as Container } from './css/Controller'

import { useTranslation } from 'react-i18next'
import config from '../../config'

export const ListPricesWithReference = () => {
    const [t] = useTranslation(["list_prices"])
    const currencySign = config.common.currencySign

    return (
        <div style={{ width: '100%', paddingBottom: 'var(--size--padding30)' }}>
            <Container>
                <Header>
                    <p className={"textContent--list--header"}>{ t("list_prices_with_reference.list_header") }</p>
                </Header>

                { t("list_prices_with_reference.list_items", { returnObjects: true }).map((listItem, key) => (
                    <div key={ listItem.id || key }>
                        <span className={"productItemDescribe"}>
                            <p className={"textContent--list--item"}>{ listItem.item }</p>
                        </span>

                        <span className={"productItemPrice"}>
                            <div className={"line"}>
                                <p className={"textContent--list--item"}>{ listItem.price }</p>
                            </div>

                            <div className={"line"}>
                                <p className={"textContent--list--item"}>{ currencySign }</p>
                            </div>
                        </span>
                    </div>
                ))}

            </Container>
        </div>
    )
}