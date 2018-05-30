$(function(){
  $(".js-prev-games").on("click", function(event){
    event.preventDefault();
    var id = parseInt($(".col-md-9").attr("data-id"))-1
    $.get("/games/" + id + "/prev.json", function(data){
      debugger
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
