import TableAccessible from "./table.accessible";
import TableContracts from "./table.contracts";
import TableTimesSmall from "./table.timesSmall";

export default function Table() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <div>
                <TableTimesSmall />
                <TableContracts />
            </div>

            <div>
                <TableAccessible />
            </div>
        </div>
    )
}