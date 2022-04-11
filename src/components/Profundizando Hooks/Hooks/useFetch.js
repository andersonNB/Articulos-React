import React, { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null, })

    //Con imagenes
    const [img, setImage] = useState({ img: null, name: null, });


    useEffect(() => {

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    loading: false,
                    error: null,
                    data: data,
                })
            })
    }, [url])

    useEffect(() => {
        fetch('https://www.breakingbadapi.com/api/characters/1')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setImage({
                    img: data.img,
                    name: data.name,
                })
            })
            .catch(console.warm)

    }, [])



    return [state, img];

}

export default useFetch