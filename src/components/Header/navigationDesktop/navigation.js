import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Navigation() {
    const [t] = useTranslation(["common"])

    return (
        <StyledSubSetNavFirst>
            <Link className={"textcontent--header--desktop--navigation"} to={"home"}>
                <p>{ t("common:home") }</p>
            </Link>

            <Link className={"textcontent--header--desktop--navigation"} to={"about"}>
                <p>{ t("common:about") }</p>
            </Link>

            <Link className={"textcontent--header--desktop--navigation"} to={"services"}>
                <p>{ t("common:services") }</p>
            </Link>

            <Link className={"textcontent--header--desktop--navigation"} to={"prices"}>
                <p>{ t("common:prices") }</p>
            </Link>

            <Link className={"textcontent--header--desktop--navigation"} to={"info"}>
                <p>{ t("common:info") }</p>
            </Link>

            <Link className={"textcontent--header--desktop--navigation"} to={"contacts"}>
                <p className={"lastParagraph"}>{ t("common:contacts") }</p>
            </Link>
        </StyledSubSetNavFirst>
    )
}

const StyledSubSetNavFirst = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  & p:hover {
    cursor: pointer;
    color: var(--clr--accent--base);
  }
  
  & p {
    padding-right: 30px;
  }
  
 .lastParagraph {
    padding-right: 0;
  }
`

export default Navigation