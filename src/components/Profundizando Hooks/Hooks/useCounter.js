import { useState } from "react"

export const useCounter = (initialState = 10) => {

    const [stateHook, setStateHook] = useState(initialState)


    const increment = (factor) => {
        setStateHook(stateHook + factor)
    }

    const decrement = (factor) => {
        setStateHook(stateHook - factor)
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
