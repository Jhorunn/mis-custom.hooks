import { useEffect, useState, useRef } from "react"


export const useFetch = (url) => {

    const [state, setState] = useState({data: null, loadding: true, error: null})

    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({
            loadding: true,
            error: null,
            data: null,
        });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if(isMounted){
                    setState({
                        loadding: false,
                        error: null,
                        data: data,
                    })
                }

            });

    }, [url])

    return state;

}
