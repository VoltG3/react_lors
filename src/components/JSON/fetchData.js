import React, { useEffect } from 'react'
import axios from 'axios'

export const FetchData = () => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        axios
            .get("./data.json")
            .then((res) => setData(res.data))
            .catch(err => console.error("[ CERR ]", err))
    }, []); console.log("[   JSON ]", data)

    return data
}
