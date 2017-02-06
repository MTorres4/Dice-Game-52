"use strict";
function getUserGuess(){
	var guessOptions = ["Win ", "Lose ", "Tie "];
	var userGuessSelection = prompt("Do you think you will: "+guessOptions+" on this round?");
	return userGuessSelection;
}

function rollDie(numberofSides){
	return Math.floor((Math.random()*numberofSides) + 1);
}

function determineScore() {
	var playerScore = 0;
	var player = rollDie(4) +rollDie(6) +rollDie(8) +rollDie(10) +rollDie(12) +rollDie(20);
//Use one of each type of dice: 4, 6, 8, 10, 12, and 20 sided
	return player;
}

function closestTo52(playerScore) {
	var win = 52;
	if (playerScore >= win){
		var difference = win - playerScore;
	}else if(playerScore < win){
		var difference = win - playerScore;
	}
	if(difference < 0){
		difference *= -1;
	}
	return difference;
}

function determineWinner(playerOneScore, playerTwoScore) {
	var player1Score = closestTo52(playerOneScore);
	var player2Score = closestTo52(playerTwoScore);
//Create a dice game for a single player against one or multiple AI
	if (player1Score === player2Score){
		alert("Outcome- It's a tie!");
		return 2;
	}else if(player1Score > player2Score){
		alert("Outcome- Player 2 Wins!");
		return 1;
	}else if(player1Score < player2Score){
		alert("Outcome- Player 1 Wins!");
		return 0;
	}
}

//ver 1.2
function compareGuess (userGuessSelection, roundOutcome){
	var guessOptions = ["Win ", "Lose ",  "Tie "];
	var win = 0;
	var lose = 1;
	var tie = 2;
	if (userGuessSelection.toLowerCase() === "win" && userGuessSelection === roundOutcome){
		alert("You were right!");
	}else if(userGuessSelection.toLowerCase() === "lose" && userGuessSelection === roundOutcome){
		alert("You were right!");
	}else if(userGuessSelection.toLowerCase() === "tie" && userGuessSelection === roundOutcome){
		alert("You were right!");
	}else {(userGuessSelection !== roundOutcome)
		alert("Please try again!");
	}
}

function runStartGame(){
	var userGuessSelection = getUserGuess();
	var player1Score = determineScore();
	var player2Score = determineScore();
	alert ("Player 1 Rolled " +player1Score+ " Player 2 Rolled " +player2Score);
	var roundOutcome = determineWinner(player1Score, player2Score);
	var userGuess = compareGuess(userGuessSelection, roundOutcome);
}

