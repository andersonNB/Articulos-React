import React from 'react'
import { useNavigate, Routes, Route, Outlet, Link } from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        console.log("Click")
        navigate('/ruta-prueba')
    }
    console.log("navigate", navigate)
    return (
        <>
            <h1>Dashboard useNavigate</h1>
            <button onClick={ handleClick }>Salir</button>

            <Routes>
                <Route path="subruta" element={ <h2>Etiqueta p</h2> }></Route>
            </Routes>

            <Link to="rutaHija">Ir a la ruta hija</Link>
            <br />
            <Link to="console">Mostrar por consola</Link>
            <Outlet />
        </>
    )
}

export default Dashboard