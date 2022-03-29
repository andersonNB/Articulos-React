import React from 'react'

const GifGridItem = (img) => {

    const { title, id, url } = img.img
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title }></img>
            {/* <p>{ title }</p> */ }
        </div>

    )
}

export default GifGridItem