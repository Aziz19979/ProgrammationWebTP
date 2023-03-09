package orgn.ecn.library.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import orgn.ecn.library.entity.ManagerEntity;
import orgn.ecn.library.service.ManagerService;
import orgn.ecn.library.util.RequestParseException;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(originPatterns = "*")
public class ManagerController {
    @Autowired
    private ManagerService managerService;

    @GetMapping("/managers")
    public List<ManagerEntity> getAllManagers() {
        return managerService.getAllManagers();
    }

    @PostMapping("/managers")
    public ManagerEntity createManager(@RequestBody Map<String, Object> request) throws RequestParseException {
        return managerService.createManager(request);
    }

    @PutMapping("/managers/{id}")
    public ManagerEntity updateManager(@PathVariable("id") final Integer id, @RequestBody Map<String, Object> request) throws RequestParseException {
        return managerService.updateManager(id, request);
    }

    @DeleteMapping("/managers/{id}")
    public void deleteManager(@PathVariable("id") final Integer id) {
        managerService.deleteManager(id);
    }
}
