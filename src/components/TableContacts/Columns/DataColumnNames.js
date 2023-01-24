import { FetchData } from '../../../JSON/fetchData'

const DataColumnNames = () => {
    const jsonData = FetchData()

    const isEmpty = (target) => {
        let toReturn;
        target === "" ? toReturn = "-" : toReturn = target
        return toReturn
    }

    return (
        <div className={"column"}>
            { jsonData &&
                jsonData.map(({ personal, id }) => (
                    <div key={ id } className="cell">
                        {
                            jsonData && personal.map((item, i) => (
                                <div key={ i } className={"cell--dobbel"}>
                                    <p>{ isEmpty(item.line_01) }</p>
                                    <p>{ isEmpty(item.line_02) }</p>
                                </div>
                            ))
                        }
                    </div>
                ))}
        </div>
    )
}

export default DataColumnNames