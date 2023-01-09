import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

import { JsonData } from '../JSON/JsonData'
import {DATA_LVRU, DATA_EN } from '../../env'

import TableHoursItem from './table.hours.item'
import Line from './table.line'
import BTN_variant01 from '../Button/BTN_variant01'

const TableHoursController = () => {
    const [t] = useTranslation(["times", "sections", "common"])
    const tableHeader = i18n.language === 'ru' ? 'textcontent--table--header--rus' : 'textcontent--table--header'
    const paragraphTableItem = i18n.language === 'ru' ? 'textcontent--table--item--rus' : 'textcontent--table--item'
    const languageDataType = i18n.language === 'en' ? DATA_EN : DATA_LVRU

    return (
        <>
            <p className={ tableHeader }>{ t("times:times03") }</p>

            <Line />

            <TableHoursItem
                days={[
                    `${ t("times:times04") }`,
                    `${ t("times:times05") }`,
                    `${ t("times:times06") }`,
                    `${ t("times:times07") }`,
                    `${ t("times:times08") }`
                ]}
                hours={[
                    <JsonData textcontent={ languageDataType } section={"opening hours"} partId={"01"}/>,
                    <JsonData textcontent={ languageDataType } section={"opening hours"} partId={"02"}/>,
                    <JsonData textcontent={ languageDataType } section={"opening hours"} partId={"03"}/>,
                    <JsonData textcontent={ languageDataType } section={"opening hours"} partId={"04"}/>,
                    <JsonData textcontent={ languageDataType } section={"opening hours"} partId={"05"}/>
                ]}
            />

            <p className={ paragraphTableItem } style={{ paddingTop: '20px'}}>{ t("sections:section_contacts_part02") }</p>

            <BTN_variant01 />
        </>
    )
}

export default TableHoursController