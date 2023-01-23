import i18n from 'i18next'
import { FetchData } from '../../JSON/fetchData'
import TransformFormat from '../../JSON/transformFormat'
import { TransformArray } from '../../JSON/transformArray'

const DataColumnPublic = () => {
    const jsonData = FetchData()
    const arrayPublicHoursEU = []
    const arrayPublicHoursUS = []
          jsonData.forEach(function(obj) { arrayPublicHoursEU.push( TransformArray(obj.public))})
          jsonData.forEach(function(obj) { arrayPublicHoursUS.push( TransformArray(obj.public))}); void TransformFormat(arrayPublicHoursUS)
    const arrayPublicHours = i18n.language === 'en' ? arrayPublicHoursUS : arrayPublicHoursEU
    console.table(arrayPublicHoursEU)

    return (
        <div className={"column"}>
            { arrayPublicHours.map(( array, index ) => (
                <div key={ index } className={"column"}>
                    <div className={"cell"}>
                        <div className={"cell--dobbel"}>
                            <div className={"cell--tripple"}>
                                <div><p>{ array[0] }</p></div>
                                <div><p>-</p></div>
                                <div><p>{ array[1] }</p></div>
                            </div>
                            <div className={"cell--tripple"}>
                                <div><p>{ array[2] }</p></div>
                                <div><p>-</p></div>
                                <div><p>{ array[3] }</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DataColumnPublic