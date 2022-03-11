import React, { Component } from 'react'


class Pelicula extends Component {

    constructor (props) {
        super(props);
        console.log("props", props)
        this.state = {
            peliculas: this.props.peliculas,
        };
    }

    cambiarPropiedad = () => {
        console.log("click");
        console.log("State", this.state.peliculas)
        let random = Math.floor(Math.random() * this.state.peliculas.length)
        //guardo el objeto
        const titulo = this.state.peliculas
        titulo[random].titulo = "titulo prueba";
        alert(random)
        this.setState({
            peliculas: titulo
        })
    }

    limpiarTitulos = () => {

        const { peliculas } = this.state;
        // console.log(peliculas)

        const tituloG = [...peliculas]
        const { titulo } = tituloG[0].titulo
        console.log("tituloG", tituloG)
        this.setState({
            peliculas: this.state.peliculas.titulo
        })

    }

    // marcarFavorita = (pelicula) => {
    //     console.log("e", pelicula)

    //     const { peliculas } = this.state;

    //     peliculas.forEach((i) => {
    //         console.log("i", peliculas[i])
    //         if (pelicula === i) {
    //             console.log(peliculas)
    //         }
    //     })
    // }

    marcarFavoritaHijo = (item, key) => {
        console.log("hijo", item, "key", key)
        this.props.marcarFavoritaPadre(item, key)
    };


    render() {
        console.log("props render", this.props);
        const { peliculas } = this.props
        console.log("destruc peliculas props", peliculas.titulo)

        return (
            <div id="articles" className="peliculas">
                <button onClick={ this.cambiarPropiedad }>Cambiar propiedad titulo</button>
                <button onClick={ this.limpiarTitulos }>Regresar titulos</button>

                { this.state.peliculas.map((item, key) => {
                    return (
                        <>
                            <article className="article-item" id="article-template" key={ key } style={ { width: "200px" } }>
                                <h2>{ item.titulo } </h2>
                                <div className="image-wrap">
                                    <img src={ item.imagen } alt={ item.titulo } />
                                </div>
                                <button onClick={ () => this.marcarFavoritaHijo(item.titulo, key) }>Marcar favorita</button>
                            </article>
                        </>
                    )
                })
                }
            </div >)
    }

}

export default Pelicula