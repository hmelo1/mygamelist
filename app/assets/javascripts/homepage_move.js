$(function(){
  $(".js-prev-games").on("click", function(event){
    event.preventDefault();
    const id = parseInt($(".col-md-9").attr("data-id"))-1
    $(".submitted-comments").empty();
    $.get("/games/" + id + "/prev.json", function(data){
      const game = new Game(data.game);
      game.renderGame();
      const comments = data.game.comments;
      for (let new_comment of comments){
         let comment = new Comment(new_comment)
         comment.renderComments();
       }
    })
  })
})

$(function(){
  $(".js-next-games").on("click", function(event){
    event.preventDefault();
    const id = parseInt($(".col-md-9").attr("data-id"))+1;
    $(".submitted-comments").empty();
    $.get("/games/" + id + "/next.json", function(data){
      const game = new Game(data.game);
      game.renderGame();
      const comments = data.game.comments;
      for (let new_comment of comments){
         let comment = new Comment(new_comment)
         comment.renderComments();
       }
    })
  })
})

function Game(data){
  this.id = data.id;
  this.title= data.title;
  this.platforms = data.platforms;
  this.genre = data.genre;
  this.release_year = data.release_year;
  this.description = data.description;
}

Game.prototype.renderGame = function(){
  $("a.btn.btn-default.btn-block").attr('href', "/games/" + this.id + "/screenshot_upload")
  $(".title").text(this.title);
  $(".platform").text(this.platforms);
  $(".genre").text(this.genre);
  $(".release_year").text(this.release_year);
  $(".game-title").text(this.title);
  $(".description").text(this.description);
  $(".col-md-9").attr("data-id", this.id);
}

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
