import React, {useEffect} from 'react';
import {useStore} from "../../store/Provider";
import {getAccountHandler, onLogoutHandler} from "../../store/actions";
import {withRouter} from 'react-router-dom';

const Header = (props) => {
    const [store, dispatch] = useStore();

    const fullName = store.isLogged ? store.account.name + " " + store.account.surname : null;

    useEffect(() => {
        dispatch(getAccountHandler(localStorage.getItem("accountId")))
    }, [dispatch])


    const logout = () => {
        dispatch(onLogoutHandler(localStorage.getItem("accountId")));
        setTimeout(() => {
            redirectToLogin();
        }, 1000)
    }

    const redirectToLogin = () => {
        props.history.push('/')
    }

    return (
        <>
            <div className="is-flex is-justify-content-space-between has-background-danger is-align-items-center p-3">
                <div>
                    <img
                        className="image is-64x64"
                        src={process.env.PUBLIC_URL + '/logo.png'}
                        alt="todo-logo"/>
                </div>
                <div className="is-flex is-justify-content-space-between is-align-items-center">
                    <h1 className="has-text-dark is-size-5">{fullName}</h1>
                    <button className="button is-link ml-4 is-rounded" onClick={logout}>Logout</button>
                </div>
            </div>
        </>
    );
}

export default withRouter(Header);