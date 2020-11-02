import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import {StateProvider} from "./store/Provider";
import {initialState, reducer} from "./store/reducer";
import App from "./App";

ReactDOM.render(
    <Router>
        <StateProvider initialValue={initialState} reducer={reducer}>
            <App/>
        </StateProvider>
    </Router>,
    document.getElementById('root')
);

