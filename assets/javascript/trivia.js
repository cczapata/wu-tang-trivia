function check(){
var question1 = document.trivia.question1.value;
var question2 = document.tirvia.question2.value;
var question3 = document.trivia.question3.value;
var correct =0;
  if (question1 == "1993") {
    correct ++;
  }
  if (question2 == "Liquid Swords") {
    correct ++;
  }

  if (question1 == "the Chef") {
    correct ++;
  }

document.getElementById('sumbit').style.visibility ="visible";
document.getElementById('number-correct').innerHtml="Incredible! " + correct + "correct";
}

// var windowTimeout = setTimeout(function(){
//   alert("You think you can defeat me?!");
// }, 10000);

//  Start on click.
$("#start").on("click", function() {
  //  Set the button alert's timeout to run three seconds after the function's called.
  delayButtonAlert = setTimeout(function() {
    alert("Alert #2");
  }, 3000);
