import { useState } from "react"

export const useCounter = (initialState = 10) => {

    const [stateHook, setStateHook] = useState(initialState)


    // CounterWithCustomHooks
    const increment = () => {
        setStateHook(stateHook + 1)
    }

    // CounterWithCustomHooks
    const decrement = () => {
        setStateHook(stateHook - 1)
    }

    const reset = () => {
        setStateHook(initialState)
    }

    //Extrayemos la logica del custom Hook
    return {
        stateHook,
        increment,
        decrement,
        reset,
    }
}
