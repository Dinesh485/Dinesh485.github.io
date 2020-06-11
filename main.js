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
    let interval2 = setInterval(() => {
      $(".projects .outerdiv div a:nth-child(" + n + ")").css({ 'animation': "pop 800ms ease-out forwards",});
      n++;
      if (n == 7) {
        clearInterval(interval2);
      }
    }, 100);
  }
  

  const lightWave = () => {
    let n = 1;
    let interval3 = setInterval(() => {
      switch (n) {
        case 1:
          $('.projects .outerdiv div a ').removeClass('light-wave')
          $('.projects .outerdiv div a:nth-child(1)').addClass('light-wave');
          break;
        case 2:
          $('.projects .outerdiv div a ').removeClass('light-wave')
          $('.projects .outerdiv div a:nth-child(2)').addClass('light-wave');
           $(".projects .outerdiv div a:nth-child(3)").addClass("light-wave");
          break;
        case 3:
          $('.projects .outerdiv div a ').removeClass('light-wave');
          $('.projects .outerdiv div a:nth-child(4)').addClass('light-wave');
          $(".projects .outerdiv div a:nth-child(5)").addClass("light-wave");
          break;
        case 4:
          $(".projects .outerdiv div a ").removeClass("light-wave");
          $(".projects .outerdiv div a:nth-child(6)").addClass("light-wave");
          break;
        case 5:
          $(".projects .outerdiv div a ").removeClass("light-wave");
          break;
      }
      if (n == 5) return clearInterval(interval3);
      n++;
    },125);
   }

   setInterval(lightWave, 2500)

  let waypoint2 = new Waypoint({
    element: $(".projects .outerdiv"),
    handler: function () {
      pop()
      
    },
    offset: "40%",
  });

})