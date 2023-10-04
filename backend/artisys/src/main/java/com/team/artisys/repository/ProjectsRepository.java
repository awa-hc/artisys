package com.team.artisys.repository;

import com.team.artisys.model.Projects;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository


public interface ProjectsRepository extends JpaRepository<Projects, Long> {
}
