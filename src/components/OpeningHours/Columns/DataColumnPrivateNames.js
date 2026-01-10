import { useProjectData } from '../../../utils/DataContext'

const DataColumnPrivateNames = () => {
    const { data: jsonData, loading, error } = useProjectData()
    const paragraph = "textContent--tabledata--item--small"

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error loading data</div>

    const isNameArrayEmpty = (target) => {
        return target === "" ? "" : target
    }

    return (
        <div className={"column roundedBorderLeft"}>
            { jsonData &&
                jsonData.map(({ personal_private, id }) => (
                    <div key={ id } className="cell">
                        {
                            jsonData && personal_private.map((item, i) => (
                                <div key={ i } className={"cell--dobble"} style={{ width: '100%', alignItems: 'flex-start'}}>
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