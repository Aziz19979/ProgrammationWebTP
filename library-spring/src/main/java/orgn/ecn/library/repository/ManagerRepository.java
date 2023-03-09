package orgn.ecn.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import orgn.ecn.library.entity.ManagerEntity;

public interface ManagerRepository extends JpaRepository<ManagerEntity, Integer> {
}