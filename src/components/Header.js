import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import { NavLink, Link } from 'react-router-dom'

import '../assets/css/App.css'

class Header extends Component {

    render() {
        let usuario = 10;
        return (
            <header id="header">
                <div className="center">
                    {/* <!-- LOGO --> */ }
                    <div id="logo">
                        <img src={ logo } className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                        </span>
                    </div>

                    {/* <!-- MENU --> */ }
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/" className={ ({ isActive }) => isActive ? 'active' : "" }>Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pagina-1">Página 4</NavLink>
                            </li>
                            <li>
                                <Link to={ `/noExisteNRouter/${usuario}` }>Página 1</Link>
                            </li>
                            <li>
                                <NavLink to="/pruebas/">Página 2</NavLink>
                            </li>
                            <li>
                                <NavLink to="/navigate">Página 3</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ruta-prueba">Formulario</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/subRuta">Pagina 4</NavLink>
                            </li> */}
                        </ul>
                    </nav>
                    {/* <Outlet /> */ }
                    {/* <!--LIMPIAR FLOTADOS--> */ }
                    <div className="clearfix"></div>
                </div>
            </header >
        );
    }
}

export default Header