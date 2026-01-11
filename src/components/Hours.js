import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { useProjectData } from '../DataContext'
import { TransformFormat, TransformArray } from '../json'

import * as S from '../styles/styles.hours'

const DataColumnDays = ({ className = "" }) => {
    const { t } = useTranslation(["days"])
    const days = t('days:list_days', { returnObjects: true })

    if (!Array.isArray(days)) return null

    return (
        <div className={`column ${className}`}>
            {days.map((list_days, key) => (
                <div key={key} className={"cell"}>
                    <p>{t(list_days.item)}</p>
                </div>
            ))}
        </div>
    )
}

const DataColumnHours = ({ type, className = "" }) => {
    const { data: jsonData, loading, error } = useProjectData()

    if (loading) return <div className={`column ${className}`}><div className="cell">Loading...</div></div>
    if (error) return <div className={`column ${className}`}><div className="cell">Error</div></div>

    const hoursData = jsonData.map(obj => TransformArray(obj[type])).flat()
    const arrayHoursEU = hoursData
    const arrayHoursUS = TransformFormat(hoursData)
    const arrayHours = i18n.language === 'en' ? arrayHoursUS : arrayHoursEU

    const renderTimeRow = (target_1, target_2) => (
        <div style={{ display: (target_1 === "" && target_2 === "") ? 'none' : 'flex' }} className={"cell--tripple"}>
            <div><p>{target_1}</p></div>
            <div style={{ display: target_2 === "" ? 'none' : 'flex' }}><p>-</p></div>
            <div><p>{target_2}</p></div>
        </div>
    )

    return (
        <div className={`column ${className}`}>
            {arrayHours.map((array, index) => (
                <div key={index} className={"cell"}>
                    <div className={"cell--dobble"}>
                        {renderTimeRow(array[0], array[1])}
                        {renderTimeRow(array[2], array[3])}
                    </div>
                </div>
            ))}
        </div>
    )
}

const DataColumnNames = ({ type, className = "" }) => {
    const { data: jsonData, loading, error } = useProjectData()

    if (loading) return <div className={`column ${className}`}><div className="cell">Loading...</div></div>
    if (error) return <div className={`column ${className}`}><div className="cell">Error</div></div>

    const isNameArrayEmpty = (target) => target === "" ? "" : target

    return (
        <div className={`column ${className}`}>
            {jsonData && jsonData.map((person, id) => (
                <div key={id} className="cell">
                    {person[type] && person[type].map((item, i) => (
                        <div key={i} className={"cell--dobble"} style={{ width: '100%', alignItems: 'flex-start' }}>
                            <div style={type === 'personal_public' ? { maxWidth: '180px', width: '100%' } : { width: '100%' }}>
                                <p>{isNameArrayEmpty(item.line_01)}</p>
                                <p>{isNameArrayEmpty(item.line_02)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

const Hours = ({ variant }) => {
    const { t } = useTranslation(["tiles"])
    const { showWithReference, showWithoutReference, loading } = useProjectData()

    if (loading) return <div>Loading...</div>

    const HeaderPublic = <S.Header><p>{t("admissionTimes")}</p></S.Header>
    const HeaderPrivate = <S.Header><p>{t("payingTimes")}</p></S.Header>

    const renderPublicColumns = () => (
        <S.ColumnWrapper>
            <DataColumnDays className="roundedBorderLeft" />
            <DataColumnHours type="public" />
            <DataColumnNames type="personal_public" className="roundedBorderRight" />
        </S.ColumnWrapper>
    )

    const PublicHours = (
        <S.ColumnSet showContent={showWithReference}>
            {HeaderPublic}
            {renderPublicColumns()}
        </S.ColumnSet>
    )

    const PrivateHoursDesktop = (
        <S.ColumnSet showContent={showWithoutReference}>
            {HeaderPrivate}
            <S.ColumnWrapper>
                <DataColumnDays className="roundedBorderLeft" />
                <DataColumnHours type="private" />
                <DataColumnNames type="personal_private" className="roundedBorderRight" />
            </S.ColumnWrapper>
        </S.ColumnSet>
    )

    const PrivateHoursMobile = (
        <S.ColumnSet showContent={showWithoutReference}>
            {HeaderPrivate}
            <S.ColumnWrapper>
                <DataColumnDays className="roundedBorderLeft" />
                <DataColumnHours type="private" />
                <DataColumnNames type="personal_private" className="roundedBorderRight" />
            </S.ColumnWrapper>
        </S.ColumnSet>
    )

    if (variant === 'desktop-grid') {
        return (
            <>
                {PublicHours}
                {PrivateHoursDesktop}
            </>
        )
    }

    return (
        <S.Container>
            <S.DesktopMedia>
                {PublicHours}
                {PrivateHoursDesktop}
            </S.DesktopMedia>

            <S.MobileMedia>
                {PublicHours}
                {PrivateHoursMobile}
            </S.MobileMedia>
        </S.Container>
    )
}

export default Hours
