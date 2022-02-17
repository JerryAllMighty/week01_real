# 항해 99 주특기 1주차 개인 과제 - 나만의 항해 블로그 만들기  :diamond_shape_with_a_dot_inside:
***

## 개발자 :bust_in_silhouette:
### 김윤민   :rose:  
### Email : dbsalszz@naver.com :email: :love_letter:
***
## 사용 기술 :computer:
<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white">

***
## 주요 기능 :cherry_blossom:
### :seedling: 게시글 전체 조회, 검색 조회, 등록, 수정, 삭제
### :blossom: 댓글 조회, 등록, 수정, 삭제
          
***
## API  :barber:
* :white_check_mark: 전체 게시글 목록 조회
  * Request
    * Method : GET
    * URL : /api/posts
  * Respones
    * HTTP Status Code : 200
    * Payload : { createdAt: LocalDateTime, modifiedAt: LocalDateTime, Id: long, title: string, content: string, writer : string }
      
      
      
* :white_check_mark: 게시글 검색 조회
  * Request
    * Method : GET
    * URL : /api/posts/search/{query}
  * Respones
    * HTTP Status Code : 200
    * Payload : { createdAt: LocalDateTime, modifiedAt: LocalDateTime, Id: long, title: string, content: string, writer : string }


* :white_check_mark: 게시글 등록
  * Request
    * Method : POST
    * URL : /api/posts
    * Head : {Content-Type:application/json}
    * Body : {title: string, contents : string, writer : string}
  * Respones
    * HTTP Status Code : 200
    * Payload : { createdAt: LocalDateTime, modifiedAt: LocalDateTime, Id: long, title: string, content: string, writer : string }


* :white_check_mark: 게시글 수정
  * Request
    * Method : PUT
    * URL : /api/posts/{id}
    * Head : {Content-Type:application/json}
    * Body : {title: string, contents : string, writer : string}
  * Respones
    * HTTP Status Code : 200
    * Payload : { createdAt: LocalDateTime, modifiedAt: LocalDateTime, Id: long, title: string, content: string, writer : string }


* :white_check_mark: 게시글 삭제
  * Request
    * Method : DELETE
    * URL : /api/posts/{id}
  * Respones
    * HTTP Status Code : 200
    * Payload : id
    
    
    
* :white_check_mark: 해당 게시물의 댓글 조회
  * Request
    * Method : GET
    * URL : /api/comments/{postid}
  * Respones
    * HTTP Status Code : 200
    * Payload : { createdAt: LocalDateTime, modifiedAt: LocalDateTime, Id: long, postid: string, content: string, writer : string }

    
    
* :white_check_mark: 댓글 등록
  * Request
    * Method : POST
    * URL : /api/comments
    * Head : {Content-Type:application/json}
    * Body : {postid: string, contents : string, writer : string}
  * Respones
    * HTTP Status Code : 200
    * Payload : { createdAt: LocalDateTime, modifiedAt: LocalDateTime, Id: long, postid: string, content: string, writer : string }

    
    
    
* :white_check_mark: 댓글 수정
  * Request
    * Method : PUT
    * URL : /api/comments/{id}
    * Head : {Content-Type:application/json}
    * Body : {postid: string, contents : string, writer : string}
  * Respones
    * HTTP Status Code : 200
    * Payload : { createdAt: LocalDateTime, modifiedAt: LocalDateTime, Id: long, postid: string, content: string, writer : string }

    
    
    
    
    
* :white_check_mark: 댓글 삭제
  * Request
    * Method : DELETE
    * URL : /api/comments/{id}
  * Respones
    * HTTP Status Code : 200
    * Payload : id


