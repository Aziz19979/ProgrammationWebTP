package orgn.ecn.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import orgn.ecn.library.entity.PersonEntity;

@Repository
public interface PersonRepository extends JpaRepository<PersonEntity, Integer> {
}