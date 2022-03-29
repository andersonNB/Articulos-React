import react, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

    //Si queremos cambiar el estado de cierto elemento 
    //lo ideal es usar el hook useState
    // const categoria = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categoria, setCategoria] = useState(['Jack Skellington']);

    const handleAdd = () => {

        //concat o push o spread
        //setCategoria(...categoria,'One piece')
        setCategoria(categoria.concat('Samurai X'))
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={ handleAdd }>Agregar</button>
            <AddCategory setCategoria={ setCategoria }></AddCategory>
            {
                categoria.map((categoria) => {

                    // return <li key={ valor }> { valor } </li>
                    return <GifGrid key={ categoria } categoria={ categoria } />
                })
            }
        </>
    )
}

export default GifExpertApp;
