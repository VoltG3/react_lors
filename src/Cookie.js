import CookieConsent from 'react-cookie-consent'
import { useTranslation } from 'react-i18next'

export default function Cookie() {
    const [t] = useTranslation(['cookies'])

    return (
        <CookieConsent
            buttonText={ t('cookies:btn')}
            style={{ width: '100%'}}
        >
            <p>{ t('cookies:text')}</p>
        </CookieConsent>
    )
}
