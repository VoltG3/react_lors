import styled from 'styled-components'
import i18n from 'i18next'

const StyledSubSetLang = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
      width: 100%;
    margin-top: 10px;

  @media only screen and (max-width: 730px) {
    justify-content: flex-start;
  }
  
  & div {
    padding: 2px 3px 2px 3px;
    border-radius: 3px;
    border: solid 1px var(--color--paragraph--footer);
    
  } & div:nth-child(2) {
      margin-left: 10px;
      margin-right: 10px;
    }
  
  & :hover {
    color: var(--color--none);
  }
`

export default function FooterLang() {
    return (
        <StyledSubSetLang>
            <div>
                <p className={"textcontent--footer--nav"}
                   value={"LV"}
                   onClick={() => i18n.changeLanguage('lv') }>LV
                </p>
            </div>

            <div>
                <p className={"textcontent--footer--nav"}
                   value={"EN"}
                   onClick={() => i18n.changeLanguage('en') }>EN
                </p>
            </div>

            <div>
                <p className={"textcontent--footer--nav"}
                   value={"RU"}
                   onClick={() => i18n.changeLanguage('ru') }>RU
                </p>
            </div>
        </StyledSubSetLang>
    )
}
