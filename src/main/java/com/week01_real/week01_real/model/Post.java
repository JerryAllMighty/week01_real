package com.week01_real.week01_real.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.json.JSONObject;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Post extends Timestamped{

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String writer;

    @Column(nullable = false)
    private String contents;

    public Post(PostDto postDto){
        this.title = postDto.getTitle();
        this.writer = postDto.getWriter();
        this.contents = postDto.getContents();
    }
    public void update(PostDto postDto){
        this.title = postDto.getTitle();
        this.writer = postDto.getWriter();
        this.contents = postDto.getContents();

    }

}
