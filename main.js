document.getElementById('top-button').addEventListener('click',function(){
    window.scrollTo(0,0);
});


document.getElementById('emailme').addEventListener('click',function(){

 alert('I promise! will reach you back soon as possible');

})


$('#switch1').on('click', function(){
  $('body').toggleClass('night')
})

// $("#emojiwavehand").click(function() {
//   // not gonna work
//   $(this).removeClass(".intro_hello .wave-hand.animated").addClass(".intro_hello .wave-hand.animated");
// });


$(document).ready(function(){
  var d = new Date();
  var n = d.getHours();
  if (n > 19 || n < 6)
    // If time is after 7PM or before 6AM, apply night theme to ‘body’
    document.body.className = "night";
  else
    // Else use ‘day’ theme
    document.body.className = "";
});

$(window).load(function() {
      $("#top-button").hide();
});

$(window).scroll(function(){
  var threshold = 200; // number of pixels before bottom of page that you want to start fading
  var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
  if( op <= 18 ){
    $("#top-button").show();
  } else {
    $("#top-button").hide();
  }
});




// $(window).on("load",function() {
//   $(window).scroll(function() {
//     var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//     $("section").each(function() {
//       /* Check the location of each desired element */
//       var objectBottom = $(this).offset().top + $(this).outerHeight();
      
//        If the element is completely within bounds of the window, fade it in 
//       if (objectBottom < windowBottom) { //object comes into view (scrolling down)
//         if ($(this).css("opacity")==0) {$(this).fadeTo(200,1);}
//       } else { //object goes out of view (scrolling up)
//         if ($(this).css("opacity")==1) {$(this).fadeTo(250,0);}
//       }
//     });
//   }).scroll(); //invoke scroll-handler on page-load
// });



