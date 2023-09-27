package com.team.artisys.model;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class User {
    @Id
    private Long id;
    private String name;
    private String last_name;
    private int role;
    private String img_profile;
    private String CI;

}
