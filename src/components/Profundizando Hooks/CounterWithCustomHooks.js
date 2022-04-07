import React from 'react'
import { useCounter } from "./Hooks/useCounter"

const CounterWithCustomHooks = () => {

    const { stateHook: counter, increment, decrement, reset, } = useCounter()
    return (
        <>
            <h1>Counter With CustomHooks</h1>
            <h2>{ counter } </h2>
            <hr />


            <button onClick={ () => increment(2) } >+1</button>
            <button onClick={ () => decrement(2) } >-1</button>
            <button onClick={ reset } >Reset</button>
        </>
    )
}

export default CounterWithCustomHooks