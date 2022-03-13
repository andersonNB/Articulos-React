import React, { Component } from 'react';
import Slider from "./Slider";
import Peliculas from './Peliculas';

class Blog extends Component {

    render() {
        return (
            <>
                <Slider title="Blog"></Slider>
                <div className="center">
                    <Peliculas></Peliculas>
                </div>
            </>
        )
    }

}

export default Blog;