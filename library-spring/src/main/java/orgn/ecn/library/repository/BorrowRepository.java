package orgn.ecn.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import orgn.ecn.library.entity.BorrowEntity;

@Repository
public interface BorrowRepository extends JpaRepository<BorrowEntity, Integer> {
}