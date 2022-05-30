import React, { Component } from 'react';
import { Col, Row, Divider, Modal, Form, Input, Button, Space, Select, DatePicker, Upload, Table } from 'antd';
import { UploadOutlined, } from '@ant-design/icons';
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

    dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    render() {
        return (
            <>
                <h1>Sistem Grid</h1>
                <Divider>1 columna (24)</Divider>

                <Row>
                    <Col xs={ 12 } sm={ 24 }>
                        <div style={ { backgroundColor: '#61DAFB', color: 'black' } }> Columna</div>
                    </Col>
                </Row>
                <Divider>2 columna (12)</Divider>
                <Row gutter={ [48, 8] }>
                    <Col xs={ 24 } sm={ 12 } >
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            Columna 2
                        </div>
                    </Col>
                    <Col xs={ 24 } sm={ 12 } >
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            Columna 2.1
                        </div>
                    </Col>
                </Row>
                <Divider>3 columna (8) y 1 de (9)</Divider>
                <Row gutter={ [0, 8] }>
                    <Col xs={ 8 } sm={ 8 } md={ 24 } lg={ 12 } style={ { backgroundColor: 'purple', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            1
                        </div>
                    </Col>
                    <Col xs={ 8 } sm={ 8 } md={ 24 } lg={ 6 } style={ { backgroundColor: 'green', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            2
                        </div>
                    </Col>
                    <Col xs={ 8 } sm={ 8 } md={ 24 } lg={ 6 } style={ { backgroundColor: 'green', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            3
                        </div>
                    </Col>
                    <Col xs={ 12 } sm={ 24 } md={ 24 } style={ { backgroundColor: 'yellow', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            9
                        </div>
                    </Col>
                </Row>

                <Divider>4 columna (6)</Divider>
                {/* horizontal, vertical */ }
                <Row gutter={ [48, 8] }>
                    <Col xs={ 6 } lg={ 24 } style={ { backgroundColor: 'yellow', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            1
                        </div>
                    </Col>
                    <Col span={ 6 } lg={ 24 } style={ { backgroundColor: 'yellow', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            2
                        </div>
                    </Col>
                    <Col span={ 6 } lg={ 24 } style={ { backgroundColor: 'yellow', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            3
                        </div>
                    </Col>
                    <Col span={ 6 } lg={ 24 } style={ { backgroundColor: 'yellow', color: 'black' } }>
                        <div style={ { backgroundColor: 'purple', color: 'black' } }>
                            4
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

                <Space style={ { backgroundColor: '#C1F4C5' } }>
                    <Form layout="vertical"
                        onFinish={ this.handleSubmit }
                        onFinishFailed={ this.handleSubmitFaield }>
                        <Form.Item>
                            <Form.Item name="pruebaSelect">
                                <Select placeholder="Seleccione una opción">
                                    <Select.Option value="3">Total</Select.Option>
                                    <Select.Option value="4">Parcial</Select.Option>
                                </Select>
                            </Form.Item>
                            <h4>Prueba Titulo Select</h4>
                        </Form.Item>
                        <Form.Item >
                            <Form.Item name="pruebaFecha">
                                <DatePicker placeholder="Selecciona una fecha" />
                            </Form.Item>
                            <h4>Prueba Titulo Fecha</h4>
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="pruebaArchivo">
                                <Upload>
                                    <Button icon={ <UploadOutlined /> }>Seleccione un archivo</Button>
                                </Upload>
                            </Form.Item>
                            <h4>Prueba Titulo Archivo</h4>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={ { backgroundColor: '#194978', width: '75px', height: '44px' } }>
                                Cargar
                            </Button>
                        </Form.Item>
                    </Form>
                </Space>

                <Divider>Tabla</Divider>
                <Table dataSource={ this.dataSource } columns={ this.columns } />
            </>
        )
    }


}

export default GridAnt