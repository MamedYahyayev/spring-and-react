import React, {Fragment, useEffect, useState} from "react";
import './TodoDetail.css';
import {Modal} from "../Modal/Modal";
import {useStore} from "../../store/Provider";
import {deleteTodo, doneTodo, updateTodoByTodoId} from "../../store/todoActions";
import {withRouter} from 'react-router-dom';


const TodoDetail = (props) => {

    const [dispatch] = useStore();

    const [todo, setTodo] = useState({
        id: 0,
        todoName: '',
        todoDescription: '',
        todoDate: new Date()
    });

    const [update, setUpdate] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const {match} = props;


    useEffect(() => {
        const todoId = match.params.id;

        fetch(`http://localhost:8088/api/todo/${todoId}`)
            .then(res => res.json())
            .then(data => {
                setTodo({
                    id: data.id,
                    todoName: data.todoName,
                    todoDescription: data.todoDescription,
                    todoDate: data.todoDate
                });
            });
    }, [])


    const changeTodoName = e => setTodo({...todo, todoName: e.target.value});
    const changeTodoDate = (e) => setTodo({...todo, todoDate: e.target.value});
    const changeTodoDescription = e => setTodo({...todo, todoDescription: e.target.value});

    const updateTodoHandler = () => setUpdate(true);
    const onModalVisible = (visible) => setModalVisible(visible);

    const onDoneTodoHandler = () => {
        const todoId = match.params.id;
        dispatch(doneTodo(todoId));
        props.history.push('/home')
    }

    const onDeleteTodoHandler = () => {
        const todoId = match.params.id;
        dispatch(deleteTodo(todoId));
        setTimeout(() => {
            props.history.push('/home')
        }, 1000);
    }

    const onUpdateHandler = e => {
        e.preventDefault();

        const todoData = {
            todoName: todo.todoName,
            todoDescription: todo.todoDescription,
            todoDate: todo.todoDate
        }

        dispatch(updateTodoByTodoId(todo.id, todoData))


        setTimeout(() => {
            setUpdate(false)
        }, 1000)

    }

    const backToHomePage = () => {
        props.history.push("/home")
    }

    return (
        <Fragment>
            {modalVisible ? <Modal modalClose={onModalVisible} deleteTodo={onDeleteTodoHandler}/> : null}
            <div className="container todo_detail">
                <div className="actions">
                    <div className="go_back_action">
                        <i className="fas fa-arrow-circle-left" onClick={backToHomePage}/>
                    </div>
                    <div className="todo-action">
                        <i className="fas fa-check has-text-success" onClick={onDoneTodoHandler}/>
                        <i className="fas fa-edit has-text-warning" onClick={updateTodoHandler}/>
                        <i className="fas fa-trash-alt has-text-danger" onClick={() => onModalVisible(true)}/>
                    </div>
                </div>

                <form onSubmit={onUpdateHandler}>
                    <div className="name-area is-flex is-align-items-center">
                        <label className="mr-4 is-size-3">Todo </label>
                        <input className="input is-hovered mb-3" type="text" value={todo.todoName}
                               onChange={changeTodoName}
                               disabled={!update}/>
                    </div>

                    <div className="date-area is-flex is-align-items-center">
                        <label className="mr-4 is-size-3">Date </label>
                        <input
                            type="date"
                            value={todo.todoDate}
                            disabled={!update}
                            onChange={changeTodoDate}
                        />
                    </div>

                    <div className="is-flex is-justify-content-space-between is-align-items-flex-end detail-end">
                        <div className="text_description">
                    <textarea className="textarea" value={todo.todoDescription} onChange={changeTodoDescription}
                              disabled={!update}/>
                        </div>

                        <div>
                            <button type="submit"
                                    className="button is-link has-text-right is-mobile m-5 is-pulled-right"
                            >Save
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </Fragment>
    )
}

export default withRouter(TodoDetail)