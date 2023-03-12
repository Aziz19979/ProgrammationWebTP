package orgn.ecn.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import orgn.ecn.library.entity.BookGenreEntity;

@Repository
public interface BookGenreRepository extends JpaRepository<BookGenreEntity, Integer> {
}