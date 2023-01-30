/*
 *Author Name : Seetha Lakshmi.G.M
 *Date : 12-12-2022
 *Created With : IntelliJ IDEA Community Edition
 */


package com.example.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "The Furniture ID requested is not available! Try with some other ID number!")
public class CustomerNotFound extends Exception{
}
