import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import { Button, Row, Col, Form, Input, Space } from 'antd';

//estado inicial
// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false,
// }]

//Un función que cuando retorne algo sera el valor del initial State
const init = () => {
    return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false,
    }]
}


const TodoApp = () => {

    //Reducer como tal y nuestro listado inicial
    const [todo, dispatch] = useReducer(todoReducer, [], init)

    console.log("todo  ", todo)

    //useEffect pendiente de los cambios de los todos
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo))
    }, [todo])

    const handleSubmit = (data) => {

        if (data.inputTODO.length !== 0) {
            //crear el todo o el objeto como tal y por aparte su acción
            const newTodo = {
                id: new Date().getTime(),
                desc: data.inputTODO,
                done: false,
            }

            //Se pasa la acción a la función dispatch
            const action = {
                type: 'add',
                payload: newTodo,
            }

            dispatch(action)
            //Limpiar el input

        }
    }


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

                                return (<li key={ todo.id } style={ { listStyle: 'none', margin: '1rem', backgroundColor: '#FFF2F2' } }>{ i + 1 }. { todo.desc }
                                    <br />
                                    <Button type="primary" danger={ true }> Borrar</Button>
                                </li>)

                            })
                        }
                    </ul>
                </Col>
                <Col md={ 12 } style={ { backgroundColor: "yellow" } } >
                    <Form onFinish={ handleSubmit }>
                        <Form.Item>
                            Agregar TODO
                        </Form.Item>
                        <Form.Item name="inputTODO">
                            <Input name="i" placeholder="Aprender"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit">
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