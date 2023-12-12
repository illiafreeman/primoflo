
/*team carousel*/
if ($('.team__gal').length) {
    $('.team__gal').slick({
        slidesToShow: 8,
        slidesToScroll: 8,
        //infinite: true,
        dots: true,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        prevArrow: `<button class="slick-prev" aria-label="Previous" type="button">
                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1L1 7L7 13" />
                                    </svg>
        
                                </button>`,
        nextArrow: `<button class="slick-next" aria-label="Next" type="button">
                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L7 7L1 13" />
                                    </svg>
                                </button>`,
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    centerMode: false,
                    variableWidth: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
    $('.team__next').click(function () {
        $('.team__gal').slick('slickNext');
    });
    $('.team__prev').click(function () {
        $('.team__gal').slick('slickPrev');
    })
}
/*end team carousel*/

/*certificate carousel*/
if ($('.review-gal').length) {
    const reviewGal = new Swiper('.review-gal', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        freeMode: true,
        loop: true,
        navigation: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });
}
/*end certificate carousel*/

/*certificate increase size*/
if ($('[data-fancybox]').length) {
    Fancybox.bind('[data-fancybox]', {
        compact: false,
        idle: false,
        animated: false,
        showClass: false,
        hideClass: false,
        dragToClose: false,
        contentClick: false,
        Images: {
            zoom: false,
        },
        Toolbar: {
            display: {
                left: [],
                middle: ['infobar'],
                right: ['close'],
            },
        },
        Thumbs: {
            type: 'classic',
        },
    });
}
/*end certificate increase size*/

/*isInViewport*/
$.fn.isInViewport = function () {
var elementTop = $(this).offset().top,
    elementBottom = elementTop + $(this).outerHeight(),
    viewportTop = $(window).scrollTop(),
    viewportBottom = viewportTop + $(window).height();
    (viewportBottom > elementTop) ? $(this).addClass('inViewport') : $(this).removeClass('inViewport');
    if(viewportBottom > elementTop){
        //console.log('0');
    }else{
        //console.log(elementTop - viewportBottom);
    }
}

const checkInViewportElements = document.querySelectorAll('.checkInViewport');
    checkInViewportElements.forEach(function (el) {
        $(el).isInViewport();
    });
$(window).on('resize scroll', function () {
    checkInViewportElements.forEach(function (el) {
        $(el).isInViewport();
    });
});
/*end isInViewport*/

/*fixed header*/
$(window).scroll(function () {

    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixed');
    }
    else {
        $('.header').removeClass('fixed');
    }
});
/*end fixed header*/

/*tabs*/
$('.tabs-wrapper').each(function () {
    let ths = $(this);
    ths.find('.tab-item').not(':first').hide();
    ths.find('.tab').click(function () {
        ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
        ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
});
/*end tabs*/

/*mobile header btns*/
$('.header__menu-btn').click(function () {
    $('.header__nav-wrap').toggleClass('vis');
    $('body').toggleClass('oh open-menu');
    $('.hamburger').toggleClass('open');
    $('.header__tel').removeClass('vis');
});
$('.header__nav > .parent > button').click(function () {
    $(this).parent().hasClass('vis') ? $(this).parent().removeClass('vis') : $(this).parent().addClass('vis');
    $(this).parent().find('.parent').removeClass('vis');
});
$('.header__nav .parent ul li.parent button').click(function () {
    $(this).parent().hasClass('vis') ? $(this).parent().removeClass('vis') : $(this).parent().addClass('vis');
});
$('.header__tel-btn').click(function () {
    $('.header__tel').toggleClass('vis');
});
/*end mobile header btns*/

/*counters*/
function scrollEvent() {
    if ($('.help__body').length) {
        var hT = $('.help__body').offset().top,
            hH = $('.help__body').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
            $('.help__body').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            window.removeEventListener("scroll", scrollEvent);
        }
    }
}
window.addEventListener("scroll", scrollEvent);
/*end counters*/

/*animation on scroll*/
if ($('.wow').length) {
    new WOW().init();
}
/*end animation on scroll*/











