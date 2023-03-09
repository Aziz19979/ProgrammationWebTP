package orgn.ecn.library.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "manager")
@Getter
@Setter
public class ManagerEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "manager_id", nullable = false)
    private int managerId;
    @Basic
    @Column(name = "manager_username", nullable = false)
    private String managerUsername;
    @Basic
    @Column(name = "manager_password", nullable = false)
    private String managerPassword;
}
