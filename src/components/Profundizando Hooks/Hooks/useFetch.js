import React, { useState, useEffect, useRef } from 'react'

const useFetch = (url) => {


    const isMounted = useRef(true)

    const [state, setState] = useState({ data: null, loading: true, error: null, })

    //Con imagenes
    const [img, setImage] = useState({ img: null, name: null, });


    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])



    useEffect(() => {

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data: data,
                    })
                } else {
                    console.log("Setstate no se llamó")
                }
            })
    }, [url])

    useEffect(() => {
        const api = async () => {
            await fetch(`https://www.breakingbadapi.com/api/characters/1`)
                .then(response => {
                    response.json().then(data => {
                        console.log(data)
                        console.log(data[0].img)
                        console.log(data[0].name)

                        //De esta manera sin el hook useRef genera un error de performance
                        //De que un componente se desmonto antes de haberme montado
                        if (isMounted.current) {
                            // setTimeout(() => {
                            setImage({
                                img: data !== null && data[0].img,
                                name: data !== null && data[0].name,
                            })
                            // }, 4000)
                        } else {
                            console.log("Componente desmontado")
                        }



                    })
                })

                .catch(console.warm)
        }

        api()

    }, [])

    //Se puede hacer como esta arriba una dentro de otra o de esta otra forma
    //que es encadenando la promesa
    // .then(data => {
    //     console.log(data)
    //     setImage({
    //         img: data.img,
    //         name: data.name,
    //     })
    // })

    return [state, img];

}

export default useFetch