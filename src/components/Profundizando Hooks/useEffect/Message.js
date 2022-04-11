import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })

    const { x, y } = coords

    useEffect(() => {
        //EL cuerpo del effect
        console.log("Componente montado re-crack")
        //Creamos una funcion para tener control de la misma, ya que 
        //si dejamos en función de flecha como esta controlar esa acción
        // es más complicado
        const mouseMove = (e) => {

            // const { x, y } = e

            const coordenadas = { x: e.x, y: e.y };

            setCoords(coordenadas)
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            //Fase de limpieza
            console.log("Componente desmontado my papu")
            window.removeEventListener('mousemove', mouseMove)

        }
        //A la propiedad/función/objeto por la cual estaremos escuchando
    }, [])


    return (
        <>
            <div>Se cargo el componente</div>
            <h3>x:{ x } </h3>
            <h3>y:{ y } </h3>
        </>
    )
}

export default Message