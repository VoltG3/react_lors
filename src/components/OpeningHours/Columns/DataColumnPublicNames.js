import { FetchData } from '../../../JSON/fetchData'

const DataColumnPublicNames = () => {
    const jsonData = FetchData()
    const paragraph = "textContent--tabledata--item--small"

    const isNameArrayEmpty = (target) => {
        let toReturn;
        target === "" ? toReturn = "" : toReturn = target
        return toReturn
    }

    return (
        <div className={"column roundedBorderRight"}>
            { jsonData &&
                jsonData.map(({ personal_public, id }) => (
                    <div key={ id } className="cell">
                        {
                            jsonData && personal_public.map((item, i) => (
                                <div key={ i } className={"cell--dobble"} style={{ width: '100%', alignItems: 'center'}}>
                                    <div style={{ maxWidth: '120px', width: '100%' }}>
                                        <p className={ paragraph }>{ isNameArrayEmpty(item.line_01) }</p>
                                        <p className={ paragraph }>{ isNameArrayEmpty(item.line_02) }</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))}
        </div>
    )
}

export default DataColumnPublicNames