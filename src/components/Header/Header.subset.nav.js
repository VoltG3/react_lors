import styled from 'styled-components'

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const StyledSubSetNavFirst = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  @media only screen and (max-width: 600px) {
    
      flex-direction: column;
    
  }
  //
  // border: solid 1px red;
  //
  
  @media only screen and (max-width: 881px) {
    justify-content: center;
  
    p {
      margin-right: 20px;
    }
  }
  
  & p:hover {
    cursor: pointer;
    color: var(--clr--accent--base);
  }
  
  p {
    //
    // border: solid 1px red;1
    //
  }
`

export default function HeaderSubsetNav() {
    const [t] = useTranslation(["common"])

    return (
        <StyledSubSetNavFirst>
            <Link className={"textcontent--header--nav--btn--under"} to={"home"}>
                <p>{ t("common:home") }</p>
            </Link>

            <Link className={"textcontent--header--nav--btn--under"} to={"about"}>
                <p>{ t("common:about") }</p>
            </Link>

            <Link className={"textcontent--header--nav--btn--under"} to={"services"}>
                <p>{ t("common:services") }</p>
            </Link>

            <Link className={"textcontent--header--nav--btn--under"} to={"prices"}>
                <p>{ t("common:prices") }</p>
            </Link>

            <Link className={"textcontent--header--nav--btn--under"} to={"info"}>
                <p>{ t("common:info") }</p>
            </Link>

            <Link className={"textcontent--header--nav--btn--under"} to={"contacts"}>
                <p>{ t("common:contacts") }</p>
            </Link>
        </StyledSubSetNavFirst>
    )
}
