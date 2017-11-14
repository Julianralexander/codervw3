// biz loj;
// -----------------

    // Contents of finalityTexts will be displayed in the html after going through a forEach() loop and appended to a ul called "unstyled"
var finalityTexts = [];

var number = function(userInput) {
  alert(typeof userInput)
  }
    // This function creates an array from 1 - userinput.
var count = function(userInput) {
  var digits = [];
  for (var i = 1; i <= userInput; i++) {
    digits.push(i);
  }
  return digits
}

    // This function runs conditions to see what to push into finalityTexts.
var conditions = function(results) {
  results.forEach(function(result) {
    if (result % 15 === 0) {
      finalityTexts.push("pingpong")
    } else if (result % 3 === 0) {
      finalityTexts.push("ping")
    } else if (result % 5 === 0) {
      finalityTexts.push("pong")
    } else {
      finalityTexts.push(result)
    }
  });
}
var checkInput = function(startInput){
  var x = startInput;
  if (isNaN(x)) {
    alert("Must input numbers!")
    location.reload();
  }
}


// UserInterface Loj
// -------------------------

$(document).ready(function() {
  $("#input").submit(function(event) {
    var startInput = $("#userInput").val();
    var userInput = parseInt(startInput);
    checkInput(startInput);
    var results = count(userInput);
    var finality = conditions(results); //finality is undefined because I didn't need a return value

    // for each function will append individul items to the "unstyled list"
    finalityTexts.forEach(function(finalityText) {
      $("#unstyled").append("<li>" + finalityText + "</li>");
    });
    // makes the hidden div show for the users delight
    $("#initShowing").hide();
    $(".row").show();

    event.preventDefault();
  });
  $("#tryAgain").click(function() {
    location.reload();
  });
});
