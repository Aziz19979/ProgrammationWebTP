package orgn.ecn.library.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(originPatterns = "*")
public class LoginController {

    @GetMapping("/login")
    public String getLogin() {
        return "Hello World";
    }
}
