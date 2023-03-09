package orgn.ecn.library.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import orgn.ecn.library.entity.PersonEntity;
import orgn.ecn.library.service.PersonService;
import orgn.ecn.library.util.RequestParseException;

import java.util.List;
import java.util.Map;

@RestController
public class PersonController {
    @Autowired
    private PersonService personService;

    @GetMapping("/persons")
    public List<PersonEntity> getAllPersons() {
        return personService.getAllPersons();
    }

    @PostMapping("/persons")
    public PersonEntity createPerson(@RequestBody Map<String, Object> request) throws RequestParseException {
        return personService.createPerson(request);
    }

    @PutMapping("/persons/{id}")
    public PersonEntity updatePerson(@PathVariable("id") final Integer id, @RequestBody Map<String, Object> request) throws RequestParseException {
        return personService.updatePerson(id, request);
    }

    @DeleteMapping("/persons/{id}")
    public void deletePerson(@PathVariable("id") final Integer id) {
        personService.deletePerson(id);
    }
}
