
export default function Hamburger(props) {

    return (
        <div
            className={"hamburgerDiv"}
        >
            <div style={{ fill: props.color }}>
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="10"></rect>
                    <rect y="20" width="100" height="10"></rect>
                    <rect y="40" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            </div>
        </div>
    )
}
