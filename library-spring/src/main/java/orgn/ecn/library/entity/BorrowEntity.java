package orgn.ecn.library.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "borrow")
@Getter
@Setter
public class BorrowEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "borrow_id", nullable = false)
    private int borrowId;
    @Basic
    @Column(name = "borrow_date", nullable = false)
    private Date borrowDate;
    @Basic
    @Column(name = "borrow_return", nullable = false)
    private Date borrowReturn;
    @Basic
    @Column(name = "person_id", nullable = false)
    private int personId;
    @Basic
    @Column(name = "book_id", nullable = false)
    private int bookId;
    @ManyToOne
    @JoinColumn(name = "person_id", referencedColumnName = "person_id",
    insertable = false, updatable = false, nullable = false)
    private PersonEntity person;
    @ManyToOne
    @JoinColumn(name = "book_id", referencedColumnName = "book_id",
    insertable = false, updatable = false, nullable = false)
    private BookEntity book;
}
