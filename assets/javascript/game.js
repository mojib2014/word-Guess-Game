var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourGuessesSoFar = [];

var computerChoice = ["r", "p", "s", "z", "g", "j"];


  document.onkeyup = function(event) {
      var userGuess = event.key;
      var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    yourGuessesSoFar.push(userGuess);

    if (userGuess === computerGuess) {
        wins++;
    } else {
        guessesLeft--;
    } 

    if(guessesLeft === 0) {
        losses++;
        guessesLeft = 10;
    }

    var html =
        "<p>You chose: " + userGuess + "</p>" +
        "<p>The computer chose: " + computerGuess + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>guesses left: " + guessesLeft + "</p>"+
        "<p> Your Guesses So Far: " + yourGuessesSoFar + "</p>";
    
    document.querySelector("#game").innerHTML = html;
};


  
  


 




