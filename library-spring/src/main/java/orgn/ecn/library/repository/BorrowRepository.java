package orgn.ecn.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import orgn.ecn.library.entity.BorrowEntity;

public interface BorrowRepository extends JpaRepository<BorrowEntity, Integer> {
}