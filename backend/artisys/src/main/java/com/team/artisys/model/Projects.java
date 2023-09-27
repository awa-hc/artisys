package com.team.artisys.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Data
@Entity


public class Projects {
    @Id
    private Long id_project;
    private String name;
    private String description;
    private Date created_at;
    private Date start_date;
    private Date end_date;
    private Date preview_date;
    private String img_project;


}
