import {useState, useEffect} from 'react';

export const useFetch = (url) => {
    //States
    const [data, setData] = useState(null);
    const [method, setMethod] = useState(null);
    const [config, setConfig] =useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        }else{
            if(method === "DELETE"){
                setConfig({
                    method,
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                setMethod(method);
                setItemId(data)
            }
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const json = await res.json();
            setData(json)
        };
        fetchData();
    }, [url, callFetch]);


    useEffect(() => {
        let json;
        const httpRequest = async () => {
            if(method === "POST"){
                let fetchOption = [url, config];
                const res = await fetch(...fetchOption);
                json = res.json();
            }
            else {
                if(method === "DELETE"){
                    const deleteUrl = `${url}/${itemId}`
                    const res = await fetch(deleteUrl, config)
                    json = await res.json();
                }
            }
            setCallFetch(json)
        }
        httpRequest();

    }, [config, method, url]);
    return {data, httpConfig};
}