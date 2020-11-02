package az.maqa.spring.react.todolistapp.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseTodo {
    private Long id;
    private String todoName;
    private String todoDescription;
    private Date todoDate;
    private boolean isDone;
    private ResponseAccountForTodo account;
}
