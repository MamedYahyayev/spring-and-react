import React, {useState} from "react";
import './Register.css'
import {NavLink} from "react-router-dom";
import {useStore} from "../../store/Provider";
import {onRegisterHandler} from "../../store/actions";

export const Register = (props) => {
    const [store, dispatch] = useStore();

    const [userElements, setUserElements] = useState({
        name: "",
        surname: "",
        username: "",
        password: ""
    })

    const nameChangeHandler = (e) => setUserElements({...userElements, name: e.target.value})
    const surnameChangeHandler = (e) => setUserElements({...userElements, surname: e.target.value})
    const usernameChangeHandler = (e) => setUserElements({...userElements, username: e.target.value})
    const passwordChangeHandler = (e) => setUserElements({...userElements, password: e.target.value})


    const createUserHandler = (e) => {
        e.preventDefault();
        const account = {...userElements}
        dispatch(onRegisterHandler(account))
    }


    return (
        <div className="register-form">
            <h1 className="has-text-centered mb-4 is-size-4 has-text-info">Create an account</h1>
            <form onSubmit={createUserHandler}>
                <input className="input" type="text" placeholder="Name" value={userElements.name}
                       onChange={nameChangeHandler}/>
                <input className="input" type="text" placeholder="Surname" value={userElements.surname}
                       onChange={surnameChangeHandler}/>
                <input className="input" type="text" placeholder="Username" value={userElements.username}
                       onChange={usernameChangeHandler}/>
                <input className="input" type="password" placeholder="Password" value={userElements.password}
                       onChange={passwordChangeHandler}/>
                <button type="submit" className="button is-success">Register</button>
            </form>
            <NavLink to="/">
                <p className="has-text-centered has-text-info mt-5 has-text-weight-bold is-family-monospace is-uppercase"
                   id="register-link">Login</p>
            </NavLink>
            {store.isRegister ?
                <h2 className="has-text-success has-text-centered mt-3">Your account created successfully</h2> : null}
        </div>
    );

}
