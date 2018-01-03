document.getElementById('top-button').addEventListener('click',function(){
    window.scrollTo(0,0);
});


document.getElementById('emailme').addEventListener('click',function(){

 alert('I promise! will reach you back soon as possible');

})


$('#switch1').on('click', function(){
	$('body').toggleClass('night')
})

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