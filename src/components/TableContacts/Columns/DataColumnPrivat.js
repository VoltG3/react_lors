import i18n from 'i18next'
import { FetchData } from '../../JSON/fetchData'
import TransformFormat from '../../JSON/transformFormat'
import { TransformArray } from '../../JSON/transformArray'

const DataColumnPrivat = () => {
    const jsonData = FetchData()
    const arrayPrivateHoursEU = []
    const arrayPrivateHoursUS = []
          jsonData.forEach(function(obj) { arrayPrivateHoursEU.push( TransformArray(obj.private))})
          jsonData.forEach(function(obj) { arrayPrivateHoursUS.push( TransformArray(obj.private))}); void TransformFormat(arrayPrivateHoursUS)
    const arrayPrivateHours = i18n.language === 'en' ? arrayPrivateHoursUS : arrayPrivateHoursEU
    console.table(arrayPrivateHoursEU)

    return (
        <div className={"column"}>
            { arrayPrivateHours.map(( array, index ) => (
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

export default DataColumnPrivat