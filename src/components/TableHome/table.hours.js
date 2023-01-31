import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

import TableHoursDays from './table.hours.days'
import LineShort from '../line.short'
import BTN_variant01 from '../Button/BTN_variant01'
import TableHoursHours from "./table.hours.hours";

const TableHours = () => {
    const [t] = useTranslation(["times", "sections", "common"])
    const tableHeader = i18n.language === 'ru' ? 'textcontent--table--header--rus' : 'textcontent--table--header'
    const paragraphTableItem = i18n.language === 'ru' ? 'textcontent--table--item--rus' : 'textcontent--table--item'


    return (
        <>
            <p className={ tableHeader }>{ t("times:times03") }</p>

            <LineShort />

            <div style={{
                display: 'flex',
                flexDirection: 'row'

            }}>
            <TableHoursDays
                days={[
                    `${ t("times:times04") }`,
                    `${ t("times:times05") }`,
                    `${ t("times:times06") }`,
                    `${ t("times:times07") }`,
                    `${ t("times:times08") }`
                ]}
            />

            <TableHoursHours />
            </div>
            <p className={ paragraphTableItem } style={{ paddingTop: '20px'}}>{ t("sections:section_contacts_part02") }</p>

            <BTN_variant01 />
        </>
    )
}

export default TableHours