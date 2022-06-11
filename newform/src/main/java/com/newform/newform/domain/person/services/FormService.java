package com.newform.newform.domain.person.services;
import com.newform.newform.domain.person.models.Form;


public interface FormService {
    Form create(Form form);

    Iterable<Form> findAll();
}
