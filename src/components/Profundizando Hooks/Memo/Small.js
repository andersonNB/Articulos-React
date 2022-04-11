import React, { memo } from 'react'

const Small = memo(({ values }) => {

    console.log("Renderizando")
    return (
        <div>{ values } </div>
    )
})

export default Small