import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
        <>
            <Link to={"home"}><p>Home</p></Link>
            <Link to={"admission"}><p>Admission</p></Link>
            <Link to={"services"}><p>Services</p></Link>
            <Link to={"info"}><p>Info</p></Link>
            <Link to={"about"}><p>About</p></Link>
            <Link to={"contacts"}><p>Contacts</p></Link>
        </>
    )
}