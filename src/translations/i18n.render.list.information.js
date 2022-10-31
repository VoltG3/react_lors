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
    background: var(--clr--default--ltst);
  }
  
  & div:nth-child(odd) {
    background: var(--color--list);
  }
`

export const I18nRenderListInformation = () => {
    const [t] = useTranslation(["LIST_INFORMATION"])

    return (
        <StyledListContainer>
            { t('LIST_INFORMATION:list_information', { returnObjects: true }).map((list_information, key) => (
                <div key={ key }>
                    <p className={"textcontent--list--item"}>{ t(list_information.item) }</p>
                </div>
            ))}
        </StyledListContainer>
    )
}
