package az.maqa.spring.react.todolistapp.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseAccount {
    private Long id;
    private String name;
    private String surname;
    private String username;
    private boolean isLogged;
    private List<ResponseTodoForAccount> todos;
}
