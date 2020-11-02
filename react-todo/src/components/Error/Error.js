import React from "react";
import './Error.css';
import {NavLink} from "react-router-dom";

const error = props => {

    return (
        <div className="error-box">
            <h1 className="error-number">403</h1>
            <p className="is-size-3 has-text-danger error-message">{props.message}</p>
            <NavLink to="/" className="has-text-info login-text">Please Login >>></NavLink>
        </div>
    )
}

export default error;
