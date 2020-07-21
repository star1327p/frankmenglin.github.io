var playerscore = 0;
var computerscore = 0;
var gamecount = 0;


function playerSplit(){
    var gameresult=document.getElementById("game result");
    var ComputerPlay = Math.random();
    var displaygamecount = document.getElementById("game count");
    gamecount++;
    displaygamecount.innerHTML = "Number of games played: " + gamecount;
    if (ComputerPlay < 0.4) {
        gameresult.innerHTML = "You split! I split! We trust each other!";
        playerscore++;
        computerscore++;
        var playerscoreupdate = document.getElementById("player score");
        var computerscoreupdate = document.getElementById("computer score");
        playerscoreupdate.innerHTML = "Your Score: " + playerscore;
        computerscoreupdate.innerHTML = "My Score: " + computerscore;
    }else if (ComputerPlay<0.8){
        gameresult.innerHTML = "You split! I steal! Be careful when you decide to trust your competitor.";
        playerscore+=0;
        computerscore+=2;
        var playerscoreupdate = document.getElementById("player score");
        var computerscoreupdate = document.getElementById("computer score");
        playerscoreupdate.innerHTML = "Your Score: " + playerscore;
        computerscoreupdate.innerHTML = "My Score: " + computerscore;
    }else{
        gameresult.innerHTML="You split! I catch! I should have believed you.";
        playerscore += 2;
        computerscore += 0;
        var playerscoreupdate = document.getElementById("player score");
        var computerscoreupdate = document.getElementById("computer score");
        playerscoreupdate.innerHTML = "Your Score: " + playerscore;
        computerscoreupdate.innerHTML = "My Score: " + computerscore;
    }
}
function playerSteal(){
    var gameresult=document.getElementById("game result");
    var ComputerPlay=Math.random();
    var displaygamecount = document.getElementById("game count");
    gamecount++;
    displaygamecount.innerHTML = "Number of games played: " + gamecount;
    if (ComputerPlay < 0.4) {
        gameresult.innerHTML = "You steal! I split! Nice play by you.";
        playerscore += 2;
        computerscore += 0;
        var playerscoreupdate = document.getElementById("player score");
        var computerscoreupdate = document.getElementById("computer score");
        playerscoreupdate.innerHTML = "Your Score: " + playerscore;
        computerscoreupdate.innerHTML = "My Score: " + computerscore;
    }else if (ComputerPlay<0.8){
        gameresult.innerHTML = "You steal! I steal! We are both too greedy.";
        playerscore += 0;
        computerscore += 0;
        var playerscoreupdate = document.getElementById("player score");
        var computerscoreupdate = document.getElementById("computer score");
        playerscoreupdate.innerHTML = "Your Score: " + playerscore;
        computerscoreupdate.innerHTML = "My Score: " + computerscore;
    }else{
        gameresult.innerHTML = "You steal! I catch! I got you, don't be so greedy next time.";
        playerscore += 0;
        computerscore += 2;
        var playerscoreupdate = document.getElementById("player score");
        var computerscoreupdate = document.getElementById("computer score");
        playerscoreupdate.innerHTML = "Your Score: " + playerscore;
        computerscoreupdate.innerHTML = "My Score: " + computerscore;
    }
}
function playerCatch(){
    var gameresult=document.getElementById("game result");
    var ComputerPlay = Math.random();
    var displaygamecount = document.getElementById("game count");
    gamecount++;
    displaygamecount.innerHTML = "Number of games played: " + gamecount;
    if (ComputerPlay<0.4){
        gameresult.innerHTML = "You catch! I split! Why can't you trust me?";
        playerscore += 0;
        computerscore += 2;
        var playerscoreupdate = document.getElementById("player score");
        var computerscoreupdate = document.getElementById("computer score");
        playerscoreupdate.innerHTML = "Your Score: " + playerscore;
        computerscoreupdate.innerHTML = "My Score: " + computerscore;
    }else if (ComputerPlay<0.8){
        gameresult.innerHTML = "You catch! I steal! Nice play, you got me.";
        playerscore += 2;
        computerscore += 0;
        var playerscoreupdate = document.getElementById("player score");
        var computerscoreupdate = document.getElementById("computer score");
        playerscoreupdate.innerHTML = "Your Score: " + playerscore;
        computerscoreupdate.innerHTML = "My Score: " + computerscore;
    }else{
        gameresult.innerHTML = "You catch! I catch! We should both trust each other more.";
        playerscore += 0;
        computerscore += 0;
        var playerscoreupdate = document.getElementById("player score");
        var computerscoreupdate = document.getElementById("computer score");
        playerscoreupdate.innerHTML = "Your Score: " + playerscore;
        computerscoreupdate.innerHTML = "My Score: " + computerscore;
    }
}
