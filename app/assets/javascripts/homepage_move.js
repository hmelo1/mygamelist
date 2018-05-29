$(function(){
  $(".js-prev-games").on("click", function(event){
    event.preventDefault();
    $.get( "/", function(data){
      debugger
    })
  })
})

$(function(){
  $(".js-next-games").on("click", function(event){
    event.preventDefault();
  })
})
