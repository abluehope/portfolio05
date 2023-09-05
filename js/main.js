$(function () {
  $(".mobile_btn").on("click", function () {
    $(this).toggleClass("on");
    $(".gnb").toggleClass("on");
  });

  $(".gnb").on("wheel touchmove", function (e) {
    e.preventDefault();
  });

  $(".gnb>ul>li>a").on("click", function (e) {
    if ($(".gnb").hasClass("on")) {
      e.preventDefault();
    }
    $(this).next().stop().slideToggle();
    $(this).parent().siblings().find(".sub").slideUp();
  });

  $(".main_slide").on("init afterChange", function (e, s, c) {
    const current = $(".main_slide .slick-current");
    current.addClass("on").siblings().removeClass("on");

    $(".main_visual .menu li").eq(0).addClass("on");
    $(".main_visual .menu li")
      .eq(c)
      .addClass("on")
      .siblings()
      .removeClass("on");
  });

  $(".main_slide").slick({
    pauseOnHover: false,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 6000,
    speed: 1000,
  });

  $(".main_visual .menu li").on("click", function (e) {
    e.preventDefault();
    const idx = $(this).index(); // 0, 1, 2
    $(".main_slide").slick("slickGoTo", idx);
  });

  $(".main_visual .arrows .left").on("click", function () {
    $(".main_slide").slick("slickPrev");
  });
  $(".main_visual .arrows .right").on("click", function () {
    $(".main_slide").slick("slickNext");
  });

  $(".offers_slide").slick({
    centerMode: true,
    centerPadding: "0",
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".main_special_offers .arrows .left").on("click", function () {
    $(".offers_slide").slick("slickPrev");
  });
  $(".main_special_offers .arrows .right").on("click", function () {
    $(".offers_slide").slick("slickNext");
  });

  $(".main_golf_course .img_box .itm").mouseover(function () {
    $(this).addClass("on").siblings().removeClass("on");
  });

  $(".facilities_slide").on("init afterChange", function (e, s, c) {
    console.log(c);
    $(".main_facilities .itm")
      .eq(c)
      .addClass("on")
      .siblings()
      .removeClass("on");
  });

  $(".facilities_slide").slick({
    centerMode: true,
    // centerPadding: "100px",
    variableWidth: true,
    arrows: false,
    dots: true,
  });

  $(".family_link span").on("click", function () {
    $(this).toggleClass("on");
    $(this).next().toggleClass("on");
  });

  $(".to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    sct > 1000 ? $(".to_top").addClass("on") : $(".to_top").removeClass("on");
  });
});
