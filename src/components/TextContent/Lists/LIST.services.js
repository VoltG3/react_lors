import { ListHeader as StyledListHeader } from './LIST.styles'
import { StyledServices as StyledContainer } from './LIST.styles'
import { useTranslation } from 'react-i18next'
import './effects.css'
export const LISTServices = () => {
    const [t] = useTranslation(["LIST_SERVICES"])

    return (
        <StyledContainer >
            <StyledListHeader>
                <p className={"textcontent--list--header"}>{ t("common:list_header_01")}</p>
            </StyledListHeader>

            { t('LIST_SERVICES:list_services', { returnObjects: true }).map((list_services, key) => (
                <div key={ key }>
                    <p className={"textcontent--list--item"}>{ t(list_services.item) }</p>
                </div>
            ))}
        </StyledContainer>
    )
}
