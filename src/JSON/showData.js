import React, { useEffect } from 'react'
import axios from 'axios'

export const ShowData = () => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        axios
            .get("./showData.json")
            .then((res) => setData(res.data))
            .catch(err => console.error("[ CERR ]", err))
    }, []); //console.log("[   JSON ]", data)

    const withReference = data.find(item => item.withReference);
    const withoutReference = data.find(item => item.withoutReference);
    const bothFalse = data.find(item => item.bothFalse);

    const withReferenceValue = withReference ? withReference.withReference[0].showContent : null;
    const withoutReferenceValue = withoutReference ? withoutReference.withoutReference[0].showContent : null;
    const bothFalseValue = bothFalse ? bothFalse.bothFalse[0].isOpening : null;

    return [withReferenceValue, withoutReferenceValue, bothFalseValue];
}