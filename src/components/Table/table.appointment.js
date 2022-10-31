import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { Link01 } from '../../env'

export default function TableAppointment() {
    const [t] = useTranslation(["sections", "common"])

    return (
        <div style={{
            marginTop: '50px',
            marginBottom: '50px'
        }}>
            <p className={"textcontent--paragraph"}>{ i18next.t("sections:section_contacts_part02") }</p>

            <a href={ Link01 } target="_blank" rel="noopener noreferrer">
                <p className={"textcontent--paragraph"}>{ i18next.t("common:eapointment") }</p>
            </a>
        </div>
    )
}
