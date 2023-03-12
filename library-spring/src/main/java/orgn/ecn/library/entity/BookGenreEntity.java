package orgn.ecn.library.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "book_genre")
@Getter
@Setter
public class BookGenreEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "book_genre_id", nullable = false)
    private int bookGenreId;
    @Basic
    @Column(name = "book_genre_name", nullable = false, length = 256)
    private String bookGenreName;

    @JsonIgnore
    @OneToMany(mappedBy = "bookGenre")
    private List<BookEntity> books;
}
