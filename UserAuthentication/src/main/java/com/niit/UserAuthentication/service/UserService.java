package com.niit.UserAuthentication.service;

import com.niit.UserAuthentication.domain.UserModel;
import com.niit.UserAuthentication.exception.UserAlreadyExistException;
import com.niit.UserAuthentication.exception.UserNotFoundException;

import java.util.List;

public interface UserService {
    UserModel addUser(UserModel user) throws UserAlreadyExistException;

    UserModel loginCheck(String email, String userPassword) throws UserNotFoundException;
    List<UserModel> getAll();
    UserModel fetchUserByEmailAndPassword(String email, String password);
}
