package az.maqa.spring.react.todolistapp.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestAccount {
    @Size(max = 30, message = "Name must be less than 30 characters")
    @NotEmpty(message = "Name cannot be empty")
    private String name;

    @Size(max = 30, message = "Surname must be less than 30 characters")
    @NotEmpty(message = "Surname cannot be empty")
    private String surname;

    @Size(max = 30, message = "Username must be less than 30 characters")
    @NotEmpty(message = "Username cannot be empty")
    private String username;

    @Size(max = 30, message = "Password must be less than 30 characters")
    @Size(min = 8, message = "Password must be more than 8 characters")
    @NotEmpty(message = "Username cannot be empty")
    private String password;
}
