package az.maqa.spring.react.todolistapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AccountDto {
    private Long id;
    private String name;
    private String surname;
    private String username;
    private String password;
    private boolean isLogged;
    private List<TodoDto> todos;
}
