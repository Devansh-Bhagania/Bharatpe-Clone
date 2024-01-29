$(".carousel").carousel({
    interval: 3000
  });
  
  //scroll slides on swipe for touch enabled devices
  $(".carousel").on("touchstart", function(event) {
    var yClick = event.originalEvent.touches[0].pageY;
    $(this).one("touchmove", function(event) {
      var yMove = event.originalEvent.touches[0].pageY;
      if (Math.floor(yClick - yMove) > 1) {
        $(".carousel").carousel("next");
      } else if (Math.floor(yClick - yMove) < -1) {
        $(".carousel").carousel("prev");
      }
    });
    $(".carousel").on("touchend", function() {
      $(this).off("touchmove");
    });
  });



  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  