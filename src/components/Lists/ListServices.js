import { StyledHeader as Header } from './css/ListHeader'
import { StyledServices as Container } from './css/Controller'

import { useTranslation } from 'react-i18next'

export const ListServices = () => {
    const [t] = useTranslation(["list_services"])

    return (
        <Container >
            <Header>
                <p className={"textContent--list--header"}>{ t("list_services.list_header")}</p>
            </Header>

            { t('list_services.list_items', { returnObjects: true }).map((listItem, key) => (
                <div key={ key }>
                    <p className={"textContent--list--item"}>{ t(listItem.item) }</p>
                </div>
            ))}
        </Container>
    )
}