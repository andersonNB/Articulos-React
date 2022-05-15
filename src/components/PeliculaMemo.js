import React from 'react'

const PeliculaMemo = () => {


    const getCharacteres = async () => {
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

    return (
        <div>PeliculaMemo</div>
    )
}

export default PeliculaMemo