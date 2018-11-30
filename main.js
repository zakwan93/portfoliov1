//  

$('#right-arrow').on('click', function(){

  $('#intro').toggleClass('#background')
})






$('#switch1').on('click', function(){
  $('body').toggleClass('night')
})


// $("#emojiwavehand").click(function() {
//   // not gonna work
//   $(this).removeClass(".intro_hello .wave-hand.animated").addClass(".intro_hello .wave-hand.animated");
// });
// $("body").delay(2000);

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

// $(window).load(function() {
//       $("#top-button").hide();
// });

$(window).scroll(function(){
  var threshold = 298; // number of pixels before bottom of page that you want to start fading
  var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
  if( op <= 18 ){
    $("#top-button").show();
  } else {
    $("#top-button").hide();
  }
});

// $( ".project_used span" ).hover(function() {
//   $( this ).fadeOut( 'fast' );
//   $( this ).fadeIn( 'slow' );
// });

$('.project_used span').on({
    mouseover: function() {
        event.preventDefault();
        $(this).animate({opacity: 0.25});
    },
    mouseout: function() {
        event.preventDefault();
        $(this).animate({opacity: 1});
    }
});


var sections = document.getElementsByTagName("section");
var section1 = sections[0];
var section2 = sections[1];
var section3 = sections[2];
var section4 = sections[3];
var section5 = sections[4];

window.addEventListener("scroll",function(e){
  if(window.scrollY > 200){
    section1.classList.add("fadeIn")
  }

  if(window.scrollY > 900){
    section1.classList.remove("fadeIn")
  }

  if(window.scrollY > 900){
    section2.classList.add("fadeIn")
  }

  if(window.scrollY > 1350){
    section2.classList.remove("fadeIn")
  }

  if (window.scrollY > 1350){
    section3.classList.add("fadeIn")
  }

  if (window.scrollY > 1800){
    section3.classList.remove("fadeIn")
  }

  if (window.scrollY > 1800){
    section4.classList.add("fadeIn")
  }

  if (window.scrollY > 3450 || window.scrollY < 1779){
    section4.classList.remove("fadeIn")
  }

  if (window.scrollY > 3600 ){
    section5.classList.add("fadeIn")
  }

  if (window.scrollY > 5800 || window.scrollY < 3599){
    section5.classList.remove("fadeIn")
  }
})








// $(document).ready(function () {
//     $('header.intro').fadeIn(3200);
// });


// $(document).ready(function() {
//     $('.featured-projects-content').hide();
//     $('.featured-projects .project_pic img').animate({
//         opacity:1
        
//     });

//     $('featured-projects .project_pic img').hover(function() {
//         $(this).stop().animate({opacity:.4},200);
//         $('.featured-projects-content').fadeIn();

//     }, function() {
//         $(this).stop().animate({opacity:1},500)
//         $('.featured-projects-content').fadeOut();
//     });

// });



// $(document).ready(function(){

//   $(window).scroll( function(){

//       $('section').each(function(i){
//          var bottom_of_object = $(this).offset().top + $(this).innerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window >= bottom_of_object ){
                
//                 $(this).animate({'opacity':'1'},500);
                    
//             }
            
//           });
//   });

// });




