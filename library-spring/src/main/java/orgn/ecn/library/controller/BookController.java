package orgn.ecn.library.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import orgn.ecn.library.entity.BookEntity;
import orgn.ecn.library.service.BookService;
import orgn.ecn.library.util.RequestParseException;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(originPatterns = "*")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping("/books")
    public List<BookEntity> getAllBooks() {
        return bookService.getAllBooks();
    }

    @PostMapping("/books")
    public BookEntity createBook(@RequestBody Map<String, Object> request) throws RequestParseException {
        return bookService.createBook(request);
    }

    @PutMapping("/books/{id}")
    public BookEntity updateBook(@PathVariable("id") final Integer id, @RequestBody Map<String, Object> request) throws RequestParseException {
        return bookService.updateBook(id, request);
    }

    @DeleteMapping("/books/{id}")
    public void deleteBook(@PathVariable("id") final Integer id) {
        bookService.deleteBook(id);
    }
}
