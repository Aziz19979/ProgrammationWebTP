package orgn.ecn.library.entity.auth;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import lombok.Data;

/**
 * in perfect world, this class should be an entity related to database
 * 1 -> ADMIN
 * 2 -> USER
 */
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Role {
    private Long id;
    private String name;
}
