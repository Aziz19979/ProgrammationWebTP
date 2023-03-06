package orgn.ecn.library.repository;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import orgn.ecn.library.entity.BookEntity;
import orgn.ecn.library.entity.BorrowEntity;

import javax.persistence.*;
import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<BookEntity, Integer> {
}