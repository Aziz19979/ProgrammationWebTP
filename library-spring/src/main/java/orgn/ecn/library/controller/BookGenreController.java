package orgn.ecn.library.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import orgn.ecn.library.entity.BookGenreEntity;
import orgn.ecn.library.service.BookGenreService;
import orgn.ecn.library.util.RequestParseException;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(originPatterns = "*")
public class BookGenreController {

    @Autowired
    private BookGenreService bookGenreService;

    @GetMapping("/book_genres")
    public List<BookGenreEntity> getAllBookGenres() {
        return bookGenreService.getAllBookGenres();
    }

    @GetMapping("/book_genres/{id}")
    public BookGenreEntity getBookGenre(@PathVariable("id") final Integer id) {
        return bookGenreService.getBookGenre(id);
    }

    @PostMapping("/book_genres")
    public BookGenreEntity createBookGenre(@RequestBody Map<String, Object> request) throws RequestParseException {
        return bookGenreService.createBookGenre(request);
    }

    @PatchMapping("/book_genres/{id}")
    public BookGenreEntity updateBookGenre(@PathVariable("id") final Integer id, @RequestBody Map<String, Object> request) throws RequestParseException {
        return bookGenreService.updateBookGenre(id, request);
    }

    @DeleteMapping("/book_genres/{id}")
    public void deleteBookGenre(@PathVariable("id") final Integer id) {
        bookGenreService.deleteBookGenre(id);
    }

}
