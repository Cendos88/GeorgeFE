import { useEffect, useState } from "react";

const useFetch = (url) => {

const [data, setData] = useState(null);


    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJub3ZhbG9wYXRhMTEiLCJpYXQiOjE3MDA5ODg2MjEsImV4cCI6MTcwMjQ1OTg1MH0.x_LPJ6au3GCTwL9RFwoM8tlI0zindGEHoaCpN8gKKI4"
            }
        })
            .then(r => {
                return r.json();
            })
            .then((data) => {
                console.log(data)
                setData(data)
            })
    }, [url])
    return data;
}
export default useFetch