import React, {useState} from "react";
import './Login.css';
import {Link, withRouter} from "react-router-dom";
import {useStore} from "../../store/Provider";
import {onLoginHandler} from "../../store/actions";

const Login = (props) => {

    const [store, dispatch] = useStore();

    const [loginElements, setLoginElements] = useState({
        username: "",
        password: ""
    })

    const changeUsernameHandler = (e) => setLoginElements({...loginElements, username: e.target.value})
    const changePasswordHandler = (e) => setLoginElements({...loginElements, password: e.target.value})

    const loginHandler = (e) => {
        e.preventDefault();
        const account = {...loginElements}
        dispatch(onLoginHandler(account))
        setTimeout(() => {
            redirectToHome();
        }, 1000)
    }

    const redirectToHome = () => {
        if (localStorage.getItem("accountId")) {
            props.history.push("/home")
        } else {
            props.history.push("/")
        }
    }


    return (
        <>
            <div>
                <div className="login-form">
                    <form onSubmit={loginHandler}>
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input className="input" type="text" placeholder="Username"
                                       value={loginElements.username}
                                       onChange={changeUsernameHandler}/>
                                <span className="icon is-small is-left">
                            <i className="fas fa-users"></i>
                        </span>
                                <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="password" placeholder="Password"
                                       value={loginElements.password}
                                       onChange={changePasswordHandler}/>
                                <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                     </span>
                            </p>
                        </div>
                        <button className="button is-success">Login</button>
                    </form>
                    <Link to="/register">
                        <p className="has-text-centered mt-5 has-text-weight-bold is-family-monospace is-uppercase"
                           id="register-link">Create a new account</p>
                    </Link>
                </div>
            </div>
        </>
    );

}

export default withRouter(Login);
