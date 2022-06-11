package com.newform.newform.domain.person.repos;
import com.newform.newform.domain.person.models.Form;
import org.springframework.data.repository.CrudRepository;
import java.util.Optional;


public interface FormRepo extends CrudRepository<Form, Long> {
    Optional<Form> findByFirstName(String firstName);

}
