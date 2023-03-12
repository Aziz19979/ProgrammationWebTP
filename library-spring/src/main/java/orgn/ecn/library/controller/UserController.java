package orgn.ecn.library.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import orgn.ecn.library.entity.UserEntity;
import orgn.ecn.library.service.UserService;
import orgn.ecn.library.util.RequestParseException;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(originPatterns = "*")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<UserEntity> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/users")
    public UserEntity createUser(@RequestBody Map<String, Object> request) throws RequestParseException {
        return userService.createUser(request);
    }

    @PatchMapping("/users/{id}")
    public UserEntity updateUser(@PathVariable("id") final Integer id, @RequestBody Map<String, Object> request) throws RequestParseException {
        return userService.updateUser(id, request);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable("id") final Integer id) {
        userService.deleteUser(id);
    }
}
