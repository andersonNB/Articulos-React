import React, { Component } from 'react';
import SeccionPruebas from "./SeccionPruebas";
import Sidebar from "./Sidebar";
import Peliculas from './Peliculas'


class ContenidoSide extends Component {


    render() {
        return (
            <>
                <SeccionPruebas></SeccionPruebas>
                <Sidebar> </Sidebar>
                <Peliculas></Peliculas>
            </>
        )
    }
}

export default ContenidoSide