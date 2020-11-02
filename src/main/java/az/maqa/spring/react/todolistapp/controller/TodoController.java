package az.maqa.spring.react.todolistapp.controller;

import az.maqa.spring.react.todolistapp.dto.TodoDto;
import az.maqa.spring.react.todolistapp.request.RequestTodo;
import az.maqa.spring.react.todolistapp.request.RequestUpdateTodo;
import az.maqa.spring.react.todolistapp.response.ResponseStatus;
import az.maqa.spring.react.todolistapp.response.ResponseTodo;
import az.maqa.spring.react.todolistapp.service.TodoService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.lang.reflect.Type;

@RestController
@RequestMapping("/api/todo")
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    private final TodoService todoService;
    private final ModelMapper modelMapper;

    public TodoController(TodoService todoService, ModelMapper modelMapper) {
        this.todoService = todoService;
        this.modelMapper = modelMapper;
    }

    @PostMapping
    public ResponseTodo createTodo(@Valid @RequestBody RequestTodo requestTodo) {
        TodoDto savedTodo = todoService.createTodo(requestTodo);
        return modelMapper.map(savedTodo, ResponseTodo.class);
    }

    @GetMapping("/{todoId}")
    public ResponseTodo getTodoByTodoId(@PathVariable Long todoId) {
        TodoDto todoDto = todoService.getTodoByTodoId(todoId);
        return modelMapper.map(todoDto, ResponseTodo.class);
    }

    @PutMapping("/update/{todoId}")
    public ResponseTodo updateTodoByTodoId(@PathVariable Long todoId, @RequestBody RequestUpdateTodo requestTodo) {
        TodoDto todoDto = todoService.updateTodoByTodoId(todoId,requestTodo);
        return modelMapper.map(todoDto, ResponseTodo.class);
    }

    @DeleteMapping("/delete/{todoId}")
    public ResponseStatus deleteTodoByTodoId(@PathVariable Long todoId) {
        return todoService.deleteTodoByTodoId(todoId);
    }

    @PutMapping("/isDone/{todoId}")
    public ResponseTodo doneTodoByTodoId(@PathVariable(value = "todoId") Long todoId) {
        TodoDto todoDto = todoService.doneTodoByTodoId(todoId);
        return modelMapper.map(todoDto, ResponseTodo.class);
    }

    @GetMapping("/count/{accountId}")
    public Long countTodos(@PathVariable Long accountId) {
        return todoService.countTodos(accountId);
    }

    @GetMapping("/pageable")
    public Page<ResponseTodo> getAllTodosForPageable(Long account, Integer page, Integer size) {
        Page<TodoDto> pageTodoDto = todoService.getAllTodosForPageable(account, page, size);
        Type listType = new TypeToken<Page<ResponseTodo>>() {
        }.getType();
        return modelMapper.map(pageTodoDto, listType);
    }

}
