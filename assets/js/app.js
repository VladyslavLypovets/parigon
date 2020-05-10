$(document).ready(function() {

  $('.nice-select').niceSelect();

  $('.consulstva .photo-consulstva').owlCarousel({
    loop: true,
    autoplay: true,

    autoplayHoverPause: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    items: 1,
    autoplayTimeout: 3000,
    margin: 5,
  });
  if(window.innerWidth <= 767) {
    $('.category .catalog-carousel').owlCarousel({
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      items: 1,
      margin: 10,
    });
  }

  $('.other-varieties .varieties-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    nav: false,
    margin: 20,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      450:{
        items: 2
      },
      768: {
        items: 3
      },
      1199:{
        items: 3
      },
      1400: {
        items: 4
      }
    }
  });

  $('.toggle-text .show-more').click(function(e){
    if (!$(this).hasClass('active')) {
      var height = $(this).parents('.toggle-text').find('.toggle-text-inner').prop('scrollHeight');
      $(this).parents('.toggle-text').find('.toggle-text-inner').css({'max-height': height + 'px'});
      $(this).addClass('active');
    } else {
      $(this).parents('.toggle-text').find('.toggle-text-inner').removeAttr('style');
      $(this).removeClass('active');

    }
  })

  window.closeDialog = function () {
    $('#dialogs').removeClass('open');
    $('body').removeClass('no-scroll');
    $('.dialog').removeClass('open');
    // $('.nicescroll').getNiceScroll().resize();
  }

  window.openDialog = function (name) {
    $('#dialogs').addClass('open');
    $('body').addClass('no-scroll');
    $('#dialogs .' + name).addClass('open');
  }

  $('.overllay').click(function(e) {
    closeDialog();
  })
  
  var urlParams = new URLSearchParams(window.location.search)
  if (urlParams.has('dialog') && $('.' + urlParams.get('dialog')).length) {
    $('#dialogs').addClass('open');
    $('.' + urlParams.get('dialog')).addClass('open');
  }

  $('.city-select').niceSelect();
})

