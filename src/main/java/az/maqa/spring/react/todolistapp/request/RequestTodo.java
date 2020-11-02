package az.maqa.spring.react.todolistapp.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RequestTodo {

    @NotBlank(message = "TODO name cannot be empty")
    @Size(max = 30, message = "TODO name must be less than 30 characters")
    private String todoName;

    private String todoDescription;

    @Future(message = "Date must be in the future")
    private Date todoDate;

    private boolean isDone;

    private Long accountId;
}
