package az.maqa.spring.react.todolistapp.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseException {
    private Double apiVersion;
    private List<ResponseError> errors;
    private ResponseErrorDetails details;
}
