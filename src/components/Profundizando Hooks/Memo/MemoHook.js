import React, { useState } from 'react'


const Memorize = () => {

    const [counter, setCounter] = useState(0);
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Memorize</h1>
            <h2>
                <small>Counter :</small>
            </h2>
            <hr />
            <button onClick={ () => { setCounter(counter + 1) } } >+1</button>
            <button onClick={ () => { setShow(!show) } } >Show/Hidden { JSON.stringify(show) } </button>
        </div>
    )
}

export default Memorize