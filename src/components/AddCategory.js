import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../assets/css/Input.css';

const AddCategory = ({ setCategoria }) => {



    const [inputValue, setInputValue] = useState("") //si no se pone nada sale undefined

    const handelInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviado rey")

        if (inputValue !== undefined && inputValue !== "") {
            // es un calback y guarda el estado anterior, para este caso el array
            setCategoria(cat => [...cat, inputValue])
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
                />
            </form>
            <h2>{ inputValue }</h2>
        </>
    )
}

AddCategory.propTypes = {
    setCategoria: PropTypes.func.isRequired,
}


export default AddCategory