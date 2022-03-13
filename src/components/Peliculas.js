import React, { Component } from 'react'
import Pelicula from './Pelicula';

class Peliculas extends Component {

    state = {
        peliculas: [
            {
                titulo: "Batman vs Superman",
                imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/07/batman-v-superman-ultimate-edition.jpg?itok=-2WGWfYG",
            },
            {
                titulo: "Spiderman",
                imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2021/11/spider-man-no-way-home-2543495.jpg?itok=m8Oy1sxf",
            },
            {
                titulo: "World Of Warcraft",
                imagen: "https://i.pinimg.com/564x/4e/b0/ed/4eb0ed4c7c461f91adb694344bd0f292.jpg",
            }
        ],
        nombre: "Anderson Navarro",
        nombrePelicula: null,
        key: null,

    }

    marcarFavoritaPadre = (item, key) => {
        console.log("padre", item, key)
        this.setState({
            nombrePelicula: item,
            key: key + 1,
        })
    }


    componentDidMount() {
        // alert("Componente did Mount")
    }

    componentWillMount() {
        // alert("Componente will Mount")
    }

    render() {
        // alert("render")
        console.log("key", this.state.key)
        console.log(this.marcarFavoritaPadre)
        console.log("nombrePelicula", this.state.nombrePelicula)
        return (
            // id="content"
            <div className="peliculas" style={ { height: "65rem", border: "1px solid blue" } }>
                <h2 className="subheader" style={ { border: "1px solid red" } }>Peliculas</h2>
                <p>Selección de las peliculas favoritas de { this.state.nombre } </p>

                { this.state.nombrePelicula ?
                    (<p>
                        <strong>la pelicula favorita es: { this.state.key } . { this.state.nombrePelicula }</strong>
                    </p>) : (
                        <p>
                            <strong>No se a seleccionado la pelicula</strong>
                        </p>
                    )
                }
                <Pelicula peliculas={ this.state.peliculas } marcarFavoritaPadre={ this.marcarFavoritaPadre }></Pelicula>
            </div>
        )
    }

}

export default Peliculas;