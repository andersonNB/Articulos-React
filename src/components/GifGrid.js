import React, { useState } from 'react'
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ categoria }) => {

    // const [page, setPage] = useState(0)
    // const [images, setImages] = useState([])

    //Custom Hook
    //data es la propiedad y images es el sobrenombre que le doy
    const { data: images, loading } = useFetchGifs(categoria);


    //Si le paso un array vacio solo recarga una vez el componente
    //si le paso el valor a mostrar entre los corchetes recargara 
    //el componente en caso de hubiese cambios

    // useEffect(() => {
    //     getGifs(categoria).then(
    //         (imgs) => {
    //             setImages(imgs)
    //         }
    //     )
    // }, [categoria])


    function prueba() {
        console.log("si funciona de esta manera")
    }


    //AL estar la función ejecutandose al mismo nivel
    // se puede ver en el navegador
    //getGifs()

    prueba()

    return (
        <>
            <h3>{ categoria }</h3>

            <div className="card-grid">
                {/* { loading ? 'Cargando...' : 'Data Cargada' } */ }
                { loading && 'Cargando...' }
                { images.map((img) => {
                    return (
                        <GifGridItem
                            img={ img }
                            key={ img.id } />
                    )

                }) }

            </div>
            {/* <div className="card-grid">
               <h3>{ page } </h3>
            <button onClick={ () => setPage(page + 1) } >Click</button> 
                {

                    images.map((img) => {
                        return (
                            <GifGridItem
                                img={ img }
                                key={ img.id } />
                        )

                    })
                }

            </div> */}
        </>
    )
}

export default GifGrid