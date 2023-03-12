package orgn.ecn.library.controller.auth;

import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;
import orgn.ecn.library.config.auth.JwtTokenFilter;
import orgn.ecn.library.config.auth.JwtTokenProvider;
import orgn.ecn.library.entity.UserEntity;
import orgn.ecn.library.entity.auth.Role;
import orgn.ecn.library.repository.UserRepository;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin(originPatterns = "*")
public class UserResourceImpl {

    private static final Logger log = LoggerFactory.getLogger(UserResourceImpl.class);

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private UserRepository userRepository;

    /**
     * <pre>
     * post request user in json format where {@link UserEntity#getUsername()} ()}
     * and {@link UserEntity#getPassword()} ()} fields are required,
     * Example:
     * {
     *      "username": "admin",
     *      "password": "admin"
     * }
     * password are saved in database using {@link org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder#encode(CharSequence)}
     * </pre>
     *
     * @param user the user trying to log in
     * @return authentication with token access depending on role of the user if successfully logged in,
     * empty response otherwise.
     * @see JwtTokenFilter#doFilterInternal(HttpServletRequest, HttpServletResponse, FilterChain)
     * returned token must be used in header as value with key: 'Authorization' for any further request on server
     */
    @PostMapping(value = "/api/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> authenticate(@RequestBody UserEntity user) {
        log.info("UserResourceImpl : authenticate");
        // encrypted "admin" : $2a$10$tR4NMaRiVG.QZdXoCsmEUuDltA7Siy0kisCbUwT3p3P3s9wQWdySi
        // encrypted "user" :  $2a$10$nbNEAKss3/jeNdOPfCqel.cLltnDIfE15jpGFEo7rZw1aY/5nAbzi
        JSONObject jsonObject = new JSONObject();
        try {
            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
            if (authentication.isAuthenticated()) {
                jsonObject.put("username", authentication.getName());
                jsonObject.put("roles", authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority).toArray());
                jsonObject.put("token", tokenProvider.createToken(authentication));
                return new ResponseEntity<>(jsonObject.toString(), HttpStatus.OK);
            }
        } catch (JSONException e) {
            try {
                jsonObject.put("exception", e.getMessage());
            } catch (JSONException e1) {
                e1.printStackTrace();
            }
            return new ResponseEntity<>(jsonObject.toString(), HttpStatus.UNAUTHORIZED);
        }
        return null;
    }
}