
//Global Variables
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Count Variables
var wins = 0;
var losses = 0;
var livesLeft = 9;

// When a user selects a key it is stored in userGuess
var userGuess = null;

// Array inteneded to capture user guesses
var guessesSoFar = [];


// Method for Comp to randomly select a letter and store it inside letterToBeGuessed
var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " livesLeft: " + livesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

// Listening for a keystroke to begin game
document.onkeyup = function(event) {

	// When user presses a key, it records it and saves to userGuess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Add the user's guess to array guessesSoFar 
	// Making sure key selected has not already been picked and is from the alphabet
	if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		// Decrease remaining guesses by 1
		livesLeft--;
	}

	// if letterToBeGuessed equals userGuess
	// then log it as a win
	// reset livesLeft to 9
	// empty out guessesSoFar
	// Method for Comp to select new random letter
	if (letterToBeGuessed == userGuess) {
		wins++;
		console.log("You won!");
		livesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " livesLeft: " + livesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	// if livesLeft reaches 0
	// then log it as a loss
	// reset livesLeft to 9
	// empty out guessesSoFar
	// Method for Comp to select new random letter
	if (livesLeft == 0) {
		losses++;
		console.log("You lost!");
		livesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " livesLeft: " + livesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	// Game values to display in HTML
	var html = "<h1>Professor X's Game</h1>" + "<h4>Can guess what letter Professor X is thinking of?</h4>" + "<h4>Wins: " + wins + "</h4>" + "<h4>Losses: " + losses + "</h4>" + "<h4>Guesses Left: " + livesLeft + "</h4>" + "<h4>Your guesses so far: " + guessesSoFar + "</h4>";
	
	// inset html into the game ID
	document.querySelector("#game").innerHTML = html;

}
