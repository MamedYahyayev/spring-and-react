package az.maqa.spring.react.todolistapp.service.impl;

import az.maqa.spring.react.todolistapp.dto.TodoDto;
import az.maqa.spring.react.todolistapp.entity.Account;
import az.maqa.spring.react.todolistapp.entity.Todo;
import az.maqa.spring.react.todolistapp.repository.AccountRepository;
import az.maqa.spring.react.todolistapp.repository.TodoRepository;
import az.maqa.spring.react.todolistapp.request.RequestTodo;
import az.maqa.spring.react.todolistapp.request.RequestUpdateTodo;
import az.maqa.spring.react.todolistapp.response.ResponseStatus;
import az.maqa.spring.react.todolistapp.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;

@Service
@Slf4j
public class TodoServiceImpl implements TodoService {
    private final TodoRepository todoRepository;
    private final ModelMapper modelMapper;
    private final AccountRepository accountRepository;

    public TodoServiceImpl(TodoRepository todoRepository, ModelMapper modelMapper, AccountRepository accountRepository) {
        this.todoRepository = todoRepository;
        this.modelMapper = modelMapper;
        this.accountRepository = accountRepository;
    }

    @Override
    public TodoDto createTodo(RequestTodo requestTodo) {
        Todo todo = getTodo(requestTodo);
        Todo savedTodo = todoRepository.save(todo);
        log.info("CREATE_TODO  todo: {}", savedTodo);
        return modelMapper.map(savedTodo, TodoDto.class);
    }

    @Override
    public TodoDto getTodoByTodoId(Long todoId) {
        Todo todo = todoRepository.findTodoById(todoId);
        log.info("GET_TODO_BY_ID -- todo: " + todo);
        return modelMapper.map(todo, TodoDto.class);
    }

    @Override
    public TodoDto updateTodoByTodoId(Long todoId, RequestUpdateTodo requestTodo) {
        Todo todo = todoRepository.findTodoById(todoId);
        todo.setTodoName(requestTodo.getTodoName());
        todo.setTodoDescription(requestTodo.getTodoDescription());
        todo.setTodoDate(requestTodo.getTodoDate());
        Todo savedTodo = todoRepository.save(todo);
        log.info("UPDATE_TODO_BY_ID -- todo: " + savedTodo);
        return modelMapper.map(savedTodo, TodoDto.class);
    }

    @Override
    public ResponseStatus deleteTodoByTodoId(Long todoId) {
        ResponseStatus status;
        todoRepository.deleteById(todoId);
        Todo todo = todoRepository.findTodoById(todoId);
        if (todo == null) status = ResponseStatus.success();
        else status = new ResponseStatus(2.0, "DELETE ERROR , Not SUCCEED");
        return status;
    }

    @Override
    public TodoDto doneTodoByTodoId(Long todoId) {
        Todo todo = todoRepository.findTodoById(todoId);

        todo.setDone(!todo.isDone());
        todo.setId(todoId);

        Todo updatedTodo = todoRepository.save(todo);
        log.info("Updated Todo: {}", updatedTodo.toString());

        return modelMapper.map(updatedTodo, TodoDto.class);
    }

    @Override
    public Long countTodos(Long accountId) {
        return todoRepository.countAllByAccount_Id(accountId);
    }

    @Override
    public Page<TodoDto> getAllTodosForPageable(Long account, Integer page, Integer size) {
        Pageable pageRequest = PageRequest.of(page, size);
        Page<Todo> pageTodo = todoRepository.findAllByAccount_Id(pageRequest, account);
        Type listType = new TypeToken<Page<TodoDto>>() {
        }.getType();
        return modelMapper.map(pageTodo, listType);
    }

    private Todo getTodo(RequestTodo requestTodo) {
        Long accountId = requestTodo.getAccountId();
        Account account = accountRepository.findAccountById(accountId);
        Todo todo = new Todo();
        todo.setTodoName(requestTodo.getTodoName());
        todo.setTodoDescription(requestTodo.getTodoDescription());
        todo.setTodoDate(requestTodo.getTodoDate());
        todo.setAccount(account);
        return todo;
    }
}
