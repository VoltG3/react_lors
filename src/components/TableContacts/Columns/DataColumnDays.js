import { useTranslation } from 'react-i18next'

export const DataColumnDays = () => {
    const [t] = useTranslation(["DAYS"])

    return (
        <div className={"column roundedBorderLeft"}>
            { t('DAYS:list_days', { returnObjects: true }).map((list_days, key) => (
                <div key={ key } className={"cell"}>
                    <p className={"textcontent--list--item"}>{ t(list_days.item) }</p>
                </div>
            ))}
        </div>
    )
}
