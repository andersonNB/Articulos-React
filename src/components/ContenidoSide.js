import React, { Component } from 'react';
import SeccionPruebas from "./SeccionPruebas";
import Sidebar from "./Sidebar";



class ContenidoSide extends Component {


    render() {
        return (
            <>
                <SeccionPruebas></SeccionPruebas>
                <Sidebar> </Sidebar>
            </>
        )
    }
}

export default ContenidoSide