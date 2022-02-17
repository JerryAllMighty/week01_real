package com.week01_real.week01_real.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface CommentRepository extends JpaRepository<Comment,Long> {
    @Query("SELECT c FROM Comment c WHERE c.postid = ?1")
    List<Comment> findByPostId(String query);

    @Query("SELECT c FROM Comment c")
    List<CommentsContentsOnly> findContents();

    @Transactional
    @Modifying(clearAutomatically = true, flushAutomatically = true)
    @Query("DELETE FROM Comment c WHERE c.postid = ?1")
    void deleteCommentByPostId(String query);
}
