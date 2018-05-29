$(function(){
  $(".js-prev-games").on("click", function(event){
    event.preventDefault();
    debugger
    var id = $("col-md-9").attr("data-id")
    $.get("games/" + id + "/prev", function(data){
          debugger
    })
  })
})


$(function(){
  $(".js-next-games").on("click", function(event){
    event.preventDefault();
  })
})
