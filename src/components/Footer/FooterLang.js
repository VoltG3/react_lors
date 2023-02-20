import styled from 'styled-components'
import i18n from 'i18next'

function FooterLang() {
    const p = 'textcontent--footer--navigation'

    return (
        <StyledSubSetLang>
            <div>
                <p className={ p }
                   value={"LV"}
                   onClick={() => i18n.changeLanguage('lv') }>LV
                </p>
            </div>

            <div>
                <p className={ p }
                   value={"EN"}
                   onClick={() => i18n.changeLanguage('en') }>EN
                </p>
            </div>

            <div>
                <p className={ p }
                   value={"RU"}
                   onClick={() => i18n.changeLanguage('ru') }>RU
                </p>
            </div>
        </StyledSubSetLang>
    )
}

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
    border-radius: var(--border--radius);
    border: solid 1px var(--color--paragraph--footer);

    & :hover {
      color: var(--color--none);
    }
    
  } & div:nth-child(2) {
      margin-left: 10px;
      margin-right: 10px;
    }
`

export default FooterLang
