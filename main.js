$(document).ready(function () {
  setTimeout(() => {
    $("header .intro").addClass("intro-path");
  }, 500);
   

  if (window.matchMedia('(max-width: 1000px').matches) {
    $(".menu-icon").click(function () {
      $(".menu-icon div:nth-child(1)").toggleClass("top");
      $(".menu-icon div:nth-child(2)").toggleClass("middle");
      $(".menu-icon div:nth-child(3)").toggleClass("bottom");
      $("nav ul").toggleClass("path");
      $("nav ul li a ").css({ "pointer-events": "all" });
    });
    $("nav ul a").click(function () {
      $(".menu-icon div:nth-child(1)").toggleClass("top");
      $(".menu-icon div:nth-child(2)").toggleClass("middle");
      $(".menu-icon div:nth-child(3)").toggleClass("bottom");
      $("nav ul").toggleClass("path");
      $("nav ul li a ").css({ "pointer-events": "none" });
    });
  }
 

function slider() {
      let n = 1;
      let interval = setInterval(() => {
        $(".about-me .skills ul li:nth-child(" + n + ")").css({ "animation": "slide-right 500ms ease-in forwards"});
        n++;
        if (n == 7) {
          clearInterval(interval);
        }
      }, 100);
    }

  let waypoint = new Waypoint({
    element: $(".about-me .skills ul li"),
    handler: function () {
      slider()
    },
    offset: "85%",
  });

  function pop() {
    let n = 1;
    let interval = setInterval(() => {
      $(".projects .outerdiv div a:nth-child(" + n + ")").css({ 'animation': "pop 800ms ease-out forwards",
      "-moz-animation": "pop 800ms ease-out" , "-moz-animation-fill-mode": 'forwards'});
      n++;
      if (n == 7) {
        clearInterval(interval);
      }
    }, 100);
  }
  

  let waypoint2 = new Waypoint({
    element: $(".projects .outerdiv"),
    handler: function () {
      pop()
    
    },
    offset: "40%",
  });

})