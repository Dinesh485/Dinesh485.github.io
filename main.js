$(document).ready(function () {
  
  $('.menu-icon').click( function () {
    $('.menu-icon div:nth-child(1)').toggleClass('top')
    $(".menu-icon div:nth-child(2)").toggleClass("middle");
    $(".menu-icon div:nth-child(3)").toggleClass("bottom");
    $('nav ul').toggleClass('path');
    $('nav ul li a ').css({'pointer-events': 'all'})
  })
  $('nav ul a').click(function () {
     $(".menu-icon div:nth-child(1)").toggleClass("top");
     $(".menu-icon div:nth-child(2)").toggleClass("middle");
     $(".menu-icon div:nth-child(3)").toggleClass("bottom");
     $("nav ul").toggleClass("path");
     $("nav ul li a ").css({ "pointer-events": "none" });
  })
})