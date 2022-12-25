$(document).ready( function() {
  // $(".candles").click(function() {
  //
  //     $(".flame").animate({"opacity": 0}, "fast");
  //     console.log('done');
  //     $(".flame2").animate({"opacity": 0}, "fast");
  //     $(".flame3").animate({"opacity": 0}, "fast");
  //     $(".text").animate({"top": -90, "opacity": 1}, "fast");
  //   });
  var f=false, f2=false, f3=false;
  $(".flame").click(function() {
    $(".flame").animate({"opacity": 0}, "fast");
    f=true;
    check();
  });
  $(".flame2").click(function() {
    $(".flame2").animate({"opacity": 0}, "fast");
    f2=true;
    check();
  });
  $(".flame3").click(function() {
    $(".flame3").animate({"opacity": 0}, "fast");
    f3=true;
    check();
  });
  function check() {
    if (f&&f2&&f3) {
      $("h1").css("display", "none");
      $(".text").css("display","inline");
      $(".text").animate({"top": -90, "opacity": 1}, "fast");
    }
  }

});
