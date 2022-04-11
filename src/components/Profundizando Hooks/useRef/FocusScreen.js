import React, { useRef } from 'react'
import RealExampleRef from './RealExampleRef'

const FocusScreen = () => {


    const Inputref = useRef()

    console.log(Inputref)

    const handleClick = (e) => {
        e.preventDefault();
        Inputref.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>

            <input placeholder="nombre" ref={ Inputref } />

            <button onClick={ handleClick } >Enviar</button>

            <RealExampleRef />
        </>
    )
}

export default FocusScreen