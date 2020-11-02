package az.maqa.spring.react.todolistapp.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ResponseStatus {
    private static final Double SUCCESS_CODE = 1.0;
    private static final String SUCCESS_MESSAGE = "Success";

    private Double code;
    private String message;

    public ResponseStatus(Double successCode, String successMessage) {
        this.code = successCode;
        this.message = successMessage;
    }

    public static ResponseStatus success() {
        return new ResponseStatus(SUCCESS_CODE, SUCCESS_MESSAGE);
    }

}
