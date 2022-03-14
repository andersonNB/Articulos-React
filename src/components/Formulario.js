import React, { Component } from 'react'

class Formulario extends Component {


    nombreRef = React.createRef();
    apellidoRef = React.createRef();
    bioRef = React.createRef();
    radioH = React.createRef();
    radioM = React.createRef();
    radioOtro = React.createRef();


    state = {
        user: {},
    }


    recibirFormulario = (e) => {
        console.log(e)
        e.preventDefault();

        let genero = "";

        if (this.radioH.current.value === "hombre") {
            genero = "hombre"
        } else if (this.radioM.current.value === "mujer") {
            genero = "mujer"
        } else {
            genero = "otro"
        }

        console.log(genero)

        let user = {
            nombre: this.nombreRef.current.value,
            apellido: this.apellidoRef.current.value,
            biografia: this.bioRef.current.value,
            genero: genero,
        }

        console.log(user)

        this.setState({
            user: user,
        })
        console.log(this.state.user)
        console.log("state", this.state.user.nombre)
        // alert('Recibir Formulario')
    }




    render() {

        return (
            <>
                <h1 className="subheader">Formulario</h1>
                { this.state.user.nombre ?
                    (
                        <>
                            <h2>{ this.state.user.nombre } { this.state.user.apellido } </h2>
                            <p>{ this.state.user.biografia } </p>
                            <p>{ this.state.user.genero } </p>
                        </>
                    )
                    :
                    (
                        <p>Aún no se han enviado datos</p>
                    )
                }
                <form className="mid-form" onSubmit={ this.recibirFormulario } onChange={ this.recibirFormulario }>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" ref={ this.nombreRef } />
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input type="text" name="apellidos" ref={ this.apellidoRef } />
                    </div>

                    <div className="form-group">
                        <label htmlFor="bio">Biografia</label>
                        <textarea name="bio" ref={ this.bioRef }></textarea>
                    </div>

                    <div className="form-group radibuttons">
                        <input type="radio" name="genero" value="hombre" ref={ this.radioH } /> Hombre
                        <input type="radio" name="genero" value="mujer" ref={ this.radioM } /> Mujer
                        <input type="radio" name="genero" value="otro" ref={ this.radioOtro } /> Otro
                    </div>

                    <div className="clearfix"></div>

                    <input type="submit" value="Enviar" className="btn btn-success" />

                </form>
            </>
        )
    }
}

export default Formulario;