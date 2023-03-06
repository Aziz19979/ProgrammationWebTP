package orgn.ecn.library.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "book")
@Getter
@Setter
public class BookEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "book_id", nullable = false)
    private int bookId;
    @Basic
    @Column(name = "book_title", nullable = false, length = 2560)
    private String bookTitle;
    @Basic
    @Column(name = "book_authors", nullable = false, length = 256)
    private String bookAuthors;
    @OneToMany(mappedBy = "book")
    private List<BorrowEntity> borrows;
}
