import React, { Component } from 'react';


class SeccionPruebas extends Component {

    pruebaMetodo = (x) => console.log(x)
    //formas de declarar el state en estos componentes

    //forma clasica
    constructor (props) {
        super(props);
        this.state = {
            contador: 0,
            giphy: null,
        }
    }

    //forma rápida
    /**
     * state = {
     * propiedad: 0
     * }
     */

    sumar = () => {
        console.log("Sumando")
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar = () => {
        console.log("Restando")
        // this.contador--;
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    componentDidMount() {
        this.giphy();
    }

    giphy = () => {
        const apikey = '6pLfEjnR18zDQ74fEZmBuvMgkUDqphyE';
        const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apikey}`);
        console.log(peticion)

        peticion.then(resolve => resolve.json())
            .then(({ data }) => {
                const { url } = data.images.original;
                console.log("data", data)
                //Creamos el elemento html
                // const img = document.createElement('img');
                // img.src = url;

                // // document.body.append(img);

                this.setState({
                    giphy: url,
                });
            })
            .catch(console.warn)
    }

    render() {

        return (
            <>

                <section id="content" style={ { border: "1px solid red" } }>
                    <h2 className="subheader">Últimos artículos</h2>
                    {
                        this.pruebaMetodo('algo')

                    }

                    <h2 className="subheader">Pruebas</h2>
                    <p>Contador: { this.state.contador } </p>
                    <p>
                        <input type="button" value="Sumar" onClick={ this.sumar.bind(this) } />
                        <input type="button" value="Restar" onClick={ this.restar } />
                    </p>

                    <p style={ { width: '500px', height: '500px', border: '1px solid salmon' } }>
                        {
                            this.state.giphy &&
                            <img src={ this.state.giphy } href={ this.state.gip }></img>
                        }
                    </p>
                </section>
            </>

        );
    }
}

export default SeccionPruebas;