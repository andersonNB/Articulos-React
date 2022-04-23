import React, { useState, useMemo } from 'react'


const MemoHook = () => {

    const [counter, setCounter] = useState(5000);
    const [show, setShow] = useState(false);


    const procesoPesado = (iteraciones) => {
        for (let index = 0; index < iteraciones; index++) {
            console.log("Iteraciones");
        }
    }

    const memoizacion = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h2>
                <small>Counter :{ counter } </small>
            </h2>
            <hr />
            {/* { procesoPesado(counter) } */ }
            { memoizacion }
            <button onClick={ () => { setCounter(counter + 1) } } >+1</button>
            <button onClick={ () => { setShow(!show) } } >Show/Hidden { JSON.stringify(show) } </button>
        </div>
    )
}

export default MemoHook