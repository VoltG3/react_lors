import TableAccessible from './table.accessible'
import TableContracts from './table.contracts'
import TableHours from './table.hours'
import TableAppointment from "./table.appointment";

export default function Table() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 'var(--margin--img)'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '640px',
                width: '100%'
            }}>
                <TableHours />
                <TableAppointment />
                <TableContracts />
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                maxWidth: '640px',
                width: '100%'
            }}>
                <TableAccessible />
            </div>
        </div>
    )
}
