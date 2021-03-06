import React, { Component } from 'react';
import { Row, Col } from 'antd'
import '../assets/css/Peliculas.css';

class Pelicula extends Component {

    constructor (props) {
        super(props);
        console.log("props", props)
        this.state = {
            peliculas: this.props.peliculas,
            img: null,
            imageApi: null,
            nameApi: "",
            nextPage: 1,
        };
    }



    componentDidMount() {
        this.getCharacteres();
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



    getCharacteres = async () => {
        console.log("NExt page en el metodo", this.state.nextPage)
        this.setState({
            nextPage: this.state.nextPage + 1,
        })

        const peticion = await fetch(`https://rickandmortyapi.com/api/character/${this.state.nextPage}`)
            .then((res) => res.json())
        console.log("peticion", peticion)

        const { image, name } = peticion;

        console.log("Imagen", image)
        this.setState({
            imageApi: image,
            nameApi: name,
        });

    }

    // nextPage = () => {
    //     console.log("click")
    // }


    render() {
        console.log("props render", this.props);
        const { peliculas } = this.props
        console.log("destruc peliculas props", peliculas.titulo)
        console.log("NExt page en el render", this.state.nextPage)
        return (

            <div id="articles" className="peliculas">
                <button onClick={ this.cambiarPropiedad }>Cambiar propiedad titulo</button>
                <button onClick={ this.limpiarTitulos }>Regresar titulos</button>

                { this.state.peliculas.map((item, key) => {
                    return (
                        <article className="article-item" id="article-template" key={ key + 1 } style={ { width: "200px" } }>
                            <Row>
                                <Col xs={ 24 } md={ 12 } lg={ 8 } >
                                    <h2>{ item.titulo } </h2>
                                    <div className="image-wrap">
                                        <img src={ item.imagen } alt={ item.titulo } />
                                    </div>
                                </Col>
                            </Row>
                            <button onClick={ () => this.marcarFavoritaHijo(item.titulo, key) }>Marcar favorita</button>
                        </article>
                    )
                })
                }
                <div style={ { border: "1px solid red" } } className="imageApi">
                    { this.state.imageApi ?
                        (
                            <>
                                <img src={ this.state.imageApi }></img>
                                <p> <b>{ this.state.nameApi }</b> </p>
                            </>

                        )
                        :
                        (
                            <p>A??n no se han enviado datos</p>
                        )
                    }
                    <button onClick={ this.getCharacteres.bind(this) }>Siguiente</button>
                </div>
            </div >)
    }

}

export default Pelicula