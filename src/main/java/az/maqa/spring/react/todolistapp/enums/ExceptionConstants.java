package az.maqa.spring.react.todolistapp.enums;

public enum ExceptionConstants {

    TODO_NOT_FOUND(101), TODO_BAD_REQUEST(102), ACCOUNT_NOT_FOUND(103);

    private int value;

    ExceptionConstants(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
