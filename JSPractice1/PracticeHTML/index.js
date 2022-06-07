
var player2;
var player1;
var bonus = 500;
var scoreCounter1 = 0;
var scoreCounter2 = 0;
var p1Wins = "Player 1 Wins. Player 2, your a sucka!!";
var p2Wins = "Player 2 Wins. Player 1, your a sucka!!";


function calculatedScore() {



    if (player1 > player2) {
        p1Score = player1 + bonus; //this indicates that they get a bonus 
        scoreCounter1++; 
        console.log("P1 wins:" + scoreCounter1);
        document.getElementById('p1counter').innerHTML = "Player 1 Wins: " + scoreCounter1;
    }

    else {
        p1Score = player1; //this indicates that they wont get a bonus 
    }

    if (player2 > player1) {
        scoreCounter2++;
        console.log("P2 wins:" + scoreCounter2);
        p2Score = player2 + bonus;
        document.getElementById('p2counter').innerHTML = "Player 2 Wins: " + scoreCounter2;
        
    }

    else {
        
        p2Score = player2;
    }

}

function playerMessage(){
    if (scoreCounter1 >= 15) {
        document.getElementById('playerWins').innerHTML = p1Wins;
    }

    if(scoreCounter2 >= 15) {
        document.getElementById('playerWins').innerHTML = p2Wins;
    } 

}

function randomizeScore(){
   player1 = Math.floor(Math.random() * 1501);
   player2 = Math.floor(Math.random() * 1501);
}

randomizeScore(); 
playerMessage();
calculatedScore();

document.getElementById('player1').innerHTML ="Player 1: " + p1Score;
document.getElementById('player2').innerHTML = "Player 2: " + p2Score;



function Everything(){
    
        randomizeScore(); 
        playerMessage(); 
        calculatedScore(); 
        document.getElementById('player1').innerHTML ="Player 1: " + p1Score;
        document.getElementById('player2').innerHTML = "Player 2: " + p2Score;
    
}

