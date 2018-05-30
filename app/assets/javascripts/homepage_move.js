$(function(){
  $(".js-prev-games").on("click", function(event){
    event.preventDefault();
    var id = parseInt($(".col-md-9").attr("data-id"))-1
    $(".submitted-comments").empty();
    $.get("/games/" + id + "/prev.json", function(data){
      let game = data.game;
      $("a.btn.btn-default.btn-block").attr('href', "/games/" + game.id + "/screenshot_upload")
      $(".title").text(game.title);
      $(".platform").text(game.platforms);
      $(".genre").text(game.genre);
      $(".release_year").text(game.release_year);
      $(".game-title").text(game.title);
      $(".description").text(game.description);
      $(".col-md-9").attr("data-id", game.id);
      var comments = data.comments;
      for (let new_comment of comments){
         var comment = new Comment(new_comment)
         comment.renderComments();
       }
    })
  })
})

$(function(){
  $(".js-next-games").on("click", function(event){
    event.preventDefault();
    var id = parseInt($(".col-md-9").attr("data-id"))+1;
    $(".submitted-comments").empty();
    $.get("/games/" + id + "/next.json", function(data){
      let game = data.game;
      $("a.btn.btn-default.btn-block").attr('href', "/games/" + game.id + "/screenshot_upload")
      $(".title").text(game.title);
      $(".platform").text(game.platforms);
      $(".genre").text(game.genre);
      $(".release_year").text(game.release_year);
      $(".game-title").text(game.title);
      $(".description").text(game.description);
      $(".col-md-9").attr("data-id", game.id);
      var comments = data.comments;
      for (let new_comment of comments){
         var comment = new Comment(new_comment)
         comment.renderComments();
       }
    })
  })
})

$(function(){
  $("#new_comment").on("submit", function(event){
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: this.action,
      data: $(this).serialize(),
      success: function(response){
        let comment = new Comment(response);
        comment.renderComments();
        $(".commentBox").val("");
        //rails disabled button after submit, this removes and enables submitting.
        $("input.btn.btn").removeAttr('data-disable-with')
        $("input.btn.btn").prop('disabled', false)
      }
    })
  })
})

function Comment(data){
  this.id = data.id;
  this.content = data.content;
  this.email = data.email;
}

Comment.prototype.renderComments = function(){
  let html = "";
  html += `
    <div class="panel-body"> ${this.content}<br>
    <strong> By: ${this.email} </strong>`
  $(".submitted-comments").append(html)
}
