import CookieConsent from 'react-cookie-consent'
import { useTranslation } from 'react-i18next'

export default function Cookie() {
    const [t] = useTranslation(['modules'])

    return (
        <CookieConsent
            buttonText={ t('cookie.btn')}
            style={{ width: '100%'}}
        >
            <p>{ t('cookie.text')}</p>
        </CookieConsent>
    )
}