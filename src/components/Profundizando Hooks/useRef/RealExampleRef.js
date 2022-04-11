import React, { useState } from 'react'
import MultipleCustomHooks from "../../MultipleCustomHooks"

const RealExampleRef = () => {


    const [show, setShow] = useState(false);

    return (
        <div style={ { border: '1px solid red' } }>
            <h1>RealExampleRef</h1>
            { show && <MultipleCustomHooks /> }


            <button onClick={ () => { setShow(!show) } }>Mostrar</button>
        </div>

    )
}

export default RealExampleRef