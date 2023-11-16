package com.team.artisys.model;




import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Users{
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String email;
    private String last_name;
    private String img_profile;
    private String CI;
    private String password;

}
 