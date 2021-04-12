var fortunes = ["will have your first vaccine dose soon!",
"will have a great summer!", "will finish the semester strong!",
"will be very happy!", "will hear some good news very soon!"];
var input = document.getElementById("nameInput");
var output = document.getElementById("userFortune");
var button = document.getElementById("fortuneGenerator");
var fortune = button.addEventListener("click", getFortune);
function getFortune(){
  var randomInd = Math.floor(Math.random()*fortunes.length);
  output.innerText = input.value+ " "+fortunes[randomInd];
}
