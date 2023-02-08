import { useTranslation } from 'react-i18next'

export const DataColumnDays = () => {
    const [t] = useTranslation(["DAYS"])
    const paragraph = "textcontent--tabledata--item--small"

    return (
        <div className={"column roundedBorderLeft"}>
            { t('DAYS:list_days', { returnObjects: true }).map((list_days, key) => (
                <div key={ key } className={"cell"}>
                    <p className={paragraph}>{ t(list_days.item) }</p>
                </div>
            ))}
        </div>
    )
}
