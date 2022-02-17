package com.week01_real.week01_real.model;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Comment extends Timestamped{
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    @Column(nullable = false)
    private String postid;

//    @Transient
    @Column(nullable = false)
    private String writer;

    @Column(nullable = false)
    private String contents;

    public Comment(CommentDto commentDto){
        this.postid = commentDto.getPostid();
        this.writer = commentDto.getWriter();
        this.contents = commentDto.getContents();
    }
    public void update(CommentDto commentDto){
        this.postid = commentDto.getPostid();
        this.writer = commentDto.getWriter();
        this.contents = commentDto.getContents();

    }
}
