
function LineShort(props) {

    return (
        <>
            <div style={{
                width: '63px',
                height: '4px',
                marginTop: '20px',
                marginBottom: '40px',
                background: props.color === "colorFirst"
                    ? 'var(--color--line--variant--v1)'
                    : props.color === "colorSecond"
                        ? 'var(--color--line--variant--v2)'
                        : props.color === "colorThird"
                            ? 'var(--color--line--variant--v3)'
                            : ''
            }}></div>
        </>
    )
}

export default LineShort