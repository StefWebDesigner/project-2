package com.Revature.Revademy.exception;

import com.Revature.Revademy.exception.UnderAgeException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UnderAgeException.class)
    public ResponseEntity<String> handlerExceptions(UnderAgeException e) {
        return ResponseEntity.ok(e.getMessage());
    }

    @ExceptionHandler(NonExistingUserException.class)
    public ResponseEntity<String> handleNonExistingUser(NonExistingUserException e){
        return ResponseEntity.ok(e.getMessage());
    }

    @ExceptionHandler(NoUserExistToDeleteException.class)
    public ResponseEntity<String> handleNoUserExistToDelete(NoUserExistToDeleteException e){
        return ResponseEntity.ok(e.getMessage());
    }



}
