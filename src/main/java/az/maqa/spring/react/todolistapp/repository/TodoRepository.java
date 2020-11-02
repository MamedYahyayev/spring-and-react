package az.maqa.spring.react.todolistapp.repository;

import az.maqa.spring.react.todolistapp.entity.Todo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface TodoRepository extends PagingAndSortingRepository<Todo, Long> {
    Todo findTodoById(Long todoId);

    Long countAllByAccount_Id(Long accountId);

    Page<Todo> findAllByAccount_Id(Pageable pageable, Long accountId);
}
