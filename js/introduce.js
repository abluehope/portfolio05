$(function () {
  $(".sub_menu .menu .path_link li span").on("click", function () {
    $(this).toggleClass("on");
    $(this).next().toggleClass("on");
  });
});
