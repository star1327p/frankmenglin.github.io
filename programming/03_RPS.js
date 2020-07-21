var playerscore = 0;
var computerscore = 0;


function playerRock(){
    var gameresult=document.getElementById("game result");
    var ComputerPlay=Math.random();
    if (ComputerPlay<1.0/3.0){
        gameresult.innerHTML = "You play Rock! I play Scissors! You win!";
        playerscore++;
        var scoreupdate = document.getElementById("player score");
        scoreupdate.innerHTML = "Your Score: "+playerscore;
    }else if (ComputerPlay<2.0/3.0){
        gameresult.innerHTML="You play Rock! I play Rock! Tie.";
    }else{

        gameresult.innerHTML="You play Rock! I play Paper! You lose!";
        computerscore++;
        var scoreupdate = document.getElementById("computer score");
        scoreupdate.innerHTML = "My Score: "+computerscore;
    }
}
function playerPaper(){
    var gameresult=document.getElementById("game result");
    var ComputerPlay=Math.random();
    if (ComputerPlay<1.0/3.0){
        gameresult.innerHTML="You play Paper! I play Scissors! You lose!";
        computerscore++;
        var scoreupdate = document.getElementById("computer score");
        scoreupdate.innerHTML = "My Score: "+computerscore;
    }else if (ComputerPlay<2.0/3.0){
        gameresult.innerHTML="You play Paper! I play Rock! You win!";
        playerscore++;
        var scoreupdate = document.getElementById("player score");
        scoreupdate.innerHTML = "Your Score: "+playerscore;
    }else{
        gameresult.innerHTML="You play Paper! I play Paper! Tie.";
    }
}
function playerScissors(){
    var gameresult=document.getElementById("game result");
    var ComputerPlay=Math.random();
    if (ComputerPlay<1.0/3.0){
        gameresult.innerHTML="You play Scissors! I play Scissors! Tie.";
    }else if (ComputerPlay<2.0/3.0){
        gameresult.innerHTML="You play Scissors! I play Rock! You lose!";
        computerscore++;
        var scoreupdate = document.getElementById("computer score");
        scoreupdate.innerHTML = "My Score: "+computerscore;
    }else{
        gameresult.innerHTML="You play Scissors! I play Paper! You win!";
        playerscore++;
        var scoreupdate = document.getElementById("player score");
        scoreupdate.innerHTML = "Your Score: "+playerscore;
    }
}
