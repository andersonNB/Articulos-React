import React, { Component } from 'react';


class Slider extends Component {


    constructor (props) {

        console.log(props)

        super(props);

        this.state = {

        }
    }


    render() {
        console.log("Render", this.props)

        return (
            <>
                <div id="slider" className="slider-big">
                    <h1>{ this.props.title }</h1>
                    { this.props.title != "Blog" &&
                        <a href="#" className="btn-white">Ir al blog</a>
                    }
                </div>
            </>
        );
    }

}

export default Slider