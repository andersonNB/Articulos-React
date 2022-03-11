import React from 'react'
import { useParams } from 'react-router-dom';

const MiComponentePrueba = () => {
    let params = useParams()
    console.log(params)
    return (
        <h1>MiComponentePrueba id: { params.id } </h1>
    )
}

export default MiComponentePrueba