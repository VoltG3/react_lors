import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const StyledSubSetNavFirst = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
border: solid 1px red;
  & p:hover {
    cursor: pointer;
    color: var(--clr--accent--base);
  }
`

export default function HeaderSubsetNav1() {
    const [t] = useTranslation(["common"])

    return (
        <StyledSubSetNavFirst>
            <Link className={"textcontent--header--nav--btn--under"} to={"home"}>
                <p>{t("common:home")}</p>
            </Link>

            <Link className={"textcontent--header--nav--btn--under"} to={"about"}>
                <p>{t("common:about")}</p>
            </Link>

            <Link className={"textcontent--header--nav--btn--under"} to={"services"}>
                <p>{t("common:services")}</p>
            </Link>

            <Link className={"textcontent--header--nav--btn--under"} to={"prices"}>
                <p>{t("common:prices")}</p>
            </Link>

            <Link className={"textcontent--header--nav--btn--under"} to={"info"}>
                <p>{t("common:info")}</p>
            </Link>

            <Link className={"textcontent--header--nav--btn--under"} to={"contacts"}>
                <p>{t("common:contacts")}</p>
            </Link>
        </StyledSubSetNavFirst>
    )
}
