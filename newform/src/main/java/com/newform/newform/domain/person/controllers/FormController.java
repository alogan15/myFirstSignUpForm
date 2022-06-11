package com.newform.newform.domain.person.controllers;


import com.newform.newform.domain.person.models.Form;
import com.newform.newform.domain.person.services.FormService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class FormController {

    private FormService formService;


    public FormController(FormService formService) {
        this.formService = formService;
    }

    @PostMapping("/signup")
    ResponseEntity<Form> createPerson(@RequestBody Form form) {
        form = formService.create(form);
        return new ResponseEntity<>(form, HttpStatus.CREATED);
    }

    @GetMapping("/signup")
    ResponseEntity<Iterable<Form>> getAll() {
        Iterable<Form> people = formService.findAll();
        return new ResponseEntity<>(people, HttpStatus.OK);
    }
}

