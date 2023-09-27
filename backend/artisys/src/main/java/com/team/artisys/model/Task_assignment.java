package com.team.artisys.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
@Data
@Entity
public class Task_assignment {

    @Id
    private Long id_assignment;
    @ManyToOne
    @JoinColumn(name = "id")
    private User id;
    @ManyToOne
    @JoinColumn(name = "task_id")
    private Task id_task;

    @ManyToOne
    @JoinColumn(name = "pm")
    private Task_assignment pm;
}
