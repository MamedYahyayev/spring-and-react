package az.maqa.spring.react.todolistapp.service;

import az.maqa.spring.react.todolistapp.dto.TodoDto;
import az.maqa.spring.react.todolistapp.request.RequestTodo;
import az.maqa.spring.react.todolistapp.request.RequestUpdateTodo;
import az.maqa.spring.react.todolistapp.response.ResponseStatus;
import org.springframework.data.domain.Page;

public interface TodoService {
    TodoDto createTodo(RequestTodo requestTodo);

    TodoDto getTodoByTodoId(Long todoId);

    TodoDto updateTodoByTodoId(Long todoId,RequestUpdateTodo requestTodo);

    ResponseStatus deleteTodoByTodoId(Long todoId);

    TodoDto doneTodoByTodoId(Long todoId);

    Long countTodos(Long accountId);

    Page<TodoDto> getAllTodosForPageable(Long account, Integer page, Integer size);
}
