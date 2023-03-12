package orgn.ecn.library.config.auth;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import orgn.ecn.library.entity.UserEntity;

import java.util.Collection;

@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
public class MyUserDetails extends org.springframework.security.core.userdetails.User {

    private static final long serialVersionUID = 1L;

    private String email;

    public MyUserDetails(String username, String password, Collection<? extends GrantedAuthority> authorities, UserEntity user) {
        super(username, password, authorities);
        this.email = user.getEmail();
    }
}
