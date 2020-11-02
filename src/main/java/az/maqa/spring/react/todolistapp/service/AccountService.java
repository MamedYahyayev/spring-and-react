package az.maqa.spring.react.todolistapp.service;

import az.maqa.spring.react.todolistapp.dto.AccountDto;
import az.maqa.spring.react.todolistapp.request.RequestLoginAccount;


public interface AccountService {
    AccountDto createAccount(AccountDto accountDto);

    AccountDto getTodoListByAccount(Long id);

    AccountDto loginAccount(RequestLoginAccount loginAccount);

    AccountDto logoutAccount(Long accountId);

}
