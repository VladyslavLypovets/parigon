
var isMenuOpen = false;
$(window).resize(function(){
  if(isMenuOpen) {
    setTriangle();
  }
})
function setTriangle(){
  scrW = $(window).width();
  var triangle = $('.triangle');
  triangle.css('border-right', scrW + 'px solid transparent');
}
$(document).ready(function(e) {
  $('.menu').click(openMenu);
  $('.btn-gold-close').click(closeMenu);
});

function openMenu () {
  $('.main-menu').addClass('open');
  setTimeout(function() {
    $('.triangle').addClass('open');
  }, 0);
  setTimeout(function() {
    $('.main-menu').addClass('animate');
  }, 500)
}

function closeMenu () {
  $('.main-menu').removeClass('animate');
  setTimeout(function() {
    $('.triangle').removeClass('open');
    setTimeout(function() {
      $('.main-menu').removeClass('open');
    }, 300);
  }, 500);
}

