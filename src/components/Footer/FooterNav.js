import React from 'react'
import config from '../../config'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function FooterNav() {
    const [t] = useTranslation(["navigation"])
    const URL_01 = config.external_url.URL_01
    const p = 'textcontent--footer--navigation'
    const object = "navigation_primary."

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
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

            <Link className={ p } to={"contacts"}>
                <p>{ t(object + "contacts") }</p>
            </Link>

            <Link className={ p } to={"info"}>
                <p>{ t(object + "info") }</p>
            </Link>

            <a className={ p } href={ `${URL_01}` } target={"_blank"} rel={"noopener noreferrer"}>
                <p>{ t(object + "e_appointment") }</p>
            </a>
        </div>
    )
}
