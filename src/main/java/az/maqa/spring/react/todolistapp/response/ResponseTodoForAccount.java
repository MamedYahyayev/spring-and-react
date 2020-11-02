package az.maqa.spring.react.todolistapp.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseTodoForAccount {
    private Long id;
    private String todoName;
    private String todoDescription;
    private boolean isDone;
    private Date todoDate;
}
