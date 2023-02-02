import i18n from 'i18next'
import { FetchData } from '../../../JSON/fetchData'
import TransformFormat from '../../../JSON/transformFormat'
import { TransformArray } from '../../../JSON/transformArray'

const DataColumnPrivat = () => {
    const jsonData = FetchData()
    const arrayPrivateHoursEU = []
    const arrayPrivateHoursUS = []
          jsonData.forEach(function(obj) { arrayPrivateHoursEU.push( TransformArray(obj.private))})
          jsonData.forEach(function(obj) { arrayPrivateHoursUS.push( TransformArray(obj.private))}); void TransformFormat(arrayPrivateHoursUS)
    const arrayPrivateHours = i18n.language === 'en' ? arrayPrivateHoursUS : arrayPrivateHoursEU
    //console.table(arrayPrivateHoursEU)

    const isPrivateArrayEmpty = (target_1, target_2) => {

        return (
            <div style={{ display: target_1 === "" ? 'none' : 'flex' }} className={"cell--tripple"}>
                <div><p className={"textcontent--opening--hours"}>{ target_1 }</p></div>
                <div><p className={"textcontent--opening--hours"}>-</p></div>
                <div><p className={"textcontent--opening--hours"}>{ target_2 }</p></div>
            </div>
        )
    }

    return (
        <div className={"column roundedBorderRight"}>
            { arrayPrivateHours.map(( array, index ) => (
                <div key={ index } className={"cell"}>
                    <div className={"cell--dobble"}>
                        { isPrivateArrayEmpty(array[0], array[1]) }
                        { isPrivateArrayEmpty(array[2], array[3]) }
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DataColumnPrivat