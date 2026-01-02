import i18n from 'i18next'
import { useFetchData } from '../../../JSON/fetchData'
import TransformFormat from '../../../JSON/transformFormat'
import { TransformArray } from '../../../JSON/transformArray'

const DataColumnPrivateHours = () => {
    const { data: jsonData, loading, error } = useFetchData()

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error loading data</div>

    const arrayPrivateHoursEU = jsonData.map(obj => TransformArray(obj.private)).flat()
    const arrayPrivateHoursUS = TransformFormat(jsonData.map(obj => TransformArray(obj.private)).flat())
    const arrayPrivateHours = i18n.language === 'en' ? arrayPrivateHoursUS : arrayPrivateHoursEU

    const paragraph = "textContent--tabledata--item--small"

    const isPrivateArrayEmpty = (target_1, target_2) => {

        return (
            <div style={{ display: target_1 === "" ? 'none' : 'flex' }} className={"cell--tripple"}>
                <div><p className={ paragraph }>{ target_1 }</p></div>
                <div><p className={ paragraph }>-</p></div>
                <div><p className={ paragraph }>{ target_2 }</p></div>
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

export default DataColumnPrivateHours