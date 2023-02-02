import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Link01 } from '../../env'

export default function FooterNav() {
    const [t] = useTranslation(["common"])

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Link className={"textcontent--footer--navigation"} to={"home"}>
                <p>{ t("common:home") }</p>
            </Link>

            <Link className={"textcontent--footer--navigation"} to={"about"}>
                <p>{ t("common:about") }</p>
            </Link>

            <Link className={"textcontent--footer--navigation"} to={"services"}>
                <p>{ t("common:services") }</p>
            </Link>

            <Link className={"textcontent--footer--navigation"} to={"prices"}>
                <p>{ t("common:prices") }</p>
            </Link>

            <Link className={"textcontent--footer--navigation"} to={"contacts"}>
                <p>{ t("common:info") }</p>
            </Link>

            <Link className={"textcontent--footer--navigation"} to={"info"}>
                <p>{ t("common:contacts") }</p>
            </Link>

            <a className={"textcontent--footer--navigation"} href={ Link01 } target={"_blank"} rel={"noopner noreferrer"}>
                <p>{ t("common:eapointment") }</p>
            </a>
        </div>
    )
}
