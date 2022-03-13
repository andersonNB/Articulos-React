import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to="/blog" className="btn-white">Ir al blog</Link>
                    }
                </div>
            </>
        );
    }

}

export default Slider