import * as actionTypes from './actionTypes';

export const addTodo = (todo) => {
    return (dispatch, store) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(todo)
        };

        fetch('http://localhost:8088/api/todo', requestOptions)
            .then(response => response.json())
            .then(data => {

                dispatch(addTodoSuccess(data));
            })
    }
}

const addTodoSuccess = (data) => {
    const todo = {
        id: data.id,
        todoName: data.todoName,
        todoDescription: data.todoDescription,
        todoDate: data.todoDate,
        done: data.done
    }

    return {
        type: actionTypes.ADD_TODO,
        todo: todo
    }
}


export const doneTodo = (todoId) => {
    return (dispatch, store) => {

        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
        };

        fetch(`http://localhost:8088/api/todo/isDone/${todoId}`, requestOptions)
            .then(response => response.json())
            .then(responseData => {
                dispatch(doneTodoSuccess(responseData))
            }).catch(err => dispatch(doneTodoError(err)))
    }
}


const doneTodoSuccess = (data) => {
    return {
        type: actionTypes.DONE_TODO,
        todoId: data.id,
        done: data.done
    }
}

const doneTodoError = (err) => {
    console.log("Error occurred", err);
}


export const getAllTodos = (accountId, page) => {
    return (dispatch, store) => {
        fetch(`http://localhost:8088/api/todo/pageable?account=${accountId}&page=${page - 1}&size=5`)
            .then(response => response.json())
            .then(data => {
                dispatch(getAllTodosSuccess(data, page));
            })
    }
}


const getAllTodosSuccess = (data, page) => {
    return {
        type: actionTypes.GET_TODOS,
        todos: data.content,
        totalPages: data.totalPages,
        currentPage: page
    }
}


export const deleteTodo = (todoId) => {
    return (dispatch, store) => {
        const requestOptions = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        }

        fetch(`http://localhost:8088/api/todo/delete/${todoId}`, requestOptions)
            .then(response => response.json())
            .then(responseData => {
                if (responseData.code === 1.0)
                    dispatch(deleteTodoSuccess(todoId))
            }).catch(err => dispatch(deleteTodoError(err)))
    }

}


const deleteTodoSuccess = (todoId) => {
    return {
        type: actionTypes.DELETE_TODO,
        todoId: todoId
    }
}

const deleteTodoError = (err) => {
    console.log("Error occurred", err)
}


export const updateTodoByTodoId = (todoId, todo) => {
    return (dispatch, store) => {
        const requestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(todo)
        }

        fetch(`http://localhost:8088/api/todo/update/${todoId}`, requestOptions)
            .then(response => response.json())
            .then(responseData => {
                dispatch(updateTodoSuccess(responseData))
            }).catch(err => dispatch(updateTodoError(err)))
    }


}


const updateTodoSuccess = (responseData) => {
    const todoData = {
        id: responseData.id,
        todoName: responseData.todoName,
        todoDescription: responseData.todoDescription,
        todoDate: responseData.todoDate
    }

    return {
        type: actionTypes.UPDATE_TODO,
        todo: todoData
    }
}

const updateTodoError = (err) => {
    console.log("Update Todo Error: " + err);
}
