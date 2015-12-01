$(document).ready(function() {


  var audio = [

    {
      expression: "Fuck you",
      path: "../audio/fuck_you.m4a"
    },

    {
      expression: "So wrong",
      path: "../audio/so_wrong.m4a"
    },

    {
      expression: "Bite me",
      path: "../audio/bite_me.m4a"
    },
  
  ];

  var audioCount = audio.length;

  for(i=0; i<audioCount; i++) {
    audio[i].key=i;
  }

  for(i=0; i<audioCount; i++) {
    $('#recordings').append('<li id="' + audio[i].key + '" class="voice">' + audio[i].expression + '</li>');
  }

  $("#recordings li.voice").click(function() {
    // get id
    i = this.id;
    //assign sound to play based on id
    var sound = new Audio(audio[i].path);
    //plaaayyy
    sound.play();
  });



  // $.ajax({
  //   url: "/audio/",
  //   success: function(data){
  //     $(data).find("td > a").each(function(){
  //       // var sound = new Audio(data);
  //       // sound.play();
  //       console.log(data);
  //     });
  //   }
  // });


});