import React from 'react'

const ShowIncrement = React.memo(({ increment }) => {

    console.log('Me volvi a generar D:')
    return (
        <button onClick={ () => increment(5) }>Incrementar</button>
    )
})

export default ShowIncrement