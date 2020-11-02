import React, {useEffect} from 'react';
import './App.css';
import Container from './container/Container';
import {Route, Switch, withRouter} from "react-router-dom";
import Login from './components/Login/Login'
import {Register} from './components/Register/Register'
import TodoDetail from './components/TodoDetail/TodoDetail';


function App(props) {

    useEffect(() => {
        if (localStorage.getItem("accountId")) {
            props.history.push("/home")
        }
    }, [])

    return (
        <div className="App">
            <Switch>
                <Route path="/home" component={Container}/>
                <Route path="/register" component={Register}/>
                <Route path="/todos/:id" component={TodoDetail}/>
                <Route path="/" component={Login}/>
            </Switch>
        </div>
    );
}

export default withRouter(App);
