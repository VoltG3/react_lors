import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  margin-bottom: 80px;

  & div {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: var(--list--line--height);

    @media only screen and (max-width: 600px) {

    }
  }

  & div:nth-child(even) {
    background: var(--color--none);
  }

  & div:nth-child(odd) {
    background: var(--color--list);
  }

  & p {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 30px;
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
