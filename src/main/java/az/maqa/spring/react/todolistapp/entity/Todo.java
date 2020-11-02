package az.maqa.spring.react.todolistapp.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "todos")
@ToString
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "todo_name", length = 30)
    private String todoName;

    @Column(name = "todo_description", length = 4000)
    private String todoDescription;

    @Column(name = "todo_date")
    private Date todoDate;

    @Column(name = "is_done")
    private boolean isDone = false;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JsonManagedReference
    private Account account;

    public Todo(String todoName, String todoDescription, Date todoDate) {
        this.todoName = todoName;
        this.todoDescription = todoDescription;
        this.todoDate = todoDate;
    }
}
