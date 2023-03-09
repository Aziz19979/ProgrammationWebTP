package orgn.ecn.library.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import orgn.ecn.library.entity.PersonEntity;
import orgn.ecn.library.repository.PersonRepository;
import orgn.ecn.library.util.RequestParseException;
import orgn.ecn.library.util.RequestParser;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;


    public List<PersonEntity> getAllPersons() {
        return personRepository.findAll();
    }

    public PersonEntity createPerson(Map<String, Object> request) throws RequestParseException {
        PersonEntity person = new PersonEntity();
        fillPerson(person, request);
        return personRepository.save(person);
    }

    public PersonEntity updatePerson(Integer personId, Map<String, Object> request) throws RequestParseException {
        Optional<PersonEntity> optionalPerson = personRepository.findById(personId);
        if (optionalPerson.isPresent()) {
            PersonEntity person = optionalPerson.get();
            fillPerson(person, request);
            return personRepository.save(person);
        } else {
            throw new RequestParseException("Person not found");
        }
    }


    private void fillPerson(PersonEntity person, Map<String, Object> request) throws RequestParseException {
        person.setPersonBirthdate(RequestParser.getAsDate(request.get("personBirthdate")));
        person.setPersonFirstname(RequestParser.getAsString(request.get("personFirstname")));
        person.setPersonLastname(RequestParser.getAsString(request.get("personLastname")));
    }

    public void deletePerson(Integer id) {
        personRepository.deleteById(id);
    }
}
