$(function(){
  $(".js-prev-games").on("click", function(event){
    event.preventDefault();
    var id = parseInt($(".col-md-9").attr("data-id"))-1
    $.get("/games/" + id + "/prev.json", function(data){
          debugger
    })
  })
})


$(function(){
  $(".js-next-games").on("click", function(event){
    event.preventDefault();
  })
})
