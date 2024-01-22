// /////////////////////
window.addEventListener("scroll", function () {
    let nav = document.querySelector(".navbar");
    nav.classList.toggle("fix", window.scrollY > 150);
}) 
//////////////////////////
window.addEventListener("scroll" , function () {
    let scrollUp = document.querySelector(".scroll_up");
    scrollUp.classList.toggle("scroll_transition", window.scrollY > 150);
    scrollUp.classList.toggle("show_scroll", window.scrollY > 200)
})
    let scrollUp = document.querySelector(".scroll_up");

scrollUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})

var owl = $('#slider_1');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:0,
  navigation: true,
    autoplay: true,
    smartSpeed: 800,
    rtl:true,
    nav: true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: false,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 1,
        },
        1100:{
            items: 1,
        },
        1200:{
            items:1
        }
    }
});




var owl = $('#slider_2');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:10,
    navigation: true,
    autoplay: false,
    smartSpeed: 800,
    rtl:true,
    nav: true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: false,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1200:{
            items:4
        }
    }
});

var owl = $('#slider_3');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:10,
    navigation: true,
    autoplay: false,
    smartSpeed: 800,
    rtl:true,
    nav: true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: false,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1200:{
            items:6
        }
    }
});



// counter
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 4000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});