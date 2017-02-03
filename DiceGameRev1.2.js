"use strict";
function getUserBet(){
	var betOptions = ["Win ", "Lose ", "TIE ", "Skip Bet "];
	var userBetSelection = prompt("Do you think you will: "+betOptions+" \n Correct: add $13.00 \n Incorrect: deduct $6.50 \n TIE: Correct- automatically win! Incorrect- deduct $13.00 \n Skip Bet: deduct $3.25");
	return userBetSelection;
}

function getRandomBet (betOptions){
	var betOptions = ["Win ", "Lose ", "TIE ", "Skip Bet "];
	var computerBetSelection = Math.floor((Math.random()* betOptions.length >> 0));
	return computerBetSelection;
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

//ver 1.3
	
function walletMonitor(){
		var walletStart = $13.00;
		var walletMax = $52.00; 
		//while (walletStart = 0>= walletMax, walletTotal = < walletMax){
		while (player1Wallet !== walletMax && player2Wallet !== walletMax) {
			//play();
		alert("Insufficent funds for Player " has caused the game to stop, play again!");
}

//function playerWalletBalance(){
	//var walletTotal = $13;
	//var Win = $13.00;
	//var Lose = $6.50;
	//var Tieyay = autoWin;
	//var Tieno = $13.00
	//var Pass = $3.25; 
	//if win = (walletTotal + Win);
	//else if lose = (walletTotal - Lose);
	//else if Tie
		//if correct = tieCorrectChoice();
		//else if incorrect = (walletTotal - Tieno);
	//else if pass = (walletTotal - Pass);
	//else please select from the options above.
//} 
	

//function tieCorrectChoice ()}
//Tieyay = autoWin alert("Player " was correct to select TIE, play again!");
//}

function runStartGame(){
	var userBetSelection = getUserBet();
	var player1Score = determineScore();
	var player2Score = determineScore();
	alert ("Player 1 Rolled " +player1Score+ " Player 2 Rolled " +player2Score);
	determineWinner(player1Score, player2Score);
}

//var testWinner = determineWinner();
//console.log(testWinner);

runStartGame();
