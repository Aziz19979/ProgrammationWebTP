package orgn.ecn.library.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import orgn.ecn.library.entity.UserEntity;
import orgn.ecn.library.repository.UserRepository;
import orgn.ecn.library.util.RequestParseException;
import orgn.ecn.library.util.RequestParser;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }

    public UserEntity createUser(Map<String, Object> request) throws RequestParseException {
        UserEntity user = new UserEntity();
        fillUser(user, request);
        return userRepository.save(user);
    }

    public UserEntity updateUser(Integer userId, Map<String, Object> request) throws RequestParseException {
        Optional<UserEntity> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            UserEntity user = optionalUser.get();
            fillUser(user, request);
            return userRepository.save(user);
        } else {
            throw new RequestParseException("User not found");
        }
    }


    private void fillUser(UserEntity user, Map<String, Object> request) throws RequestParseException {
        user.setUsername(RequestParser.getAsString(request.get("username")));
        user.setPassword(RequestParser.getAsString(request.get("password")));
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
}
