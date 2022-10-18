import styled from 'styled-components'

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
                <p className={"textcontent--header--nav--lang"}>LV</p>
                <p className={"textcontent--header--nav--lang"}>EN</p>
                <p className={"textcontent--header--nav--lang"}>RU</p>
            </StyledSubSetLang>
        </div>
    )
}
