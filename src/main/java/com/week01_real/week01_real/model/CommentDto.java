package com.week01_real.week01_real.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Transient;

@Getter
@Setter
public class CommentDto {
    private String postid;
    private String writer;
    private String contents;
}
