$(document).ready(function() {

  var drums = document.getElementById("drums1"),
      didgi4 = document.getElementById("didgi4"),
      drums6 = document.getElementById("drums6"),
      entertain = document.getElementById("entertain");
      drums3 = document.getElementById("drums3");
      didgi3 = document.getElementById("didgi3");

  var arrIds = [];

  function playSymphony(){
    drums.currentTime = 5;
    drums.play();
    didgi4.play();
    drums3.play();
    arrIds.push(setTimeout( function() {
        didgi3.play();
    }, 2000 ));
    arrIds.push(setTimeout( function() {
        didgi3.play();
    }, 1000 ));
    arrIds.push(setTimeout( function() {
        drums6.play();
    }, 3000 ));
    h = setInterval( function() { entertain.play(); }, 1000);
  }

  var key = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  };

  $(document).keydown(function(e){
    if (e.which === 49) {
      if (key[0]) {
        drums.play();
        key[0] = false;
      } else {
        drums.pause();
        key[0] = true;
      }
    }
    if (e.which === 50) {
      if (key[1]) {
        didgi4.play();
        key[1] = false;
      } else {
        didgi4.pause();
        key[1] = true;
      }
    }
    if (e.which === 51) {
      if (key[2]) {
        drums6.play();
        key[2] = false;
      } else {
        drums6.pause();
        key[2] = true;
      }
    }
    if (e.which === 52) {
      if (key[3]) {
        entertain.play();
        key[3] = false;
      } else {
        entertain.pause();
        key[3] = true;
      }
    }
    if (e.which === 53) {
      if (key[4]) {
        drums3.play();
        key[4] = false;
      } else {
        drums3.pause();
        key[4] = true;
      }
    }
    if (e.which === 54) {
      if (key[5]) {
        didgi3.play();
        key[5] = false;
      } else {
        didgi3.pause();
        key[5] = true;
      }
    }
    if (e.which === 82) {
      stopTracks();
    }
  });

  function stopTracks() {
    $("audio").each(function(){
        this.pause();
        this.currentTime = 0;
    });
    window.clearInterval(h);
    arrIds.forEach(function(track) { window.clearTimeout(track); });
    arrIds = [];
  }

  $(".record").on("click", function() {
    if ($(this).hasClass("rotate")) {
      $('#stopwatch').timer('pause');
      $(this).removeClass("rotate");
      stopTracks();
    } else {
      $(this).addClass("rotate");
      $('#stopwatch').timer('resume');
      playSymphony();
    }
  });
});
