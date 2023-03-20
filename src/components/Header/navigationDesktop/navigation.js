import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Navigation() {
    const [t] = useTranslation(["navigation"])
    const p = 'textcontent--header--desktop--navigation'
    const object = "navigation_primary."

    return (
        <StyledNavigationHeader>
            <Link className={ p } to={"home"}>
                <p>{ t(object + "home") }</p>
            </Link>

            <Link className={ p } to={"about"}>
                <p>{ t(object + "about") }</p>
            </Link>

            <Link className={ p } to={"services"}>
                <p>{ t(object + "services") }</p>
            </Link>

            <Link className={ p } to={"prices"}>
                <p>{ t(object + "prices") }</p>
            </Link>

            <Link className={ p } to={"info"}>
                <p>{ t(object + "info") }</p>
            </Link>

            <Link className={ p } to={"contacts"}>
                <p className={"lastParagraph"}>{ t(object + "contacts") }</p>
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