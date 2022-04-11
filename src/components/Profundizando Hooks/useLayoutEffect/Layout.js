import React, { useLayoutEffect, useRef, useState } from 'react'
//Custom hooks
import useFetch from '../Hooks/useFetch'
import { useCounter } from '../Hooks/useCounter'
//css
import './Layout.css'

const Layout = () => {

    const { stateHook, increment } = useCounter(1);

    const [state, img] = useFetch(`https://www.breakingbadapi.com/api/quotes/${stateHook}`);

    // console.log(state)
    const { data } = state
    console.log(data)
    // otra forma !!data && data[0];
    const { author, quote } = data !== null && data[0];

    // console.log(author, quote)
    console.log(img)

    const pTag = useRef()

    const [medida, setMedida] = useState({})

    useLayoutEffect(() => {
        console.log("useLayoutEffect-> component Layout")
        console.log(pTag.current.getBoundingClientRect())
        const parrafo = pTag.current.getBoundingClientRect()
        setMedida(parrafo)

    }, [quote])

    return (
        <div style={ { border: '1px dotted red', margin: '4px' } }>
            <h1>LayoutEffect</h1>

            <blockquote className="blockquote">
                <p ref={ pTag } >{ quote } </p>
                <footer>{ author }</footer>
            </blockquote>
            <pre>
                { JSON.stringify(medida, null, 3) }
            </pre>
            <button onClick={ increment } style={ { display: 'block', margin: '0px auto' } }>
                Siguiente frase
            </button>

            <img src={ img.img } alt={ img.name } style={ { height: '250px', width: '250px' } } />
        </div>
    )
}

export default Layout