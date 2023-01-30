package com.niit.UserAuthentication.service;

import com.niit.UserAuthentication.domain.UserModel;
import com.niit.UserAuthentication.exception.UserAlreadyExistException;
import com.niit.UserAuthentication.exception.UserNotFoundException;
import com.niit.UserAuthentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserModel addUser(UserModel user) throws UserAlreadyExistException {
        if (userRepository.findById(user.getEmail()).isPresent()) {
            throw new UserAlreadyExistException();
        } else {
            return userRepository.save(user);
        }

    }

    @Override
    public UserModel loginCheck(String email, String userPassword) throws UserNotFoundException {
        UserModel user = userRepository.findByEmailAndPassword(email, userPassword);
        if (user != null) { //authentication is ok
            return user;
        } else { // authentication failed
            throw new UserNotFoundException();
        }
    }

    @Override
    public List<UserModel> getAll() {
        return userRepository.findAll();
    }

    @Override
    public UserModel fetchUserByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }
}
