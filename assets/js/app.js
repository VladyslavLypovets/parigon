$(document).ready(function() {
    new WOW().init();

    window.goToPage = function (href) {
        window.location.assign(href)
    }

    function isMobile() {
        return window.innerWidth <= 767
    }

    if (window.innerWidth <= 1199) {
        $('.pills-wrap').removeClass('d-none');
        $('.tile-wrap').addClass('d-none');
    }

    if (!isMobile()) {
        $(".nicescroll").niceScroll({
        cursorcolor: "#b9b9b9",
        cursorwidth: "4px",
        cursoropacitymin: 1
        });
        $('.dialog').niceScroll({
        cursorcolor: "#b9b9b9",
        cursorwidth: "4px",
        cursoropacitymin: 1
        });
    }

    $('.nice-select').niceSelect();
    $('.consulstva .owl-carousel').owlCarousel({
        loop: true,
        // autoplay: true,

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
    
    $('.location .owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        items: 1,
        margin: 5,
    });
    
    if (window.innerWidth <= 767) {
        $('.category .catalog-carousel').owlCarousel({
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            items: 1,
        });
    } 
    
    $('.other-varieties .varieties-carousel').owlCarousel({
        autoplay: false,
        nav: false,
        margin: 20,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            768: {
                items: 3
            },
            1199: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });

    $('.toggle-text .show-more').click(function(e) {
        if (!$(this).hasClass('active')) {
            var height = $(this).parents('.toggle-text').find('.toggle-text-inner').prop('scrollHeight');
            $(this).parents('.toggle-text').find('.toggle-text-inner').css({ 'max-height': height + 'px' });
            $(this).addClass('active');
        } else {
            $(this).parents('.toggle-text').find('.toggle-text-inner').removeAttr('style');
            $(this).removeClass('active');

        }
    })

    window.closeDialog = function() {
        $('#dialogs').removeClass('open');
        $('body').removeClass('no-scroll');
        $('.dialog').removeClass('open');
    }

    window.openDialog = function(name) {
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

    if (window.innerWidth > 1200) {
        $(".catalog-carousel").niceScroll({
            cursorcolor: "#b9b9b9",
            cursorwidth: "4px",
            cursoropacitymin: 1
        });
    }

    $('.city-select').niceSelect();

    // clone for animation
    var top_ul = $('.move-top').html();
    var bottom_ul = $('.move-bottom').html();
    $('.move-top').html(top_ul + top_ul + top_ul);
    $('.move-bottom').html(bottom_ul + bottom_ul + bottom_ul);

    var isTileView = true;
    $('.view-toggle').click(function(){
        if (isTileView) {
            $('.pills-btn-text').removeClass('d-none');
            $('.tile-btn-text').addClass('d-none');
            $('.toggle-animation').removeClass('open');
            $('.corienta.corienta-tile').addClass('d-none');
            setTimeout(function() {
                $('.tile-wrap').addClass('d-none');
                $('.toggle-animation').addClass('open');
                $('.pills-wrap').removeClass('d-none');
                $('.catalog-carousel').getNiceScroll().resize();
            }, 500);
            isTileView = false;
        } else {
            $('.corienta.corienta-tile').removeClass('d-none');
            $('.pills-btn-text').addClass('d-none');
            $('.tile-btn-text').removeClass('d-none');
            $('.toggle-animation').removeClass('open');
            setTimeout(function() {
                $('.pills-wrap').addClass('d-none');
                $('.toggle-animation').addClass('open');
                $('.tile-wrap').removeClass('d-none');
            }, 500);
            isTileView = true;
        }
    });

    // catalog tabs
    $('[data-tab-control]').click(function() {
        var tab_number = $(this).attr('data-tab-control');
        $('.tab-pane').removeClass('animation');
        setTimeout(function() {
            $('.tab-pane').removeClass('show');
            $('.tab-pane[data-tab-content=' + tab_number + ']').addClass('show');
            $('.tab-pane[data-tab-content=' + tab_number + ']').addClass('animation');
        }, 300);
    });

    var mouseX = 0, mouseY = 0, limitX = 120, limitY = 120;

    $(".zerno").each(function(){
        var layer = $(this);
        var def = layer.data("offset");
        
        $(window).mousemove(function(e){
            var offset = layer.offset();
            mouseX = Math.min(e.pageX - offset.left, limitX);
            mouseY = Math.min(e.pageY - offset.top, limitY);
        });
        
        var xp = 0, yp = 0;
        var loop = setInterval(function(){
            xp += (mouseX - xp) / 12 * def;
            yp += (mouseY - yp) / 12 * def;
            layer.css({'transform': 'translate('+xp+'px, '+yp+'px)'});
        }, 30); 
    });
    if (window.innerWidth <= 1199) {
        $('.contact-main #lottie svg').attr('viewBox', '250 150 900 740');
    }
    if (window.innerWidth <= 500) {
        $('.contact-main #lottie svg').attr('viewBox', '250 100 900 740');
    }

    if ($('.bg-stages').length) {
        var angles = [];
        var hovers = [];

        for(var i = 0; i < $('.bg-stages').length; i++) {
            angles.push(0);
            hovers.push(false)
        }

        $('.bg-stages').on('mouseenter', function(e) {
            var self = this;
            $('.bg-stages').each(function(index, item) {
                if (item === self) {
                    hovers[index] = true;
                }
                $(self).on('mouseleave', function() {
                    hovers = [false, false, false];
                });
            });
        })
        function rotate() {
            $('.bg-stages .text').each(function(index, item) {
                var self = this;
                if (!hovers[index]) {
                    angles[index] += 50;
                    $(item).css('transform', 'translate(-50%, -50%) rotate(' + angles[index] + 'deg)')
                }
            })
        };
        // setInterval(rotate, 500);
    }


    setTimeout(function() {
        if (window.lottie) {
            lottie.loadAnimation(params);
        }
        if ($('#line svg').length) {
            setViewBox();
            window.addEventListener('resize', setViewBox);
        }
        if ($('#catalog-lines svg').length) {
            setViewBoxCatalog();
            window.addEventListener('resize', setViewBoxCatalog);
        }
    }, 2000);
})