const toggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const menu = document.querySelector(".menu");
const menuBg = document.querySelector(".menu-bg");
toggle.addEventListener("click" , function(e) {
    menuBg.classList.add("is-active");
    menu.classList.add("is-active");
    menuClose.classList.add("is-active");
} )
menuClose.addEventListener("click" , function(e) {
    menuBg.classList.remove("is-active");
    menu.classList.remove("is-active");
    this.classList.remove("is-active");
})
// slide
$(".customer-content").slick({
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-long-arrow-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow'><i class='fa fa-long-arrow-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        //   dots : false,
        },
      },
    ],
  });
  