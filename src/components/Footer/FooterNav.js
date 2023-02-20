import React from 'react'
import config from '../../config'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function FooterNav() {
    const [t] = useTranslation(["common"])
    const URL_01 = config.external_url.URL_01
    const p = 'textcontent--footer--navigation'

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
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

            <Link className={ p } to={"contacts"}>
                <p>{ t("common:info") }</p>
            </Link>

            <Link className={ p } to={"info"}>
                <p>{ t("common:contacts") }</p>
            </Link>

            <a className={ p } href={ `${URL_01}` } target={"_blank"} rel={"noopener noreferrer"}>
                <p>{ t("common:eapointment") }</p>
            </a>
        </div>
    )
}
