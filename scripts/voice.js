$(document).ready(function() {


  var audio = [

    {
      expression: "Ah shit",
      path: "../audio/ah_shit.m4a"
    },

    {
      expression: "Bite me",
      path: "../audio/bite_me.m4a"
    },

    {
      expression: "Chuckle",
      path: "../audio/chuckle.m4a"
    },

    {
      expression: "Cmon",
      path: "../audio/cmon.m4a"
    },

    {
      expression: "Exasperated Long",
      path: "../audio/exasperated_long.m4a"
    },

    {
      expression: "Exasperated Short",
      path: "../audio/exasperated_short.m4a"
    },

    {
      expression: "Fine",
      path: "../audio/fine.m4a"
    },

    {
      expression: "Fuck You",
      path: "../audio/fuck_you.m4a"
    },

    {
      expression: "Damnit",
      path: "../audio/gdmnit.m4a"
    },

    {
      expression: "Gotta Work",
      path: "../audio/gotta_work.m4a"
    },

    {
      expression: "Hannah",
      path: "../audio/hannah.m4a"
    },

    {
      expression: "Hannukah",
      path: "../audio/hannukah.m4a"
    },

    {
      expression: "Snail",
      path: "../audio/hi_snail.m4a"
    },

    {
      expression: "Hmpf",
      path: "../audio/hmpf.m4a"
    },

    {
      expression: "Ma",
      path: "../audio/ma.m4a"
    },

    {
      expression: "Morning",
      path: "../audio/morning.m4a"
    },

    {
      expression: "No",
      path: "../audio/no.m4a"
    },

    {
      expression: "Shhh",
      path: "../audio/shhh.m4a"
    },

    {
      expression: "Sigh",
      path: "../audio/sigh.m4a"
    },

    {
      expression: "So Wrong",
      path: "../audio/so_wrong.m4a"
    },

    {
      expression: "What",
      path: "../audio/what.m4a"
    },

    {
      expression: "What is this Shit",
      path: "../audio/what_is_this_shit.m4a"
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
    $(this).addClass("active");
    // get id
    i = this.id;
    //assign sound to play based on id
    var sound = new Audio(audio[i].path);
    //plaaayyy
    sound.play();

    setTimeout(function () { 
      $('#recordings li.voice').removeClass('active');
    }, 2000);

    // $(sound).bind("ended", function () {
    //   $(this).removeClass("active");
    // })
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