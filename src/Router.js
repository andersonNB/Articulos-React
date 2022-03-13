import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
// import SeccionPruebas from './components/SeccionPruebas'
import Formulario from './components/Formulario'
// import Peliculas from "./components/Peliculas";
// import App from "./App";
import Error from './components/Error'
import Header from './components/Header';
import ContenidoSide from './components/ContenidoSide'
import MiComponentePrueba from './components/MiComponentePrueba';
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Blog from './components/Blog'

class Router extends Component {


    render() {
        return (
            // Configurar rutas y paginas
            <>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={ <Home /> } />
                        <Route path="/blog" element={ <Blog /> } />
                        <Route path="/ruta-prueba" element={ <Formulario /> } />
                        <Route exact path="/pagina-1" element={ <h1 className="subheader">Texto Creado desde la misma ruta</h1> } />
                        <Route path="/pruebas/:id" element={ <MiComponentePrueba /> } />
                        <Route path="/navigate" element={ <Navigate to="/pagina-1" /> } />
                        {/* De esta manera colocamos rutas hijas que deriven de una ruta en este caso cualquiera que empiece por /dashboard */ }
                        <Route path="/dashboard/*" element={ <Dashboard /> } />
                        {/* Subrutas de otra manera */ }
                        <Route path="/subRuta" element={ <Dashboard /> }>
                            <Route path="rutaHija" element={ <h3>Soy una ruta hija desde el router</h3> } />
                        </Route>
                        <Route path="/componenteDesdeRuta" element={ <Dashboard /> }>
                            <Route path="console" element={ () => { console.log("De esta manera si se puede") } } />
                        </Route>
                        <Route path="*" element={ <Error /> } />
                    </Routes>
                </BrowserRouter>

            </>

        );
    }
}

export default Router;