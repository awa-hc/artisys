package com.team.artisys.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity

public class Project_teams {
    @Id
    private Long id_project_team;

    @OneToOne
    @PrimaryKeyJoinColumn
    private Projects id_project;

    @ManyToOne
    @JoinColumn( name= "id")
    private User id;

}
