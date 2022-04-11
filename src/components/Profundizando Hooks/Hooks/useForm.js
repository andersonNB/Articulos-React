import React, { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState)


    const handleInputChange = ({ target }) => {
        console.log(target)
        setValues({
            ...values,
            //e.target.name tiene el valor del name del input, que sera igual al nombre del objeto para este caso
            [target.name]: target.value
        })
    }

    const handleClicReset = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            //e.target.name tiene el valor del name del input, que sera igual al nombre del objeto para este caso
            name: "",
            email: "",
            password: "",
        })
    }


    return [values, handleInputChange, handleClicReset]
}

