package az.maqa.spring.react.todolistapp.service.impl;

import az.maqa.spring.react.todolistapp.dto.AccountDto;
import az.maqa.spring.react.todolistapp.entity.Account;
import az.maqa.spring.react.todolistapp.exception.AccountNotFoundException;
import az.maqa.spring.react.todolistapp.repository.AccountRepository;
import az.maqa.spring.react.todolistapp.request.RequestLoginAccount;
import az.maqa.spring.react.todolistapp.service.AccountService;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


@Service
@Slf4j
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;
    private final ModelMapper modelMapper;

    public AccountServiceImpl(AccountRepository accountRepository, ModelMapper modelMapper) {
        this.accountRepository = accountRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public AccountDto createAccount(AccountDto accountDto) {
        Account account = modelMapper.map(accountDto, Account.class);
        Account savedAccount = accountRepository.save(account);
        return modelMapper.map(savedAccount, AccountDto.class);
    }

    @Override
    public AccountDto getTodoListByAccount(Long id) {
        Account account = accountRepository.findAccountById(id);
        return modelMapper.map(account, AccountDto.class);
    }

    @Override
    public AccountDto loginAccount(RequestLoginAccount loginAccount) {
        Account account = accountRepository.findAccountByUsernameAndPassword(loginAccount.getUsername(), loginAccount.getPassword());
        if (account == null || account.getUsername().isEmpty())
            throw new AccountNotFoundException("Account not exists");
        account.setLogged(true);
        Account savedAccount = accountRepository.save(account);
        return modelMapper.map(savedAccount, AccountDto.class);
    }

    @Override
    public AccountDto logoutAccount(Long accountId) {
        Account account = accountRepository.findAccountById(accountId);
        account.setLogged(false);
        Account logoutAccount = accountRepository.save(account);
        return modelMapper.map(logoutAccount, AccountDto.class);
    }
}
