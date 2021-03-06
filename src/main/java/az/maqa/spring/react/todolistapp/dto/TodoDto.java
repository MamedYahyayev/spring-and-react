package az.maqa.spring.react.todolistapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TodoDto {
    private String id;
    private String todoName;
    private String todoDescription;
    private Date todoDate;
    private boolean isDone;
    private AccountDto account;
}
