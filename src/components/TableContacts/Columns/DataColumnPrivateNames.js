import { FetchData } from '../../../JSON/fetchData'

const DataColumnPrivateNames = () => {
    const jsonData = FetchData()
    const paragraph = "textContent--tabledata--item--small"

    const isNameArrayEmpty = (target) => {
        let toReturn;
        target === "" ? toReturn = "" : toReturn = target
        return toReturn
    }

    return (
        <div className={"column roundedBorderLeft"}>
            { jsonData &&
                jsonData.map(({ personal_private, id }) => (
                    <div key={ id } className="cell">
                        {
                            jsonData && personal_private.map((item, i) => (
                                <div key={ i } className={"cell--dobble"} style={{ width: '100%', paddingLeft: '20px'}}>
                                    <p className={ paragraph }>{ isNameArrayEmpty(item.line_01) }</p>
                                    <p className={ paragraph }>{ isNameArrayEmpty(item.line_02) }</p>
                                </div>
                            ))
                        }
                    </div>
                ))}
        </div>
    )
}

export default DataColumnPrivateNames