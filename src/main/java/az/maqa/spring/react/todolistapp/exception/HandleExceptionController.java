package az.maqa.spring.react.todolistapp.exception;

import az.maqa.spring.react.todolistapp.enums.ExceptionConstants;
import az.maqa.spring.react.todolistapp.response.ResponseError;
import az.maqa.spring.react.todolistapp.response.ResponseErrorDetails;
import az.maqa.spring.react.todolistapp.response.ResponseException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
@PropertySource("classpath:exception.properties")
@Slf4j
public class HandleExceptionController extends ResponseEntityExceptionHandler {

    @Value("${spring.exception.send.report.url}")
    private String sendReportUrl;

    @Value("${spring.api.version}")
    private Double apiVersion;

    @ExceptionHandler(TodoNotFoundException.class)
    public ResponseEntity<ResponseException> handleTodoNotFoundException(TodoNotFoundException e, HttpServletRequest request) {
        ResponseErrorDetails details = new ResponseErrorDetails(request.getRequestURI(), sendReportUrl, "Todo not found", "Find Todo");
        ResponseError error = new ResponseError((double) ExceptionConstants.TODO_NOT_FOUND.getValue(), e.getMessage());

        List<ResponseError> errors = new ArrayList<>();
        errors.add(error);

        ResponseException exception = new ResponseException(apiVersion, errors, details);
        return new ResponseEntity<>(exception, HttpStatus.NOT_FOUND);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException e, HttpHeaders headers,
                                                                  HttpStatus status, WebRequest request) {

        String uri = ((ServletWebRequest) request).getRequest().getRequestURI();
        ResponseErrorDetails details = new ResponseErrorDetails(uri, sendReportUrl, "Bad Request", "Validation Error");

        List<ResponseError> errorList = new ArrayList<>();
        double subCode = 0.1;

        for (ObjectError err : e.getBindingResult().getAllErrors()) {
            ResponseError error = new ResponseError();
            error.setMessage(err.getDefaultMessage());
            error.setCode(ExceptionConstants.TODO_BAD_REQUEST.getValue() + subCode);
            errorList.add(error);
            subCode += 0.1;
        }

        ResponseException exception = new ResponseException(apiVersion, errorList, details);
        return new ResponseEntity<>(exception, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(AccountNotFoundException.class)
    public ResponseEntity<ResponseException> handleAccountNotFoundException(AccountNotFoundException e, HttpServletRequest request) {
        ResponseErrorDetails details = new ResponseErrorDetails(request.getRequestURI(), sendReportUrl, "Account not found", "Login Account");
        ResponseError error = new ResponseError((double) ExceptionConstants.ACCOUNT_NOT_FOUND.getValue(), e.getMessage());

        List<ResponseError> errors = new ArrayList<>();
        errors.add(error);

        ResponseException exception = new ResponseException(apiVersion, errors, details);
        return new ResponseEntity<>(exception, HttpStatus.NOT_FOUND);
    }

}
