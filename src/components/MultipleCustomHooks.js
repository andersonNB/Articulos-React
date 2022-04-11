import React from 'react'
import { Spin } from 'antd';
//Custom hooks
import useFetch from './Profundizando Hooks/Hooks/useFetch'
import { useCounter } from './Profundizando Hooks/Hooks/useCounter'

const MultipleCustomHooks = () => {

    const { stateHook, increment } = useCounter(1);

    const [state, img] = useFetch(`https://www.breakingbadapi.com/api/quotes/${stateHook}`);
    // console.log(state)
    const { loading, error, data } = state
    console.log(data)
    // otra forma !!data && data[0];
    const { author, quote } = data !== null && data[0];

    // console.log(author, quote)
    console.log(img)
    return (
        <div style={ { border: '1px dotted red', margin: '4px' } }>
            <h1>Breaking Bad</h1>
            { loading === true &&
                <Spin />
            }
            <blockquote>
                <p>{ quote } </p>
                <footer>{ author }</footer>
            </blockquote>

            <button onClick={ increment } >
                Siguiente frase
            </button>

            <img src={ img.img } alt={ img.name } />
        </div>
    )
}

export default MultipleCustomHooks