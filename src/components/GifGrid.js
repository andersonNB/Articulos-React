import React, { useState, useEffect } from 'react'

const GifGrid = ({ categoria }) => {

    const [page, setPage] = useState(0)

    const getGifs = async () => {

        const url = 'http://api.giphy.com/v1/gifs/search?q=Vegeta&limit=10&api_key=6pLfEjnR18zDQ74fEZmBuvMgkUDqphyE';
        const repuesta = await fetch(url);

        const { data } = await repuesta.json()


        const gifsApi = data.map((item => {
            return {
                id: item.id,
                title: item.title,
                url: item.images?.downsized_medium.url,
            }
        }))

        console.log(gifsApi)
    }

    function prueba() {
        console.log("si funciona de esta manera")
    }


    //AL estar la función ejecutandose al mismo nivel
    getGifs()

    prueba()

    return (
        <>
            <h3>{ categoria }</h3>
            <h3>{ page } </h3>
            <button onClick={ () => setPage(page + 1) } >Click</button>
        </>
    )
}

export default GifGrid