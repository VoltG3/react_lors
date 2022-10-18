import { useTranslation } from 'react-i18next'
import '../translations/i18n'

export default function Contacts() {
    const { t } = useTranslation()

    return (
        <div className={"page"}>
            {t("welcome")}
        </div>
    )
}
