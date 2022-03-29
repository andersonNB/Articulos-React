import React, { Component } from 'react';
import { Col, Row, Divider } from 'antd';
import 'antd/dist/antd.css'

class GridAnt extends Component {


    render() {
        return (
            <>
                <h1>Sistem Grid</h1>
                <Divider>1 columna (24)</Divider>

                <Row>
                    <Col span={ 24 }>
                        <div style={ { backgroundColor: '#61DAFB', color: 'black' } }> Columna</div>
                    </Col>
                </Row>
                <Divider>2 columna (12)</Divider>
                <Row gutter={ [48, 8] }>
                    <Col span={ 12 } >
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            Columna 2
                        </div>
                    </Col>
                    <Col span={ 12 } >
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            Columna 2.1
                        </div>
                    </Col>
                </Row>
                <Divider>3 columna (8)</Divider>
                <Row gutter={ [48, 8] }>
                    <Col span={ 8 } style={ { backgroundColor: 'purple', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            Columna 2.1
                        </div>
                    </Col>
                    <Col span={ 8 } style={ { backgroundColor: 'green', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            Columna 2.1
                        </div>
                    </Col>
                    <Col span={ 8 } style={ { backgroundColor: 'yellow', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            Columna 2.1
                        </div>
                    </Col>
                </Row>

                <Divider>4 columna (6)</Divider>
                {/* horizontal, vertical */ }
                <Row gutter={ [48, 8] }>
                    <Col span={ 6 } style={ { backgroundColor: 'yellow', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            Columna 2.1
                        </div>
                    </Col>
                    <Col span={ 6 } style={ { backgroundColor: 'yellow', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            Columna 2.1
                        </div>
                    </Col>
                    <Col span={ 6 } style={ { backgroundColor: 'yellow', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            Columna 2.1
                        </div>
                    </Col>
                    <Col span={ 6 } style={ { backgroundColor: 'yellow', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            Columna 2.1
                        </div>
                    </Col>
                </Row>
            </>
        )
    }


}

export default GridAnt