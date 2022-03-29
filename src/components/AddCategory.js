import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../assets/css/Input.css';
// import GifGrid from "./GifGrid";

const AddCategory = ({ setCategoria }) => {



    const [inputValue, setInputValue] = useState("") //si no se pone nada sale undefined

    const handelInputChange = (e) => {
        setInputValue(e.target.value)
    }

    //el enter del formulario es un evento normal
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviado rey")

        if (inputValue !== undefined && inputValue !== "") {
            // es un callback y guarda el estado anterior, para este caso el array
            //Si lo colocamos así pone primero el estado anterior y luego lo que le pasemos
            //al colocarlo al reves saldría de primero lo que digitemos en el input
            setCategoria(cat => [inputValue, ...cat])
            //reseteamos el valor
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>

                <input
                    type="text"
                    value={ inputValue }
                    onChange={ handelInputChange }
                    placeholder="Enter your Character"
                />
            </form>
            <h3>{ inputValue }</h3>
        </>
    )
}

AddCategory.propTypes = {
    setCategoria: PropTypes.func.isRequired,
}


export default AddCategory