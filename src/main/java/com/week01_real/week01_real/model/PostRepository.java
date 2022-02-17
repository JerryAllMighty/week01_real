package com.week01_real.week01_real.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post,Long> {
    @Query("SELECT p FROM Post p WHERE p.title = ?1 or p.contents = ?1 or p.writer = ?1")
    List<Post> findByTitleOrContentsOrWriter(String query);

}
