import { Link } from 'react-router-dom'
import { DATA_TEXTCONTENT_HEADERS } from '../../env'
import { STDH } from '../STDCOUT.headers'

export default function FooterSetNavigation() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Link to={"home"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"home"} /></Link>
            <Link to={"about"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"about"} /></Link>
            <Link to={"services"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"services"} /></Link>
            <Link to={"prices"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"prices"} /></Link>
            <Link to={"contacts"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"contacts"} /></Link>

            <a href={"https://google.com"} target={"_blank"} rel={"noopner noreferrer"}>
                <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"e-appointment"} />
            </a>
        </div>
    )
}
