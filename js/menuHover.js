$(document).ready(function(){
  $("nav ul li").hover(highlight, highlight);
});

function highlight(){
  $(this).toggleClass("highlight-menu");
}
