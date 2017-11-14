//Back End
var outputTexts = [];

var number = function(parsedInput) {
 alert(typeof parsedInput)
 }

var tickTock = function(parsedInput) {
 var digits = [];
 for (var i = 1; i <= parsedInput; i++) {
   digits.push(i);
 }
 return digits
}

var conditions = function(results) {
 results.forEach(function(result) {
   if (result % 15 === 0) {
     outputTexts.push("pingpong")
   } else if (result % 3 === 0) {
     outputTexts.push("ping")
   } else if (result % 5 === 0) {
     outputTexts.push("pong")
   } else {
     outputTexts.push(result)
   }
 });
}

//UI
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();

    var primaryInput = $("#parsedInput").val();
    var parsedInput = parseInt(primaryInput);
    var results = tickTock(parsedInput);
    var output = conditions(results);


    outputTexts.forEach(function(outputText) {
      $("#unstyled").append("<li>" + outputText + "</li>");
    });

    $("#origional").hide();
    $(".row").show();

  });
});
