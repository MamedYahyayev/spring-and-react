package az.maqa.spring.react.todolistapp.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "account")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String surname;

    @Column(unique = true)
    private String username;

    private String password;

    @OneToMany(mappedBy = "account")
    @JsonBackReference
    private List<Todo> todos;

    @Column
    private boolean isLogged = false;
}
