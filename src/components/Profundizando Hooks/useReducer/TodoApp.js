import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import { Button, Row, Col, Form, Input, } from 'antd';
import { useForm } from "../Hooks/useForm";

//estado inicial
// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false,
// }]

//Un función que cuando retorne algo sera el valor del initial State
const init = () => {

    //En esta linea decimos que si al hacer JSON.parse retorna en este caso un arreglo lleno
    // o si no un []
    return JSON.parse(localStorage.getItem('todos')) || [];

    // Regresamos un objeto como estado inicial
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false,
    // }]
}


const TodoApp = () => {

    //Reducer como tal y nuestro listado inicial
    const [todo, dispatch] = useReducer(todoReducer, [], init)
    // const [{ inputTODO }, handleInputChange, reset] = useForm({ inputTODO: '' })

    console.log("todo  ", todo)
    // console.log("useForm ", inputTODO)

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
        }
    }

    const handleClick = (data) => {

        console.log(data.target.innerText)
        let id = Number(data.target.innerText)
        console.log(typeof id)
        const actionDelete = {
            type: 'delete',
            payload: id,
        }
        console.log(actionDelete)
        dispatch(actionDelete);
    }

    const onToggleTodo = (e) => {
        console.log('Tachando', e.target.textContent)

        let tachando = e.target.textContent
        let prueba = tachando.split(' ')
        console.log("prueba ", prueba)
        console.log("tamaño ", prueba[prueba.length - 1])
        let id = Number(prueba[prueba.length - 1]);
        console.log("id ", typeof id)

        const actionSubrayar = {
            type: 'subrayar',
            payload: id,
        }

        dispatch(actionSubrayar)
    }


    return (
        <div>
            <hr />
            <h1>
                TodoApp ({ todo.length })
            </h1>
            <Row style={ { backgroundColor: "blue" } }>
                <Col md={ 12 } style={ { backgroundColor: "#B8F1B0" } }>
                    <h4>
                        TODOs por hacer
                    </h4>
                    <ul>
                        {
                            todo.map((todo, i) => {
                                return (

                                    <li key={ todo.id } style={ { listStyle: 'none', margin: '1rem', backgroundColor: '#E9EFC0', textDecoration: todo.done === true ? 'line-through' : '' } } onClick={ onToggleTodo } >{ i + 1 }. { todo.desc }
                                        <br />
                                        <Button type="primary" danger={ true } onClick={ handleClick }> { todo.id }</Button>
                                    </li>

                                )
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
                            <Input placeholder="Aprender"></Input>
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