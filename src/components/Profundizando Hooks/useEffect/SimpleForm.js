import React from 'react'
import { useEffect, useState } from 'react'

//Components
import Message from './Message'

const SimpleForm = () => {



    const [formState, setFormState] = useState({ name: "", email: "", })

    const { name, email } = formState;


    //Efecto en general
    useEffect(() => {
        console.log("Desde el UseEffect para el componente en general")
    }, [])

    //Efectos en especifico
    useEffect(() => {
        console.log("useEffect para el cambio del name")
    }, [name])
    //Efectos en especifico
    useEffect(() => {
        console.log("useEffect para el cambio del email")
    }, [email])



    useEffect(() => {

        // window.addEventListener()
        console.log("useEffect para el cambio del email")
    }, [])

    const handleInputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)

        setFormState({
            ...formState,
            //e.target.name tiene el valor del name del input, que sera igual al nombre del objeto para este caso
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <hr />
            <h1>useEffect</h1>


            <input type="text" name="name" placeholder="nombre" autoComplete="off" value={ name } onChange={ handleInputChange } />
            <input type="text" name="email" placeholder="ejemplo@gmail.com" autoComplete="off" value={ email } onChange={ handleInputChange } />

            <hr />
            { name }
            { email }

            <h2>Limpieza del useEffect</h2>
            { name === '123' && <Message /> }


        </>
    )
}

export default SimpleForm