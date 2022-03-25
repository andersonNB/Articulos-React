import React from 'react'

const GifGridItem = (img) => {

    const { title, id, url } = img.img
    return (
        <div>
            <img src={ url } alt={ title }></img>
            <p>{ title }</p>
        </div>

    )
}

export default GifGridItem