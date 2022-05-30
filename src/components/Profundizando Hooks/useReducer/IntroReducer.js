import React from 'react'

const IntroReducer = () => {



  const initialState = [{
    id: 1,
    todo: 'Comprar',
    done: false,
  }]


  //Reducer
  const todoReducer = (state = initialState, action) => {

    console.log('action', action)
    //Así modificamos el state con el reducer
    //aqui no puede ir nada asincrono, ni llamar otras funciones
    //todo se debe hacer aquí mismo
    if (action?.type === 'agregar') {
      return [...state, action.payload]
    }

    return state;
  }

  let todos = todoReducer()


  const newTodo = [{
    id: 2,
    todo: 'Comprar harina',
    done: false,
  }]


  //Creamos la acción para el reducer
  const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo,
  }

  //Enviamos el state y el action
  todos = todoReducer(todos, agregarTodoAction)


  console.log("todoReducer", todos)
  return (
    <section style={ { backgroundColor: 'salmon', } }> intro - Reducerr

    </section>
  )
}

export default IntroReducer