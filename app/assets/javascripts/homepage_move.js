$(function(){
  $(".js-prev-games").on("click", function(event){
    event.preventDefault();
    var id = parseInt($(".col-md-9").attr("data-id"))-1
    $.get("/games/" + id + "/prev.json", function(data){
      $("a.btn.btn-default.btn-block").attr('href', "/games/" + data["id"] + "/screenshot_upload")
      $(".title").text(data.game.title);
      $(".platform").text(data.game.platforms);
      $(".genre").text(data.game.genre);
      $(".release_year").text(data.game.release_year);
      $(".game-title").text(data.game.title);
      $(".description").text(data.game.description);
      $(".col-md-9").attr("data-id", data.game.id);
      debugger
    })
  })
})

$(function(){
  $(".js-next-games").on("click", function(event){
    event.preventDefault();
    var id = parseInt($(".col-md-9").attr("data-id"))+1
    $.get("/games/" + id + "/next.json", function(data){
      $("a.btn.btn-default.btn-block").attr('href', "/games/" + data["id"] + "/screenshot_upload")
      $(".title").text(data["title"]);
      $(".platform").text(data["platforms"]);
      $(".genre").text(data["genre"]);
      $(".release_year").text(data["release_year"]);
      $(".game-title").text(data["title"]);
      $(".description").text(data["description"]);
      $(".col-md-9").attr("data-id", data["id"]);
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
