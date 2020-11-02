package az.maqa.spring.react.todolistapp.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseAccountForTodo {
    private Long id;
    private String name;
    private String surname;
    private String username;
    private boolean isLogged;
}
