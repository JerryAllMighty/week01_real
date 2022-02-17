$(document).ready(function () {
    getPosts();
})
//게시글 기능
//게시글 전체 조회
function getPosts() {
    $.ajax({
        type: 'GET',
        url: '/api/posts',
        success: function (response) {
            $('.search-result-box').empty();
            for (let i = 0; i < response.length; i++) {
                let post = response[i]
                let tempHtml = `<div class="one-post">
                    <div class="one-post-content" id="${post.id}">
                        <div > ${post.title} </div>
                        <div>${post.contents}</div>
                        <div>${post.writer}</div>
                    </div>
                <button onclick="popupModify(${post.id})">수정</button>
                <button onclick="deletePost(${post.id})">삭제</button>
                <button onclick="getComments(${post.id})">댓글 보기</button>
                <button onclick="popupCommentCreate(${post.id})">댓글 쓰기</button>
            </div>`;
                $('.search-result-box').append(tempHtml);
            }
        }
    })
}

//게시글 등록
function createPost() {
    let title = $('.title').val();
    let writer = $('.writer').val();
    let contents = $('.contents').val();
    postDto = {'title': title, 'contents': contents, 'writer': writer}

    $.ajax({
        type: 'POST',
        url: '/api/posts',
        data: JSON.stringify(postDto),
        contentType: 'application/json',
        success: function (response) {
            window.location.reload();
        }
    })
}

//게시글 검색 조회
function searchPost() {
    let query = $('.search-input').val();
    $.ajax({
        type: 'GET',
        url: `/api/posts/search/${query}`,
        contentType: 'application/json',
        success: function (response) {
            $('.search-result-box').empty();
            for (let i = 0; i < response.length; i++) {
                let post = response[i]
                let tempHtml = `<div class="one-post" id="${post.id}">
                    <div class="one-post-content">
                        <div > ${post.title} </div>
                        <div>${post.contents}</div>
                        <div>${post.writer}</div>
                    </div>
                <button onclick="popupModify(${post.id})">수정</button>
                <button onclick="deletePost(${post.id})">삭제</button>
                <button onclick="getComments(${post.id})">댓글 보기</button>
                <button onclick="popupCommentCreate(${post.id})">댓글 쓰기</button>
            </div>`;
                $('.search-result-box').append(tempHtml);
            }
        }
    })
}

//게시글 수정 팝업
function popupModify(postid) {
    let temp_html = `<div>
        <input id="modify-title" className="title" placeholder="제목"></input>
        <input id="modify-contents" className="contents" placeholder="작성 내용"></input>
        <input id="modify-writer" className="writer" placeholder="글쓴이"></input>
        <button id="modify-post" onclick="modifyPost(${postid})">게시글 수정</button>
    </div>`
    $('.modify').append(temp_html);
}

//게시글 수정
function modifyPost(postid) {
    let title = $("#modify-title").val();
    let contents = $("#modify-contents").val();
    let writer = $("#modify-writer").val();
    postDto = {'title': title, 'contents': contents, 'writer': writer}
    $.ajax({
        type: 'PUT',
        url: `/api/posts/${postid}`,
        data: JSON.stringify(postDto),
        contentType: 'application/json',
        success: function (response) {
            window.location.reload();
        }
    })
}

//게시글 삭제
function deletePost(postid) {
    $.ajax({
        type: 'DELETE',
        url: `/api/posts/${postid}`,
        contentType: 'application/json',
        success: function (response) {
            window.location.reload();
        }
    })

}

//댓글 기능
function getComments(postid) {
    $.ajax({
        type: 'GET',
        url: `/api/comments/${postid}`,
        contentType: 'application/json',
        success: function (response) {
            $('.comment-box').empty();
            for (let i = 0; i < response.length; i++) {
                let comment = response[i]
                console.log(comment)
                let tempHtml = `<div class="one-comment" id="${comment.id}">
                    <div class="one-comment-content">
                        <div > ${comment.postid} </div>
                        <div>${comment.contents}</div>
                        <div>${comment.writer}</div>
                        <div>${comment.createdAt}</div>
                    </div>
                <button onclick="popupModifyComment(${postid},${comment.id})">수정</button>
                <button onclick="deleteComment(${postid},${comment.id})">삭제</button>
            </div>`;
                $('.comment-box').append(tempHtml);
            }
        }
    })

}

//댓글 추가 팝업
function popupCommentCreate(postid) {
    console.log(postid)
    let temp_html = `
        <div>
            <input id="create-comment-contents" placeholder="작성 내용"/>
            <input id="create-comment-writer" placeholder="글쓴이"/>
            <button id="create-comment" onclick="registerComment(${postid})">댓글 추가</button>
        </div>`;
    $('.comment-box').append(temp_html);

}

//댓글 추가
function registerComment(postid) {
    console.log("inside")
    let contents = $('#create-comment-contents').val();
    if (contents == ''){
        alert('댓글 내용을 입력해주세요')
        return
    }
    let writer = $('#create-comment-writer').val();
    commentDto = {'postid': postid, 'writer': writer, 'contents': contents, }
    console.log(commentDto)
    $.ajax({
        type: 'POST',
        url: '/api/comments',
        data: JSON.stringify(commentDto),
        contentType: 'application/json',
        success: function (response) {
            getComments(postid);
        }
    })

}

//댓글 수정 팝업
function popupModifyComment(postid, commentid) {
    let temp_html = `<div class="one-comment" id="${commentid}">
        <input id="modify-comment-contents" class="contents" placeholder="작성 내용"></input>
        <input id="modify-comment-writer" class="writer" placeholder="글쓴이"></input>
        <button id="modify-comment" onclick="modifyComment(${postid},${commentid})">댓글 수정</button>
            </div>`;
    $('.comment-box').append(temp_html);
}

//댓글 수정
function modifyComment(postid, commentid) {

    console.log("modify" + commentid)
    let contents = $("#modify-comment-contents").val();
    if (contents == ''){
        alert('댓글 내용을 입력해주세요')
        return
    }
    let writer = $("#modify-comment-writer").val();
    commentDto = {'postid':postid,'contents': contents, 'writer': writer}
    console.log(commentDto)
    $.ajax({
        type: 'PUT',
        url: `/api/comments/${commentid}`,
        data: JSON.stringify(commentDto),
        contentType: 'application/json',
        success: function (response) {
            getComments(postid);
        }
    })
}

//댓글 삭제
function deleteComment(postid, commentid) {
    console.log("delete" + commentid)
    $.ajax({
        type: 'DELETE',
        url: `/api/comments/${commentid}`,
        contentType: 'application/json',
        success: function (response) {
            getComments(postid);
        }
    })
}