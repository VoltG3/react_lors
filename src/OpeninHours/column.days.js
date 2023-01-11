
const ColumnDays  = ({ days }) => (
    <div className={"column"}>
        { days.map((day) => (
            <div className={"cell"}>
                <p key={ day }>{ day }</p>
            </div>
        ))}
    </div>
)

export default ColumnDays