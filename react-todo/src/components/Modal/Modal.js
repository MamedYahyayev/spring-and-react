import React from "react";
import './Modal.css';
import {withRouter} from 'react-router-dom';

export const Modal = withRouter(props => {

    const {modalClose} = props;

    return (
        <div className="modal">
            <div className="modal-background"/>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Delete Todo</p>
                    <button className="delete" aria-label="close"/>
                </header>
                <section className="modal-card-body">
                    <div className="message-section">
                        <i className="fas fa-minus-circle"/>
                        <p>Do you want to delete this TODO?</p>
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" onClick={() => props.deleteTodo()}>Yes</button>
                    <button className="button" onClick={() => modalClose(false)}>Cancel</button>
                </footer>
            </div>
        </div>
    )
})