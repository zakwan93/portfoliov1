document.getElementById('top-button').addEventListener('click',function(){
    window.scrollTo(0,0);
});


document.getElementById('emailme').addEventListener('click',function(){

 alert('I promise! will reach you back soon as possible');

})

document.getElementById('switch1').addEventListener('click',function(){

 var element = document.getElementsByClassName("night");
   element.classList.toggle("body.night");
})
