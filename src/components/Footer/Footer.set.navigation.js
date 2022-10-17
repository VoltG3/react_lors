import { Link } from 'react-router-dom'
import { DATA_TEXTCONTENT_HEADERS } from '../../env'
import { STDH } from '../STDCOUT.headers'

export default function FooterSetNavigation() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Link to={"admission"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"admission"} /></Link>
            <Link to={"services"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"services"} /></Link>
            <Link to={"info"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"info"} /></Link>
            <Link to={"about"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"about"} /></Link>
            <Link to={"contacts"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"contacts"} /></Link>

            <a href={"https://google.com"} target={"_blank"} rel={"noopner noreferrer"}>
                <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"appointment"} />
            </a>
        </div>
    )
}
