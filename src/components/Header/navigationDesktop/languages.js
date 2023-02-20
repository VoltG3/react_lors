import styled from 'styled-components'
import i18n from 'i18next'

function Languages() {
    const p = 'textcontent--header--navigation--languages'

    return (
        <div>
            <StyledSubSetLang>
                <p className={ p }
                   value={"LV"}
                   onClick={() => i18n.changeLanguage('lv') }>LV
                </p>

                <p className={ p }>/</p>

                <p className={ p }
                   value={"EN"}
                   onClick={() => i18n.changeLanguage('en') }>EN
                </p>

                <p className={ p }>/</p>

                <p className={ p }
                   value={"RU"}
                   onClick={() => i18n.changeLanguage('ru') }>RU
                </p>
            </StyledSubSetLang>
        </div>
    )
}

const StyledSubSetLang = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  align-items: center;
      width: 100px;
      height: auto;
  padding-top: 5px;

  @media only screen and (max-width: 1500px){  width: 80px;  }
  @media only screen and (max-width: 1220px){  width: 60px;  }
  
  & p:hover {
    cursor: pointer;
    color: var(--clr--accent--base);
  }
`

export default Languages