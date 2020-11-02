package az.maqa.spring.react.todolistapp.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseErrorDetails {
    private String domain;
    private String sendReport;
    private String reason;
    private String action;
}
