import React, { useState } from 'react'
import CounterWithCustomHooks from "../CounterWithCustomHooks"
import SimpleForm from "../useEffect/SimpleForm"
import FormWithCustomHook from "../useEffect/FormWithCustomHook"
import MultipleCustomHooks from "../../MultipleCustomHooks"
import FocusScreen from "../useRef/FocusScreen"
import Layout from "../useLayoutEffect/Layout"
import Memorize from "../Memo/Memorize"
import MemoHook from "../Memo/MemoHook"
import CallBackHook from "../Memo/CallBackHook"
import { Padre } from "../07-tarea-memo/Padre"
import IntroReducer from "../useReducer/IntroReducer"
import TodoApp from "../useReducer/TodoApp"

const CounterApp = () => {


    const [counter, setcounter] = useState({ counter1: 10, counter2: { valor1: 1, valor2: 2 }, counter3: 30, counter4: 40, counter5: 50 })



    const { counter1, counter2 } = counter

    const { prop1, valor2 } = counter2

    const x = counter.counter2

    console.log(prop1)

    return (
        <>
            <h1>Counter { counter1 } </h1>
            <h1>Counter { prop1 } </h1>
            <h1>Counter { valor2 } </h1>
            <h1>Counter { counter.counter3 } </h1>
            <h1>Counter { counter.counter4 } </h1>
            <h1>Counter { counter.counter5 } </h1>
            <hr />
            {/* Aqui buscaba cambiar la propiedad de un objeto que esta dentro de otro objeto mediante el state ...counter2, prop1: prop1 + 1 */ }
            <button onClick={ () => setcounter({ ...counter, counter1: counter1 + 1, ...counter.counter2.valor1, counter3: counter.counter3 + 1, }) }>+1</button>
            <hr />

            <CounterWithCustomHooks />
            <SimpleForm />
            <FormWithCustomHook />

            <MultipleCustomHooks />

            <FocusScreen />


            <Layout />

            <Memorize />

            <MemoHook />

            <CallBackHook />

            <Padre />


            <IntroReducer />

            <TodoApp />

        </>
    )
}

export default CounterApp