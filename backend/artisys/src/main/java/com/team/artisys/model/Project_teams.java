package com.team.artisys.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity

public class Project_teams {
    @Id
    private Long id_project_team;

    @OneToOne
    @JoinColumn( name = "project_id")
    private Projects id_project;

    @ManyToOne
    @JoinColumn( name= "id")
    private Users id;

}
