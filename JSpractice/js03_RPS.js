var playerscore = 0;
var computerscore = 0;

scoreupdate.innerHTML = "Hello";
function playerRock(){
    var ComputerPlay=Math.random();
    if (ComputerPlay<1.0/3.0){
        alert("You play Rock! I play Scissors! You win!");
        playerscore++;
        var scoreupdate = document.getElementById("player score");
        scoreupdate.innerHTML = "Your Score: "+playerscore;
    }else if (ComputerPlay<2.0/3.0){
        alert("You play Rock! I play Rock! Tie.");
    }else{

        alert("You play Rock! I play Paper! You lose!");
        computerscore++;
        var scoreupdate = document.getElementById("computer score");
        scoreupdate.innerHTML = "My Score: "+computerscore;
    }
}
function playerPaper(){
    var ComputerPlay=Math.random();
    if (ComputerPlay<1.0/3.0){
        alert("You play Paper! I play Scissors! You lose!");
        computerscore++;
        var scoreupdate = document.getElementById("computer score");
        scoreupdate.innerHTML = "My Score: "+computerscore;
    }else if (ComputerPlay<2.0/3.0){
        alert("You play Paper! I play Rock! You win!");
        playerscore++;
        var scoreupdate = document.getElementById("player score");
        scoreupdate.innerHTML = "Your Score: "+playerscore;
    }else{
        alert("You play Paper! I play Paper! Tie.");
    }
}
function playerScissors(){
    var ComputerPlay=Math.random();
    if (ComputerPlay<1.0/3.0){
        alert("You play Scissors! I play Scissors! Tie.");
    }else if (ComputerPlay<2.0/3.0){
        alert("You play Scissors! I play Rock! You lose!");
        computerscore++;
        var scoreupdate = document.getElementById("computer score");
        scoreupdate.innerHTML = "My Score: "+computerscore;
    }else{
        alert("You play Scissors! I play Paper! You win!");
        playerscore++;
        var scoreupdate = document.getElementById("player score");
        scoreupdate.innerHTML = "Your Score: "+playerscore;
    }
}
