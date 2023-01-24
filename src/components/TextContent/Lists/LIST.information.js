import { ListHeader as StyledListHeader } from './LIST.styles'
import { StyledInformation as StyledContainer } from './LIST.styles'
import { useTranslation } from 'react-i18next'

export const LISTInformation = () => {
    const [t] = useTranslation(["LIST_INFORMATION"])

    return (
        <StyledContainer>
            <StyledListHeader>
                <p className={"textcontent--list--header"}>{ t("sections:section_info_part04")}</p>
            </StyledListHeader>

            { t('LIST_INFORMATION:list_information', { returnObjects: true }).map((list_information, key) => (
                <div key={ key }>
                    <p className={"textcontent--list--item"}>{ t(list_information.item) }</p>
                </div>
            ))}

        </StyledContainer>
    )
}
