package com.team.artisys.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
public class Task {
    @Id
    private Long id_task;
    private String title;
    private String description;
    private Date start_date;
    private Date ending_date;
    private int status;
    @ManyToOne
    @JoinColumn(name = "name")
    private Projects name;
}
