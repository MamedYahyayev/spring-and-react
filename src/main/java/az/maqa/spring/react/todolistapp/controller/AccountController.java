package az.maqa.spring.react.todolistapp.controller;

import az.maqa.spring.react.todolistapp.dto.AccountDto;
import az.maqa.spring.react.todolistapp.request.RequestAccount;
import az.maqa.spring.react.todolistapp.request.RequestLoginAccount;
import az.maqa.spring.react.todolistapp.response.ResponseAccount;
import az.maqa.spring.react.todolistapp.service.AccountService;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/account")
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class AccountController {

    private final AccountService accountService;
    private final ModelMapper modelMapper;


    public AccountController(AccountService accountService, ModelMapper modelMapper) {
        this.accountService = accountService;
        this.modelMapper = modelMapper;
    }

    @PostMapping
    public ResponseAccount createAccount(@Valid @RequestBody RequestAccount requestAccount) {
        AccountDto accountDto = modelMapper.map(requestAccount, AccountDto.class);
        AccountDto savedAccount = accountService.createAccount(accountDto);
        return modelMapper.map(savedAccount, ResponseAccount.class);
    }

    @PostMapping("/login")
    public ResponseAccount loginAccount(@Valid @RequestBody RequestLoginAccount loginAccount) {
        AccountDto login = accountService.loginAccount(loginAccount);
        return modelMapper.map(login, ResponseAccount.class);
    }

    @GetMapping("/{id}")
    public ResponseAccount getTodoListByAccount(@PathVariable Long id) {
        AccountDto account = accountService.getTodoListByAccount(id);
        return modelMapper.map(account, ResponseAccount.class);
    }

    @GetMapping("/logout/{accountId}")
    public ResponseAccount logoutAccount(@PathVariable Long accountId) {
        AccountDto logout = accountService.logoutAccount(accountId);
        return modelMapper.map(logout, ResponseAccount.class);
    }

}
