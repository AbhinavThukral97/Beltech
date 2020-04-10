$(window).on("load", function() {
  $(".loader").animate({ opacity: "0" }, 500);
  setTimeout(function() {
    $(".loader").css("display", "none");
  }, 500);
});
