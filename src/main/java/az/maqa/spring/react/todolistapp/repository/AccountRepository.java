package az.maqa.spring.react.todolistapp.repository;

import az.maqa.spring.react.todolistapp.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {

    Account findAccountById(Long id);

    Account findAccountByUsernameAndPassword(String username, String password);
}
