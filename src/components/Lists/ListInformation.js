import { StyledHeader as Header } from './css/ListHeader'
import { StyledInformation as Container } from './css/Controller'

import { useTranslation } from 'react-i18next'

export const ListInformation = (props) => {
    const [t] = useTranslation(["list_information"])

    return (
        <Container>
            <Header>
                <p className={"textContent--list--header"}>{ t("list_information.list_header")}</p>
            </Header>

            { t('list_information.list_items', { returnObjects: true }).map((listItem, key) => (
                <div key={ key }>
                    <p className={"textContent--list--item"}>{ listItem.item }</p>
                </div>
            ))}

        </Container>
    )
}