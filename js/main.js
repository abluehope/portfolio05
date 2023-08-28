$(function () {
  $(".main_slide").slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 6000,
    speed: 1000,
    pauseOnHover: false,
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

  $(".join_tab_link li").on("click", function (event) {
    event.preventDefault();

    let idx = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");

    $(".join_tab_content .con")
      .eq(idx)
      .addClass("on")
      .siblings()
      .removeClass("on");
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
