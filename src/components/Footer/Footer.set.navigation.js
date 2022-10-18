import { Link } from 'react-router-dom'
import { DATA_TEXTCONTENT_HEADERS } from '../../env'
import { STDH } from '../STDCOUT.headers'

export default function FooterSetNavigation() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Link className={"textcontent--footer--nav"} to={"home"}>
                <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"home"} />
            </Link>

            <Link className={"textcontent--footer--nav"} to={"about"}>
                <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"about"} />
            </Link>

            <Link className={"textcontent--footer--nav"} to={"services"}>
                <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"services"} />
            </Link>

            <Link className={"textcontent--footer--nav"} to={"prices"}>
                <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"prices"} />
            </Link>

            <Link className={"textcontent--footer--nav"} to={"contacts"}>
                <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"contacts"} />
            </Link>

            <Link className={"textcontent--footer--nav"} to={"info"}>
                <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"info"} />
            </Link>

            <a className={"textcontent--footer--nav"} href={"https://google.com"} target={"_blank"} rel={"noopner noreferrer"}>
                <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"e-appointment"} />
            </a>
        </div>
    )
}
