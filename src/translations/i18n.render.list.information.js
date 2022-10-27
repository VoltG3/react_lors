import styled from 'styled-components'
import i18next, { t } from 'i18next'

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

    return (
        <StyledListContainer>
            { i18next.t('LIST_INFORMATION:list_information', { returnObjects: true }).map((list_information, key) => (
                <div key={ key }>
                    <p className={"textcontent--list--item"}>{ t(list_information.item) }</p>
                </div>
            ))}
        </StyledListContainer>
    )
}
