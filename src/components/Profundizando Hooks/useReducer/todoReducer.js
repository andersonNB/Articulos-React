export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            // ... copiamos el estado anterior y le pasamos el nuevo
            return [...state, action.payload];

        case 'delete':
            console.log("state en el reducer ", state)
            return state.filter(todo => todo.id !== action.payload)

        case 'subrayar':
            return state.map((todo) => {

                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }
                return todo;
            })
        default:
            return state;
    }

}