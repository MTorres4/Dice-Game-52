"use strict";
//Create a dice game for a single player against one or multiple AI
//Use one of each type of dice: 4, 6, 8, 10, 12, and 20 sided
//More complicated than just highest number wins
//TODO Player roles, AI roles, compare, repeat
//TODO Dice need to be random and have parameters between 1 + 4, 1 + 6, etc.
//TODO Make it more complex than highest score wins
//TODO Need it to show your roll, add to overall total
//Thought 1- Make a total to both fight to get closest to
//Thought 1 cont'd Total=52, at the end of all 6 rolls, winner is the one closest to 52

//document.write("Player 1 vs. Player 2 epic showdown in whom can get closest to 52 by rolling 6 total die, each one differing in value.");

//ar die4 = Math.floor(Math.random()*4 + 1);
//var score4 = die4;
//Roll 1 User
//console.log("You rolled a "+die4+" which added "+score4+" to your overall");

//var die4A = Math.floor(Math.random()*4 + 1);
//var score4A = die4A;
//Roll 1 AI
//console.log("The computer rolled a "+die4A+" which added "+score4A+" to their overall");

//var die6 = Math.floor(Math.random()*6 + 1);
//var score6 = die6 + die4;
//Roll 2 (Roll 1 + 2) User
//console.log("You rolled a " +die6+" which added "+score6+" to your overall");

//var die6A = Math.floor(Math.random()*6 + 1);
//var score6A= die6A + die4A;
//Roll 2 (Roll 1 + 2) AI
//console.log("The computer rolled a "+die6A+" which added "+score6A+" to their overall");

//var die8 = Math.floor(Math.random()*8 + 1);
//var score8 = die8 + die6 + die4;
//Roll 3 (Roll 1 + 2 + 3) User
//console.log("You rolled a "+die8+" which added "+score8+" to your overall");

//var die8A = Math.floor(Math.random()*8 + 1);
//var score8A = die8A + die6A + die4A;
//Roll 3 (Roll 1 + 2 + 3) AI
//console.log("The computer rolled a "+die8A+" which added "+score8A+" to their overall");

//var die10 = Math.floor(Math.random()*10 + 1);
//var score10 = die10 + die8 + die6 + die4;
//Roll 4 (Roll 1 + 2 + 3 + 4) User
//console.log("You rolled a " +die10+" which added "+score10+" to your overall");

//var die10A = Math.floor(Math.random()*10 + 1);
//var score10A = die10A + die8A + die6A + die4A;
//Roll 4 (Roll 1 + 2 + 3 + 4) AI
//console.log("The computer rolled a "+die10A+" which added "+score10A+" to thier overall");

//var die12 = Math.floor(Math.random()*12 + 1);
//var score12 = die12 + die10 + die8 + die6 + die4;
//Roll 5 (Roll 1 + 2 + 3 + 4 + 5) User
//console.log("You rolled a " +die12+" which added "+score12+" to your overall");

//var die12A = Math.floor(Math.random()*12 + 1);
//var score12A = die12A + die10A + die8A + die6A + die4A;
//Roll 5 (Roll 1 + 2 + 3 + 4 + 5) AI
//console.log("The computer rolled a "+die12A+" which added "+score12A+" to thier overall");

//var die20 = Math.floor(Math.random()*20 + 1);
//var score20 = die20 + die12 + die10 + die8 + die6 + die4;
//Roll 6 (Roll 1 + 2 + 3 + 4 + 5 + 6) User
//console.log("You rolled a " +die20+" which added "+score20+" to your overall");

//var die20A = Math.floor(Math.random()*20 + 1);
//var score20A = die20A + die12A + die10A + die8A + die6A + die4A;
//Roll 6 (Roll 1 + 2 + 3 + 4 + 5 + 6) AI
//console.log("The computer rolled a "+die20A+" which added "+score20A+" to their overall");

//var winGame = 52;

//if (score20, score20A = winGame)
	//console.log("You tied!!")
	//else {
		//(score20, score20A > winGame)
		//var high = (score20, score20A - winGame)
		
//the roll of the die needs to equate to a score

//TEST AREA

function displayGreeting(){
	alert("Welcome to 'Get to 52!!' \n The rules are simple, \n 6 different sided die are rolled and the player closest to 52 wins the round \n in order to win the game, get your total points to 52 before the computer!");
	var betOptions = [Win, Lose, Pass on Guessing];
		prompt("Do you think you will: "+betOptions+" \n if you are right, you will have 5 points added to your total; \n if you are wrong, you will have 3 points deducted from your total; \n or, you can choose to skip betting on this round, remember you run the risk of the computer gaining more points!");
}

function runGame(){
	displayGreeting();
}
runGame();



