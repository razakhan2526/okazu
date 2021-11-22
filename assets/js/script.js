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

// CUSTOM SELECT
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
      and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);