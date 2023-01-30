package com.niit.UserAuthentication.controller;

import com.niit.UserAuthentication.domain.UserModel;
import com.niit.UserAuthentication.exception.UserAlreadyExistException;
import com.niit.UserAuthentication.exception.UserNotFoundException;
import com.niit.UserAuthentication.service.SecurityTokenGenerator;
import com.niit.UserAuthentication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin
@RequestMapping("/userservice")
@RestController
public class UserController {
    private final UserService userService;
    private final SecurityTokenGenerator securityTokenGenerator;

    @Autowired
    public UserController(UserService userService, SecurityTokenGenerator securityTokenGenerator) {
        this.userService = userService;
        this.securityTokenGenerator = securityTokenGenerator;
    }


    @PostMapping("/register")
    public ResponseEntity<?> saveUser(@RequestBody UserModel userModel) throws UserAlreadyExistException {
        return new ResponseEntity<>(userService.addUser(userModel), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public UserModel loginCheck(@RequestBody UserModel user) throws Exception {
        String tempEmailId = user.getEmail();
        String tempPassword = user.getPassword();
        UserModel userObj = null;
        if(tempEmailId != null && tempPassword != null){
           userObj = userService.fetchUserByEmailAndPassword(tempEmailId,tempPassword);
        }
        if(userObj.getEmail() == null && userObj.getPassword() == null){
            throw new Exception("Wrong Credentials!");
        }
        return userObj;

    }

    @GetMapping("/fetchAll")
    public ResponseEntity<?> getAllUsers() {
        return new ResponseEntity<>(userService.getAll(), HttpStatus.OK);
    }

}
