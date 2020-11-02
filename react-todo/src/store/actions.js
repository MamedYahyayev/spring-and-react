import * as actionTypes from './actionTypes';

export const onRegisterHandler = (account) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(account)
    };

    fetch("http://localhost:8088/api/account", requestOptions)
        .then(response => response.json())
        .then(responseData => {
            console.log(responseData);
        })

    return {
        type: actionTypes.REGISTER_ACCOUNT,
        account: account
    }
}

export const onLoginHandler = (account) => {
    return (dispatch, store) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(account)
        };

        fetch("http://localhost:8088/api/account/login", requestOptions)
            .then(response => {
                return response.json()
            })
            .then(responseData => {
                localStorage.setItem("accountId", responseData.id);
                dispatch(onLoginHandlerSuccess(responseData))
            })
    }

}

const onLoginHandlerSuccess = (account) => {
    return {
        type: actionTypes.LOGIN_ACCOUNT,
        account: account
    }
}

export const getAccountHandler = (id) => {
    return (dispatch, store) => {
        fetch(`http://localhost:8088/api/account/${id}`)
            .then(response => response.json())
            .then(data => {
                dispatch(getAccountSuccessHandler(data));
            })
    }
}

const getAccountSuccessHandler = (data) => {
    const account = {
        id: data.id,
        name: data.name,
        surname: data.surname,
        username: data.username
    }
    return {
        type: actionTypes.GET_ACCOUNT,
        account: account
    }
}


export const onLogoutHandler = (accountId) => {
    fetch(`http://localhost:8088/api/account/logout/${accountId}`)
        .then(response => response.json())
        .then(responseData => {
            localStorage.clear();
        })
    return {
        type: actionTypes.LOGOUT_ACCOUNT
    }

}