import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {

    const initialState = [
        // {
        // id: new Date().getTime(),
        // description: 'Recolectar la piedra del alma',
        // done: false,
        // }
        // ,{
        //     id: new Date().getTime() * 3,
        //     description: 'Recolectar la piedra del tiempo',
        //     done: false,
        // },
    ];

    const init = () => {
        return JSON.parse( localStorage.getItem('todos') ) || [];
    }

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
      }, [todos]);

      const handleNewTodo = ( todo ) => {
                //console.log({ todo });
            const action = 
            {
                type:'[TODO] Add todo',
                payload: todo
            } 

            // Se manda la accion al reducer mediante el dispatch que es la funcion
            // para llamar a la accion
            dispatch( action );
        };

        const handleDeleteTodo = ( id ) => {
            //console.log(id);
            dispatch({
                type:'[TODO] Remove todo',
                payload: id
            });
        };

        const handleToggleTodo = ( id ) => {
            //console.log( { id } );
            dispatch({
                type:'[TODO] Toggle Todo',
                payload: id
            });
        };

        return {
            todos,
            handleNewTodo,
            handleDeleteTodo,
            handleToggleTodo,
            todosCount: todos.length,
            pendingTodosCount: todos.filter( todo => !todo.done ).length
        };
};
