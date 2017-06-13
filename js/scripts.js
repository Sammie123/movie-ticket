function Ticket(name, movie, time, age) {
  this.customerName = name;
  this.movieName = movie;
  this.movieTime = time;
  this.age = age;
}

$(document).ready(function() {

  var age = parseInt(prompt("How old are you"));

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
    $("#transformerTime").show();
    $("#cars3Time").hide();
    $("#wonderWomanTime").hide();
    $(".totalCost").show();
    $(".veteran").show();
    $(".discount").show();
    $("#discount").show();
    $("#veteran").show();
    $("#name").show();
    $(".btn").show ();
  });
  $("#c3").click(function() {
    $("#carsClick").show()
    $("#transformerClick").hide();
    $("#wonderwomanClick").hide();
    $("#roughnightClick").hide();
    $("#cars3Time").show();
    $("#transformerTime").hide();
    $("#wonderWomanTime").hide();
    $(".totalCost").show();
    $(".veteran").show();
    $(".discount").show();
    $("#discount").show();
    $("#veteran").show();
    $("#name").show();
    $(".btn").show ();
  });
  $("#ww").click(function() {
    $("#wonderwomanClick").show();
    $("#carsClick").hide();
    $("#transformerClick").hide();
    $("#roughnightClick").hide();
    $("#wonderWomanTime").show();
    $("#transformerTime").hide();
    $("#cars3Time").hide();
    $(".totalCost").show();
    $(".veteran").show();
    $(".discount").show();
    $("#discount").show();
    $("#veteran").show();
    $("#name").show();
    $(".btn").show ();
  });
  $("#rn").click(function() {
    $("#roughnightClick").show();
    $("#wonderwomanClick").hide();
    $("#carsClick").hide();
    $("#transformerClick").hide();
    $("#roughtNightTime").show();
    $("#transformerTime").hide();
    $("#wonderWomanTime").hide();
    $("#cars3Time").hide();
    $(".totalCost").show();
    $(".veteran").show();
    $(".discount").show();
    $("#discount").show();
    $("#veteran").show();
    $("#name").show();
    $(".btn").show ();
  });

  $("form#totalCost").submit(function(event) {
    event.preventDefault();
    
    var ticketPriceTransformer = $("transformerTime").val();
    var ticketPriceCars3 = $("cars3Time").val();
    var ticketPriceWonderWoman = $("wonderWomanTime").val();
    var ticketPriceRoughNight = $("roughtNightTime").val();

    if (ticketPriceCars3 <= 2) {
      var total = (10 * 1.10);
    } else if (ticketPriceCars3 > 2) {
      var total = (15 * 1.10);
    } else {

    };

    $("#cost").show(total);
    });
});
