import React from 'react';
import Slider from "./Slider";
import ContenidoSide from "./ContenidoSide";
import Peliculas from './Peliculas';
class Home extends React.Component {
    render() {
        return (
            <>
                <Slider title="Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"></Slider>
                <div className="center">
                    <ContenidoSide></ContenidoSide>
                    <Peliculas></Peliculas>
                </div>
            </>
        )
    }
}

export default Home;