$(document).ready(function() {
  $("div").addClass("blue");
  $("div").each(function() {
    console.log($(this).html());
  });

  // $("div, table").css("border", "3px solid red");

  $("td:last").html("Last TD in existence");

  $("div span").css("background-color", "yellow");

  $("#mySpan").addClass("red");

  $(".myRedCSSClass").removeClass("myRedCSSClass").addClass("red");
  $(".myBlueCSSClass").removeClass("myBlueCSSClass");




});