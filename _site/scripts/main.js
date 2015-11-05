var width = $('#triangles').width();
var height = window.innerHeight;

if (window.innerWidth<768) {
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