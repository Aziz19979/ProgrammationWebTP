package orgn.ecn.library.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import orgn.ecn.library.entity.BorrowEntity;
import orgn.ecn.library.service.BorrowService;
import orgn.ecn.library.util.RequestParseException;

import java.util.List;
import java.util.Map;

@RestController
public class BorrowController {
    @Autowired
    private BorrowService borrowService;

    @GetMapping("/borrows")
    public List<BorrowEntity> getAllBorrows() {
        return borrowService.getAllBorrows();
    }

    @PostMapping("/borrows")
    public BorrowEntity createBorrow(@RequestBody Map<String, Object> request) throws RequestParseException {
        return borrowService.createBorrow(request);
    }

    @PutMapping("/borrows/{id}")
    public BorrowEntity updateBorrow(@PathVariable("id") final Integer id, @RequestBody Map<String, Object> request) throws RequestParseException {
        return borrowService.updateBorrow(id, request);
    }

    @DeleteMapping("/borrows/{id}")
    public void deleteBorrow(@PathVariable("id") final Integer id) {
        borrowService.deleteBorrow(id);
    }
}
