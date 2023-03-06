package orgn.ecn.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import orgn.ecn.library.entity.BorrowEntity;
import orgn.ecn.library.entity.PersonEntity;

public interface PersonRepository extends JpaRepository<PersonEntity, Integer> {
}