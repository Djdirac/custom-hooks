

export const todoReducer = ( initialState = [], action ) => {
    switch (action.type) {
        case '[TODO] Add todo':
            return [ ...initialState, action.payload ];
    
        case '[TODO] Remove todo':
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {    // Regresamos un nuevo arreglo gracias al map
                if (todo.id === action.payload) { // en est caso se supone que action.payload es el id
                    return{
                        ...todo,
                        done: !todo.done
                    };
                };

                return todo;
            });

        default:
            return initialState;
    }
};