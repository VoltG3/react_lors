import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Navigation() {
    const [t] = useTranslation(["common"])
    const p = 'textcontent--header--desktop--navigation'

    return (
        <StyledNavigationHeader>
            <Link className={ p } to={"home"}>
                <p>{ t("common:home") }</p>
            </Link>

            <Link className={ p } to={"about"}>
                <p>{ t("common:about") }</p>
            </Link>

            <Link className={ p } to={"services"}>
                <p>{ t("common:services") }</p>
            </Link>

            <Link className={ p } to={"prices"}>
                <p>{ t("common:prices") }</p>
            </Link>

            <Link className={ p } to={"info"}>
                <p>{ t("common:info") }</p>
            </Link>

            <Link className={ p } to={"contacts"}>
                <p className={"lastParagraph"}>{ t("common:contacts") }</p>
            </Link>
        </StyledNavigationHeader>
    )
}

const StyledNavigationHeader = styled.div`
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