import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  & div {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: var(--list--line--height);
  }
  
  & div:nth-child(even) {
    background: var(--color--none);
  }
  
  & div:nth-child(odd) {
    background: var(--color--list);
  }
  
  & p {
    margin-left: 30px;
  }
`

export const I18nRenderListServices = (props) => {
    const [t] = useTranslation(["LIST_SERVICES"])

    return (
        <StyledListContainer>
            <div style={{
                display: props.showHeader === "true"
                    ? 'flex'
                    : 'none',
                alignItems: 'center',
                background: 'var(--color--primary)'
            }}>
                <p className={"textcontent--list--header"}>{ t("common:list_header_01")}</p>
            </div>
            { t('LIST_SERVICES:list_services', { returnObjects: true }).map((list_services, key) => (
                <div key={ key }>
                    <p className={"textcontent--list--item"}>{ t(list_services.item) }</p>
                </div>
            ))}
        </StyledListContainer>
    )
}
