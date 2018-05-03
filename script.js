$('.carousel').carousel({
  interval: 3000,
  keyboard: false,
  wrap: false
})

$(document).ready(function() {
  $("img").on("contextmenu",function(){
    return false;
  });
});
