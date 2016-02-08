$(document).ready(function() {
  var width = window.innerWidth/2;
  var height = window.innerHeight;

  if (window.innerWidth<768) {
    width = window.innerWidth;
    height = height/2;
  }

// Do something about window resizing...

var pattern = Trianglify({
  width: width,
  height: height,
  variance: 0.8, 
  x_colors: 'Spectral', //Spectral, Set1
  cell_size: 70,
});


document.getElementById('triangles').appendChild(pattern.svg());

$(window).load(function() {
  $('.home-headers').removeClass('hide').addClass('animated fadeInDown');
  $('.circle-item').removeClass('hide').addClass('animated fadeInRight');
});

$('.circle-link').on('click', function(e) {
  
  e.preventDefault();

  var goTo = this.getAttribute("href");

  $(this).siblings().children().addClass('animated fadeOut');
  $(this).children().addClass('animated zoomOutDown');
  $('.home-headers').addClass('animated zoomOutUp');
  setTimeout(function(){
         window.location = goTo;
    },1000);
});


});

