package com.newform.newform.domain.person.services;

import com.newform.newform.domain.person.models.Form;
import com.newform.newform.domain.person.repos.FormRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class FormServiceImpl implements FormService {

    private FormRepo formRepo;

    @Autowired
    public FormServiceImpl(FormRepo formRepo) {
        this.formRepo = formRepo;
    }

    @Override
    public Form create(Form form) {
        return formRepo.save(form);
    }

    @java.lang.Override
    public Iterable<Form> findAll() {
        return null;
    }
}
