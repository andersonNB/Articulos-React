import React from 'react'
import { useForm } from '../Hooks/useForm'


const FormWithCustomHook = () => {

    //Como estaba
    //const [formState, setFormState] = useState({ name: "", email: "", password: "", })

    //Utilizando un custom Hook
    const [formValue, handleInputChange, handleClicReset] = useForm({ name: "", email: "", password: "", })

    const { name, email, password } = formValue;



    // const handleInputChange = (e) => {
    //     console.log(e.target.name)
    //     console.log(e.target.value)

    //     //De esta manera es dinamico la asignación de cada propiedad mediante el evento
    //     setFormState({
    //         ...formValue,
    //         //e.target.name tiene el valor del name del input, que sera igual al nombre del objeto para este caso
    //         [e.target.name]: e.target.value
    //     })
    // }


    return (
        <>
            <hr />
            <h1>FormWithCustomHook</h1>

            <form name="formularioHook">
                <input type="text" name="name" placeholder="nombre" autoComplete="off" value={ name } onChange={ handleInputChange } />
                <input type="text" name="email" placeholder="ejemplo@gmail.com" autoComplete="off" value={ email } onChange={ handleInputChange } />
                <input type="password" name="password" placeholder="*****" value={ password } onChange={ handleInputChange } />
                <button onClick={ handleClicReset }>Resetear</button>
            </form>


            <hr />
            { name }
            <br />
            { email }
            <br />
            { password }

        </>
    )
}

export default FormWithCustomHook