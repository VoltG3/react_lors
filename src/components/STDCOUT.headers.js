
export const STDH = (props) => {
    return (
        <>
            { props.textcontent.map((data, key) => {
                return (
                    <p key={key}>
                        {
                            props.stock === data.stock? data.part : ""
                        }
                    </p>
                )
            })}
        </>
    )
}
