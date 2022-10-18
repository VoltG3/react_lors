import styled from 'styled-components'
import i18n from 'i18next'

const StyledSubSetLang = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
      width: 100px;
      height: 20px;
  
  & p:hover {
    cursor: pointer;
    color: var(--clr--accent--base);
  }
`

export default function HeaderSubSetLang() {
    return (
        <div>
            <StyledSubSetLang>
                <p className={"textcontent--header--nav--lang"}
                   value={"LV"}
                   onClick={() => i18n.changeLanguage('lv') }>LV
                </p>

                <p className={"textcontent--header--nav--lang"}
                   value={"EN"}
                   onClick={() => i18n.changeLanguage('en') }>EN
                </p>

                <p className={"textcontent--header--nav--lang"}
                   value={"RU"}
                   onClick={() => i18n.changeLanguage('ru') }>RU
                </p>
            </StyledSubSetLang>
        </div>
    )
}
