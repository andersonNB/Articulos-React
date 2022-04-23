import React, { useState, useCallback } from 'react'
import ShowIncrement from './ShowIncrement'

const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    //Como estaba
    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    //Con el hook useCallback
    const increment = useCallback((num) => {
        //Lo que tenemos dentro de los parentesis
        // de la función son sus argumentos
        //por lo que se puede "jugar" con ellos
        //Es decir interpretarlo de distintas maneras
        setCounter(c => c + num)
    }, [setCounter])

    return (
        <div>
            <h3>CallBackHook</h3>
            <p>{ counter } </p>
            <ShowIncrement increment={ increment } />

        </div>
    )
}

export default CallBackHook