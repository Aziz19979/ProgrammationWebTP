package orgn.ecn.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import orgn.ecn.library.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    UserEntity findByUsername(String username);
}