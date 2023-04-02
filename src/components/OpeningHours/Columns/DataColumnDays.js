import { useTranslation } from 'react-i18next'

const DataColumnDays = () => {
    const [t] = useTranslation(["days"])
    const paragraph = "textContent--tabledata--item--small"

    return (
        <div className={"column roundedBorderLeft"}>
            { t('days:list_days', { returnObjects: true }).map((list_days, key) => (
                <div key={ key } className={"cell"}>
                    <p className={paragraph}>{ t(list_days.item) }</p>
                </div>
            ))}
        </div>
    )
}

export default DataColumnDays
