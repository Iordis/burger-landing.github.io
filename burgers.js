$(document).ready(function() {
$(".accordion .accord-header").click(function() {
if($(this).next("div").is(":visible")){
$(this).next("div").slideUp("slow");
} else {
$(".accordion .accord-content").slideUp("slow");
$(this).next("div").slideToggle("slow");
}
});
});

 $(document).ready(function() {
    $('#coin-slider').coinslider({width: 540, delay: 10000 });
  });