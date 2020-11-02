import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import TodoForm from "../components/TodoForm/TodoForm";
import Todos from "../components/Todos/Todos";

const Container = props => {

    useEffect(() => {
        if (!localStorage.getItem("accountId")) {
            props.history.push('/')
        }
    }, [])

    return (
        <div>
            <div>
                <Header/>
                <h1 className="has-text-centered is-size-1 has-text-info is-mobile">Create TODO</h1>
                <div className="container is-max-widescreen">
                    <div className="notification is-grey-light has-shadow ">
                        <TodoForm/>
                    </div>
                    <div className="notification is-grey-light has-shadow ">
                        <h1 className="has-text-info is-size-2">TODOS</h1>
                        <Todos/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;