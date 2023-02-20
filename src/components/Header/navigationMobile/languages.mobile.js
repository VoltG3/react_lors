import styled from 'styled-components'
import i18n from 'i18next'

function LanguagesMobile() {
    const p = 'textcontent--header--mobile--languages'

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <StyledSubSetLangMob>
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
            </StyledSubSetLangMob>
        </div>
    )
}

const StyledSubSetLangMob = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
      width: 140px;
      height: auto;
  padding-right: 10px;
  //border: solid 1px white;
 // padding-top: 5px;

  & p {
    color: white;
  }
  
  & p:hover {
    cursor: pointer;
    color: var(--clr--accent--base);
  }
`

export default LanguagesMobile