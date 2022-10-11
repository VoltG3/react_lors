import {renderToString} from "react-dom/server";

export const GetHeader = (props) => {
    return (
        <>
            { props.textcontent.map((data, key) => {
                let k = renderToString(key)
                console.log("props.part", props.part, "key", k)

                return (
                    <p key={key}>
                        {
                            props.part === k? data.stock : ""
                        }
                    </p>
                )
            })}
        </>
    )
}
