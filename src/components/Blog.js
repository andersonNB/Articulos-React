import React, { Component } from 'react';
import Slider from "./Slider";
import GifExpertApp from "./GifExpertApp";

class Blog extends Component {

    render() {
        return (
            <>
                <Slider title="Blog"></Slider>
                <div className="center">
                    <GifExpertApp></GifExpertApp>
                </div>
            </>
        )
    }

}

export default Blog;