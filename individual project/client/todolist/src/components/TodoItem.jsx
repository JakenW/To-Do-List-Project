import React from 'react';
import { useQueryClient, useMutation, QueryClient } from 'react-query';
import updateTodoRequest from '../api/updateTodoRequest';
import deleteTodoRequest from '../api/deleteTodoRequest';

export const TodoItem = ({ todo }) => {
    const queryClient = useQueryClient();

    const {mutate: updateTodo} = useMutation(
        (updatedTodo) => updateTodoRequest(updatedTodo),
        {
            onSettled: () => {
                queryClient.invalidateQueries('todos');
            },
        }
    );

    const {mutate: deleteTodo} = useMutation(
        (updatedTodo) => deleteTodoRequest(updatedTodo),
        {
            onSettled: () => {
                queryClient.invalidateQueries('todos');
            },
        }
    );

    return (
        <div>
            
            <input 
                type="text"
                value={todo.text}
                onChange={(e) => updateTodo({
                    ...todo,
                    text: e.target.value,
                })} 
            />

            <input 
                checked={todo.completed}
                type="checkbox" 
                onChange={() => updateTodo({
                    ...todo,
                    completed: !todo.completed,
                })} 
            />

            <button onClick={() => deleteTodo(todo)}>delete</button>
        </div>
    );
};