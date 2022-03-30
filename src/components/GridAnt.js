import React, { Component } from 'react';
import { Col, Row, Divider, Modal, Form, Input, Button } from 'antd';
import 'antd/dist/antd.css'

class GridAnt extends Component {


    state = {
        visible: true,
    }

    handleSubmit = (data) => {
        console.log('Funcionando', { data })

    }


    handleSubmitFaield = () => {
        console.log('Fallo el envio de datos')
    }

    onClick = () => {
        console.log("Visible")
    }

    handelCancel = () => {
        this.setState({
            visible: false,
        })
    }

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

                <Divider>4 columna (6)</Divider>
                <Row gutter={ [16, 16] }>
                    <Col flex={ 1 } style={ { backgroundColor: 'yellow', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            1/6
                        </div>
                    </Col>
                    <Col flex={ 2 } style={ { backgroundColor: 'yellow', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            2/6
                        </div>
                    </Col>
                    <Col flex={ 3 } style={ { backgroundColor: 'yellow', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            3/6
                        </div>
                    </Col>
                </Row>

                <Divider>Modal</Divider>
                <Modal title="Basic Modal" visible={ this.state.visible } onCancel={ this.handelCancel }  >
                    <Form className="contenidoFormularioApp"
                        onFinish={ this.handleSubmit }
                        onFinishFailed={ this.handleSubmitFaield }
                        layout="vertical"
                        labelCol={ {
                            span: 8,
                        } }
                        wrapperCol={ {
                            span: 16,
                        } }
                        initialValues={ {
                            remember: true,
                        } }
                    >
                        <h3 style={ { margin: '10px' } }>Ingreso</h3>

                        <Form.Item
                            label="Usuario"
                            name="username"
                            wrapperCol={ {
                                offset: 4,
                                span: 16,
                            } }
                            labelCol={ {
                                offset: 4,
                            } }
                            rules={ [
                                {
                                    required: true,
                                    message: 'Ingrese su usuario!',
                                },
                            ] }
                        >
                            <Input placeholder="Ingrese su Usuario" />
                        </Form.Item>

                        <Form.Item
                            label="Documento"
                            name="document"
                            wrapperCol={ {
                                offset: 4,
                                span: 16,
                            } }
                            labelCol={ {
                                offset: 4,
                            } }
                            rules={ [
                                {
                                    required: true,
                                    message: 'Ingrese su número de documento',
                                },
                            ] }
                        >
                            <Input placeholder="Ingrese su documento" />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={ {
                                offset: 5,
                                span: 16,
                            } }
                        >
                            <Button type="primary" htmlType="submit" style={ { backgroundColor: '#194978' } }>
                                Ingresar
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }


}

export default GridAnt