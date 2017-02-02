"use strict";
function displayGreeting(){
	alert("Welcome to 'Get to 52!!' \n The rules are simple, \n Using 6 differently sided die, get as close to 52 as possible \n The player closest to 52 wins!");
//More complicated than just highest number wins
	//player1 name
	//player2 name or AI
	//update- prompt("Who do you think is going to win this round? If you are right, you will add 2 points, if not, lose 5 points, or you can pass on betting");
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

function determineWinner(player1Score, player2Score) {
	var player1Score = closestTo52(player1Score);
	var player2Score = closestTo52(player2Score);
//Create a dice game for a single player against one or multiple AI
	if (player1Score === player2Score){
		alert("It's a tie!");
	}else if(player1Score > player2Score){
		alert("Player 2 Wins!");
	}else if(player1Score < player2Score){
		alert("Player 1 Wins!");
	}
}

function runStartGame(){
	displayGreeting();
	var player1Score = determineScore();
	var player2Score = determineScore();
	alert ("Player 1 Rolled " +player1Score+ " Player 2 Rolled " +player2Score);
	determineWinner(player1Score, player2Score);
}

//var testWinner = determineWinner();
//console.log(testWinner);

runStartGame();