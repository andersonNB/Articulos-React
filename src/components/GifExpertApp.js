import react, { useState } from 'react';
import AddCategory from './AddCategory';

const GifExpertApp = () => {

    //Si queremos cambiar el estado de cierto elemento 
    //lo ideal es usar el hook useState
    // const categoria = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categoria, setCategoria] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {

        //concat o push o spread
        //setCategoria(...categoria,'One piece')
        setCategoria(categoria.concat('One piece'))
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={ handleAdd }>Agregar</button>
            <AddCategory setCategoria={ setCategoria }></AddCategory>
            {
                categoria.map((valor) => {

                    return <li key={ valor }> { valor } </li>
                })
            }
        </>
    )
}

export default GifExpertApp;
