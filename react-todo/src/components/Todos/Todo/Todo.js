import React from 'react';
import './Todo.css';


const Todo = (props) => {

    const {moreTodoDetail, doneTodo, deleteTodo, todo} = props;

    return (
        <div className='todo'>
            <div className="todo-header">
                <h1 className={todo.done ? 'is-size-4 done' : 'is-size-4'}>{todo.todoName}</h1>
                <p className="more-info has-text-info" onClick={() => moreTodoDetail(todo.id)}>More Info...</p>
            </div>
            <div className="todo-actions">
                <i className="fas fa-check has-text-success" onClick={() => doneTodo(todo.id)}/>
                <i className="fas fa-trash-alt has-text-danger" onClick={() => deleteTodo(todo.id)}/>
            </div>
        </div>
    );
}

export default Todo;