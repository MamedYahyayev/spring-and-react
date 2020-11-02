import React, {useEffect} from 'react';
import {useStore} from "../../store/Provider";
import Todo from './Todo/Todo'
import {deleteTodo, doneTodo, getAllTodos} from "../../store/todoActions";
import Pagination from "../Pagination/Pagination";
import {withRouter} from 'react-router-dom';

const Todos = (props) => {

    const [store, dispatch] = useStore();

    useEffect(() => {
        dispatch(getAllTodos(localStorage.getItem("accountId"), 1));
    }, [])

    const onDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId))
    }

    const onDoneTodo = (todoId) => {
        dispatch(doneTodo(todoId))
    }

    const changePage = (pageNumber) => {
        dispatch(getAllTodos(localStorage.getItem("accountId"), pageNumber));
    }

    const moreInfoAboutTodo = (todoId) => {
        props.history.push(`/todos/${todoId}`);
    }


    return (
        <div>
            {store.isLogged ? store.todos.map(todo => (
                <Todo key={todo.id} todo={todo} deleteTodo={onDeleteTodo} doneTodo={onDoneTodo}
                      moreTodoDetail={moreInfoAboutTodo}/>
            )) : null}
            <div className="mt-5">
                {store.totalPages > 2 ? <Pagination pages={store.totalPages} currentPages={store.currentPages}
                                                    changePage={changePage}/> : null}
            </div>
        </div>
    );
}

export default withRouter(Todos);