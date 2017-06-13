$(document).ready(function() {

  var age = parseInt(prompt("How old are you"));

  function Ticket(name, movie, time, age) {
    this.customerName = name;
    this.movieName = movie;
    this.movieTime = time;
    this.age = age;
  }

  if (age >= 17) {
    $('#overSeventeen').show();
    $('#underSeventeen').show();
  } else {
    $('#underSeventeen').show();
  }

  $("#tf").click(function() {
    $("#transformerClick").show();
    $("#carsClick").hide();
    $("#wonderwomanClick").hide();
    $("#roughnightClick").hide();
  });
  $("#c3").click(function() {
    $("#carsClick").show()
    $("#transformerClick").hide();
    $("#wonderwomanClick").hide();
    $("#roughnightClick").hide();
  });
  $("#ww").click(function() {
    $("#wonderwomanClick").show();
    $("#carsClick").hide();
    $("#transformerClick").hide();
    $("#roughnightClick").hide();
  });
  $("#rn").click(function() {
    $("#roughnightClick").show();
    $("#wonderwomanClick").hide();
    $("#carsClick").hide();
    $("#transformerClick").hide();
  });
});
