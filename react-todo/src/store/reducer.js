import * as actionTypes from './actionTypes';

export const initialState = {
    account: {},
    todos: [],
    isLogged: false,
    isRegister: false,
    totalPages: 1,
    currentPages: 1
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_ACCOUNT:
            return {
                ...state,
                account: {...action.account},
                isRegister: true
            };

        case actionTypes.LOGIN_ACCOUNT:
            const loginAccount = {
                id: action.account.id,
                name: action.account.name,
                surname: action.account.surname,
                username: action.account.username
            }

            return {
                ...state,
                account: loginAccount,
                isRegister: true,
                isLogged: true
            };

        case actionTypes.GET_ACCOUNT:
            return {
                ...state,
                account: action.account,
                isLogged: true,
                isRegister: true
            }

        case actionTypes.DONE_TODO:
            const updatedTodos = [...state.todos];

            const todoIndex = updatedTodos.findIndex(todo => todo.id === action.todoId);

            updatedTodos[todoIndex] = {...updatedTodos[todoIndex], done: action.done};

            return {
                ...state,
                todos: updatedTodos
            };

        case actionTypes.GET_TODOS:
            return {
                ...state,
                todos: action.todos,
                totalPages: action.totalPages,
                currentPages: action.currentPage
            };

        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            };

        case actionTypes.DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos].filter(todo => todo.id !== action.todoId)
            };

        case actionTypes.UPDATE_TODO:
            const updateTodos = [...state.todos];

            const indexTodo = updateTodos.findIndex(todo => todo.id === action.todo.id);

            updateTodos[indexTodo] = action.todo;

            return {
                ...state,
                todos: updateTodos
            }

        case actionTypes.LOGOUT_ACCOUNT:
            return state;
        default:
            return state;
    }
}