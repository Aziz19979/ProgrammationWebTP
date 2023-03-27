package orgn.ecn.library.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import orgn.ecn.library.entity.BorrowEntity;
import orgn.ecn.library.repository.BorrowRepository;
import orgn.ecn.library.util.RequestParseException;
import orgn.ecn.library.util.RequestParser;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class BorrowService {

    @Autowired
    private BorrowRepository borrowRepository;


    public List<BorrowEntity> getAllBorrows() {
        return borrowRepository.findAll();
    }

    public BorrowEntity createBorrow(Map<String, Object> request) throws RequestParseException {
        BorrowEntity borrow = new BorrowEntity();
        fillBorrow(borrow, request);
        return borrowRepository.save(borrow);
    }

    public BorrowEntity updateBorrow(Integer borrowId, Map<String, Object> request) throws RequestParseException {
        Optional<BorrowEntity> optionalBorrow = borrowRepository.findById(borrowId);
        if (optionalBorrow.isPresent()) {
            BorrowEntity borrow = optionalBorrow.get();
            fillBorrow(borrow, request);
            return borrowRepository.save(borrow);
        } else {
            throw new RequestParseException("Borrow not found");
        }
    }


    private void fillBorrow(BorrowEntity borrow, Map<String, Object> request) throws RequestParseException {
        borrow.setBorrowDate(RequestParser.getAsDate(request.get("borrowDate")));
        borrow.setBorrowReturn(RequestParser.getAsDate(request.get("borrowReturn")));
        borrow.setFinishReading(RequestParser.getAsBoolean(request.get("finishReading")));
        borrow.setPersonId(RequestParser.getAsInteger(request.get("personId")));
        borrow.setBookId(RequestParser.getAsInteger(request.get("bookId")));
    }

    public void deleteBorrow(Integer id) {
        borrowRepository.deleteById(id);
    }
}
