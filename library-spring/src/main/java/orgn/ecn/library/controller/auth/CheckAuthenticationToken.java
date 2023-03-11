package orgn.ecn.library.controller.auth;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(originPatterns = "*")
public class CheckAuthenticationToken {
    @GetMapping("/checkToken")
    public Boolean checkToken() {
        return true;
    }
}
