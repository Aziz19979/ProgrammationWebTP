package orgn.ecn.library.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import orgn.ecn.library.entity.ManagerEntity;
import orgn.ecn.library.repository.ManagerRepository;
import orgn.ecn.library.util.RequestParseException;
import orgn.ecn.library.util.RequestParser;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ManagerService {

    @Autowired
    private ManagerRepository managerRepository;


    public List<ManagerEntity> getAllManagers() {
        return managerRepository.findAll();
    }

    public ManagerEntity createManager(Map<String, Object> request) throws RequestParseException {
        ManagerEntity manager = new ManagerEntity();
        fillManager(manager, request);
        return managerRepository.save(manager);
    }

    public ManagerEntity updateManager(Integer managerId, Map<String, Object> request) throws RequestParseException {
        Optional<ManagerEntity> optionalManager = managerRepository.findById(managerId);
        if (optionalManager.isPresent()) {
            ManagerEntity manager = optionalManager.get();
            fillManager(manager, request);
            return managerRepository.save(manager);
        } else {
            throw new RequestParseException("Manager not found");
        }
    }


    private void fillManager(ManagerEntity manager, Map<String, Object> request) throws RequestParseException {
        manager.setManagerUsername(RequestParser.getAsString(request.get("managerUsername")));
        manager.setManagerPassword(RequestParser.getAsString(request.get("managerPassword")));
    }

    public void deleteManager(Integer id) {
        managerRepository.deleteById(id);
    }
}
