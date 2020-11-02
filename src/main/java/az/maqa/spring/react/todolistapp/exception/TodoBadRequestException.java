package az.maqa.spring.react.todolistapp.exception;

public class TodoBadRequestException extends RuntimeException {

    public TodoBadRequestException(String message) {
        super(message);
    }
}
