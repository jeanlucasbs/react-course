import {useState, useEffect} from 'react'

//4- Custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    //5- refatorando POST
    const [config, setConfig] = useState(null)//vai configurar o metodo
    const [method, setMethod] = useState(null)//vai dizer qual método estamos utilizando
    const [callFecth, setCallFetch] = useState(false)//vai trazer os dados atulizados toda vez que add algo no sistema

    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if(method === 'POST') {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            setMethod(method);
        } else {
            if(method === 'DELETE'){
                setConfig({
                    method: 'DELETE',
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

            setData(json);
        };
        fetchData();
    },[url, callFecth]);


    //5- reatorando POST
    useEffect(() => {
        let json
        const httpRequest = async () =>{
            if(method === 'POST') {
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                json = res.json();
            }else{
                if(method === 'DELETE') {
                    const deleteUrl = `${url}/${itemId}`;
                    const res = await fetch(deleteUrl, config);
                    json = await res.json();
                }
            }
            setCallFetch(json);
        }

        httpRequest();
    },[config, method, url])

    return {data, httpConfig};
}