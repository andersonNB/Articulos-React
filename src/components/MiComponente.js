import React from "react";


class MiComponente extends React.Component {

    //Se encarga de mostar información por pantalla
    render() {

        let receta = {
            nombre: 'Pizza',
            ingredients: ['tomates', 'queso', 'jamon cocido'],
            calorias: 400,
        }


        return (
            <div style={ { border: '1px solid yellow' } }>
                <h1>Render Componente de clase</h1>
                <h2>Desde un fragment</h2>
                <h3>
                    {
                        receta.ingredients.map((item, i) => {
                            console.log(item, i)
                            return (<h3 key={ i } > { item }</h3>);
                        })
                    }
                </h3>
            </div>
        );

    }
}

export default MiComponente;