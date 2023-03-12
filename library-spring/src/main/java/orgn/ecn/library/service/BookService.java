package orgn.ecn.library.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import orgn.ecn.library.entity.BookEntity;
import orgn.ecn.library.repository.BookRepository;
import orgn.ecn.library.util.RequestParseException;
import orgn.ecn.library.util.RequestParser;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;


    public List<BookEntity> getAllBooks() {
        return bookRepository.findAll();
    }

    public BookEntity getBook(Integer id) {
        Optional<BookEntity> optionalBook = bookRepository.findById(id);
        return optionalBook.orElse(null);
    }

    public BookEntity createBook(Map<String, Object> request) throws RequestParseException {
        BookEntity book = new BookEntity();
        fillBook(book, request);
        return bookRepository.save(book);
    }

    public BookEntity updateBook(Integer bookId, Map<String, Object> request) throws RequestParseException {
        Optional<BookEntity> optionalBook = bookRepository.findById(bookId);
        if (optionalBook.isPresent()) {
            BookEntity book = optionalBook.get();
            fillBook(book, request);
            return bookRepository.save(book);
        } else {
            throw new RequestParseException("Book not found");
        }
    }


    private void fillBook(BookEntity book, Map<String, Object> request) throws RequestParseException {
        book.setBookTitle(RequestParser.getAsString(request.get("bookTitle")));
        book.setBookAuthors(RequestParser.getAsString(request.get("bookAuthors")));
        book.setBookGenreId(RequestParser.getAsInteger(request.get("bookGenreId")));
    }

    public void deleteBook(Integer id) {
        bookRepository.deleteById(id);
    }
}
