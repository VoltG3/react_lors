import i18n from 'i18next'
import { FetchData } from '../../../JSON/fetchData'
import TransformFormat from '../../../JSON/transformFormat'
import { TransformArray } from '../../../JSON/transformArray'

const DataColumnPublicHours = () => {
    const jsonData = FetchData()
    const arrayPublicHoursEU = []
    const arrayPublicHoursUS = []
          jsonData.forEach(function(obj) { arrayPublicHoursEU.push( TransformArray(obj.public))})
          jsonData.forEach(function(obj) { arrayPublicHoursUS.push( TransformArray(obj.public))}); void TransformFormat(arrayPublicHoursUS)
    const arrayPublicHours = i18n.language === 'en' ? arrayPublicHoursUS : arrayPublicHoursEU
    // console.table(arrayPublicHoursEU)

    const paragraph = "textContent--tabledata--item--small"

    const isPublicArrayEmpty = (target_1, target_2) => {

        return (
            <div style={{ display: target_1 === "" ? 'none' : 'flex' }} className={"cell--tripple"}>
                <div><p className={ paragraph }>{ target_1 }</p></div>
                <div><p className={ paragraph }>-</p></div>
                <div><p className={ paragraph }>{ target_2 }</p></div>
            </div>
        )
    }

    return (
        <div className={"column"}>
            { arrayPublicHours.map(( array, index ) => (
                <div key={ index } className={"cell"}>
                    <div className={"cell--dobble"}>
                        { isPublicArrayEmpty(array[0], array[1]) }
                        { isPublicArrayEmpty(array[2], array[3]) }
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DataColumnPublicHours