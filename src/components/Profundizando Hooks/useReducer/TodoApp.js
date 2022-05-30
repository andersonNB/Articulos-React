import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { Button, Row, Col, Form, Input, } from 'antd';

//estado inicial
const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false,
}]


const TodoApp = () => {

    //Reducer como tal y nuestro listado inicial
    const [todo] = useReducer(todoReducer, initialState)

    console.log("todo  ", todo)
    return (
        <div>
            <hr />
            <h1>
                TodoApp ({ todo.length })
            </h1>
            <Row style={ { backgroundColor: "blue" } }>
                <Col md={ 12 } style={ { backgroundColor: "#B8F1B0" } }>
                    <ul>
                        {
                            todo.map((todo, i) => {

                                return <li key={ todo.id }>{ i + 1 }. { todo.desc }
                                    <Button type="primary" danger={ true }> Borrar</Button>
                                </li>

                            })
                        }
                    </ul>
                </Col>
                <Col md={ 12 } style={ { backgroundColor: "yellow" } } >
                    <Form>
                        <Form.Item>
                            <Input placeholder="Aprender"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button>
                                Agregar
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default TodoApp