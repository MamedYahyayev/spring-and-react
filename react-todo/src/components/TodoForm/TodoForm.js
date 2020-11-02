import React, {useState} from 'react';
import DatePicker from '@bit/nexxtway.react-rainbow.date-picker';
import {useStore} from "../../store/Provider";
import {addTodo} from "../../store/todoActions";


const TodoForm = (props) => {

    const [store, dispatch] = useStore();

    const [todo, setTodo] = useState({
        todoName: "",
        todoDescription: "",
        todoDate: new Date()
    })

    const changeTodoName = (e) => setTodo({...todo, todoName: e.target.value})
    const changeDescription = (e) => setTodo({...todo, todoDescription: e.target.value})
    const changeTodoDate = value => setTodo({...todo, todoDate: value})

    const createTodoSubmitHandler = (e) => {
        e.preventDefault();

        const request = {
            ...todo,
            accountId: localStorage.getItem("accountId")
        }
        dispatch(addTodo(request))
    }

    return (
        <div>
            <form onSubmit={createTodoSubmitHandler}>
                <input className="input is-hovered mb-3" type="text" placeholder="TODO Name" value={todo.todoName}
                       onChange={changeTodoName}/>
                <div className="control mb-6">
                    <textarea className="textarea" placeholder="Normal textarea" value={todo.todoDescription}
                              onChange={changeDescription}/>
                </div>
                <div className="is-flex is-inline-block-mobile is-justify-content-space-between">
                    <div className={datePickerStyle}>
                        <DatePicker
                            value={todo.todoDate}
                            onChange={changeTodoDate}
                        />
                    </div>
                    <button type="submit" className="button is-link has-text-right is-mobile mt-5">Save TODO</button>
                </div>
            </form>
        </div>
    );
}

const datePickerStyle = {
    width: '200px'
}

export default TodoForm;