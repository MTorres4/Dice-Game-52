"use strict";
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
	//displayGreeting();
	getPlayerBet();
	var player1Score = determineScore();
	var player2Score = determineScore();
	alert ("Player 1 Rolled " +player1Score+ " Player 2 Rolled " +player2Score);
	determineWinner(player1Score, player2Score);
}

//var testWinner = determineWinner();
//console.log(testWinner);

runStartGame();


//ver 1.2

function getPlayerBet(){
	var betOptions = ["Win ", "Lose ", "TIE ", "Skip Bet "];
	var betSelection = prompt("Do you think you will: "+betOptions+" \n Correct: add $13.00 \n Incorrect: deduct $6.50 \n TIE: Correct- automatically win! Incorrect- deduct $13.00 \n Skip Bet: deduct $3.25");
	return betSelection;
}

//function playerDollarTracker(){
	//var baseDollars = $13;
	//var playerWinsDollars = $13;
	//var playerLoseDollars = $9;
	//var playerTie = autoWin;
	//var playerSkipDollars = $3; 
	//do baseDollars
	//while baseDollars =<52
	
//function pointVariance(player1Points, player2Points){
	//var player1Points = playerPointTracker(player1Points);
	//var player2Points = playerPointTracker(player2Points);

























