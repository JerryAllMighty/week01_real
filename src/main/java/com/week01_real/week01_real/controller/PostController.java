package com.week01_real.week01_real.controller;

import com.week01_real.week01_real.model.CommentRepository;
import com.week01_real.week01_real.model.Post;
import com.week01_real.week01_real.model.PostDto;
import com.week01_real.week01_real.model.PostRepository;
import com.week01_real.week01_real.service.PostService;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class PostController {
    private final PostService postservice;
    private final PostRepository postRepository;
    private final CommentRepository commentRepository;

    @GetMapping("/api/posts")
    public List<Post> getPosts(){
        return postRepository.findAll(Sort.by(Sort.Direction.DESC, "createdAt"));
    }

    @GetMapping("/api/posts/search/{query}")
    public List<Post> searchPosts(@PathVariable String query){
        System.out.println(query);
        return postRepository.findByTitleOrContentsOrWriter(query);
    }

    @PostMapping("/api/posts")
    public Post createProduct(@RequestBody PostDto postDto) {
        System.out.println(postDto.getTitle());
        Post product = new Post(postDto);
        postRepository.save(product);
        return product;
    }
    // 설정 가격 변경
    @PutMapping("/api/posts/{id}")
    public Long updateProduct(@PathVariable Long id, @RequestBody PostDto postDto) {
        System.out.println(postDto);
        return postservice.update(id, postDto);
    }

    @DeleteMapping("/api/posts/{id}")
    public Long deleteMemo(@PathVariable Long id) {
        postRepository.deleteById(id);
        commentRepository.deleteCommentByPostId(id.toString());
        return id;
    }
}
