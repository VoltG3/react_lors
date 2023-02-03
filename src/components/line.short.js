
function LineShort(props) {

    return (
        <>
            <div style={{
                width: '43px',
                height: '4px',
                marginTop: '22px',
                marginBottom: '44px',
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