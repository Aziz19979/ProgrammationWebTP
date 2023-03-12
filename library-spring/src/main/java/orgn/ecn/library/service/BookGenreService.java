package orgn.ecn.library.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import orgn.ecn.library.entity.BookGenreEntity;
import orgn.ecn.library.repository.BookGenreRepository;
import orgn.ecn.library.util.RequestParseException;
import orgn.ecn.library.util.RequestParser;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class BookGenreService {

    @Autowired
    private BookGenreRepository bookGenreRepository;


    public List<BookGenreEntity> getAllBookGenres() {
        return bookGenreRepository.findAll();
    }

    public BookGenreEntity getBookGenre(Integer id) {
        Optional<BookGenreEntity> optionalBookGenre = bookGenreRepository.findById(id);
        return optionalBookGenre.orElse(null);
    }

    public BookGenreEntity createBookGenre(Map<String, Object> request) throws RequestParseException {
        BookGenreEntity bookGenre = new BookGenreEntity();
        fillBookGenre(bookGenre, request);
        return bookGenreRepository.save(bookGenre);
    }

    public BookGenreEntity updateBookGenre(Integer bookGenreId, Map<String, Object> request) throws RequestParseException {
        Optional<BookGenreEntity> optionalBookGenre = bookGenreRepository.findById(bookGenreId);
        if (optionalBookGenre.isPresent()) {
            BookGenreEntity bookGenre = optionalBookGenre.get();
            fillBookGenre(bookGenre, request);
            return bookGenreRepository.save(bookGenre);
        } else {
            throw new RequestParseException("BookGenre not found");
        }
    }


    private void fillBookGenre(BookGenreEntity bookGenre, Map<String, Object> request) throws RequestParseException {
        bookGenre.setBookGenreName(RequestParser.getAsString(request.get("bookGenreName")));
    }

    public void deleteBookGenre(Integer id) {
        bookGenreRepository.deleteById(id);
    }
}
