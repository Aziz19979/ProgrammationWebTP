package orgn.ecn.library.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "person")
@Getter
@Setter
public class PersonEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "person_id", nullable = false)
    private int personId;
    @Basic
    @Column(name = "person_birthdate", nullable = false)
    private Date personBirthdate;
    @Basic
    @Column(name = "person_firstname", nullable = false, length = 128)
    private String personFirstname;
    @Basic
    @Column(name = "person_lastname", nullable = false, length = 128)
    private String personLastname;

    @JsonIgnore
    @OneToMany(mappedBy = "person")
    private List<BorrowEntity> borrows;
}
