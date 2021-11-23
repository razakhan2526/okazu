// START GALLERY FILTER
$(document).ready(function () {
  $(window).on('load', function () {
    var $container = $('.portfolioContainer');
    var $filter = $('#filter');
    $container.isotope({
      filter: '*',
      layoutMode: 'masonry',
      animationOptions: {
        duration: 750,
        easing: 'linear'
      }
    });
    $filter.find('a').click(function () {
      var selector = $(this).attr('data-filter');
      $filter.find('a').removeClass('active');
      $(this).addClass('active');
      $container.isotope({
        filter: selector,
        animationOptions: {
          animationDuration: 750,
          easing: 'linear',
          queue: false,
        }
      });
      return false;
    });
  });
});
// END GALLERY FILTER
// PRELOADER START
$(document).ready(function () {
  setTimeout(function () {
    $('#preload-content').fadeOut(2500, function () {
      $('#preloadcontainer').fadeOut(2500);
      setTimeout(function () {
        $('.fade-in').each(function (index) {
          $(this).delay(600 * index).animate({
            top: 0,
            opacity: 1
          }, 900);
        });
      }, 900);
    });
  }, 300);
});
// PRELOADER END
// BACK TO TOP START
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});
// BACK TO TOP END
// START MENU CAROUSEL
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  navText: ["<div class='nav-button-1 owl-prev'>‹</div>", "<div class='nav-button-2 owl-next'>›</div>"],
  // navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    376: {
      items: 1
    },
    576: {
      items: 2
    },
    700: {
      items: 3
    },
    900: {
      items: 4
    },
    1440: {
      items: 5
    }
  }
});
// END MENU CAROUSEL

// START ACTIVE MENU
$(document).ready(function () {
  $('.c-navbar ul li a').click(function () {
    $('.c-navbar ul li a').removeClass("myactive");
    $(this).addClass("myactive");
  });
});
// END ACTIVE MENU