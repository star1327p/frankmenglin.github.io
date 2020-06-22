function display_rule(){
    rule=document.getElementById("gamerule");
    rule.innerHTML= "This is a game of drawing random numbers, played by two players.<br>";
    rule.innerHTML+= "Each player takes turn drawing a number (float) from [0,1] (with uniform probability distribution)<br>";
    rule.innerHTML+= "After each draw, a player can choose to accept/decline the number (s)he draws.<br>";
    rule.innerHTML+= "If a player acceptes a number, that result is final and s(he) cannot draw another number before the end of the game<br>";
    rule.innerHTML+= "If a player declines a number, then it becomes the other player's turn to draw.<br>"
    rule.innerHTML+= "Each player has up to 5 chances to draw. If a player declines the first 4 draws, then (s)he must accept the number from the last (5th) draw (or forfeit the game).<br>"
    rule.innerHTML+= "At the end of the game, the person with higher accepted number wins the game."
    var buttontext=document.getElementById("rule");
    buttontext.innerHTML="Hide Rule"
    buttontext.setAttribute("onClick","hide_rule()")
}

function hide_rule(){
    rule=document.getElementById("gamerule");
    rule.innerHTML=" ";
    var buttontext=document.getElementById("rule");
    buttontext.innerHTML="Display Rule";
    buttontext.setAttribute("onClick","display_rule()");
}

function display_sample(){
    sample=document.getElementById("samplegame");
    sample.innerHTML="Player 1 goes first. Player 2 goes second.<br>";
    sample.innerHTML+="Player 1 draws 0.0126 and declines.<br>"
    sample.innerHTML+="Player 2 draws 0.1234 and declines.<br>"
    sample.innerHTML+="Player 1 draws 0.9123 and accepts.<br>"
    sample.innerHTML+="Player 2 now has 4 chances left, she will keep drawing until she beats 0.9123 (in this case, player 2 wins), or until she uses all the remaining 4 chances.<br>"
    sample.innerHTML+="If player 2 does not draw a number higher then 0.9123 in the remaining 4 chances, player 1 wins."
    var buttontext=document.getElementById("sample");
    buttontext.innerHTML="Hide this example."
    buttontext.setAttribute("onClick","hide_example();");
}

function hide_example(){
    sample=document.getElementById("samplegame");
    sample.innerHTML=" ";
    var buttontext=document.getElementById("sample");
    buttontext.innerHTML="Display an example of a game.";
    buttontext.setAttribute("onClick","display_sample();");
}

function cleargameinfo() {
    var game = document.getElementById("gameinfo");
    game.innerHTML = "";
}

function displaychanceleft(a, b) {
    var chancele = document.getElementById("chanceleft");
    chancele.innerHTML = "You can still draw " + a + " more times.<br>"
    chancele.innerHTML += "I can still draw " + b + " more times."
}

function play() {
    displaychanceleft(5, 5);
    var gamere = document.getElementById("gameresult");
    gamere.innerHTML = "";
    var game= document.getElementById("gameinfo");
    game.innerHTML="Do you want to go first or last?<br>";
    game.innerHTML+="<button id='First' onclick='cleargameinfo();UserDraw(9,-0.1,-0.1,1);'>First</button>";
    game.innerHTML +="<button id='Last' onclick='cleargameinfo();FrankDraw(9,-0.1,-0.1,0);'>Last</button>";
    game.innerHTML +="<button id='Random_Order' onclick='cleargameinfo();RandomStart();'>Random</button>";
}

function RandomStart() {
    y = Math.random();
    if (y > 0.5) { UserDraw(9,-0.1,-0.1,1); } else { FrankDraw(9,-0.1,-0.1,0);}
}

function UserDraw(n, un, fn, m) {
    var tempu;
    var tempf;
    if (un > 0) { tempu = 0; } else { tempu = Math.floor(n / 2); }
    if (fn > 0) { tempf = 0; } else { tempf = Math.floor(n / 2) + m; }
    displaychanceleft(tempu, tempf);

    var game = document.getElementById("gameinfo");
    var x = Math.random();
    var playerchoice = document.getElementById("playerchoicebutton");

    if (n == -1 || (un > 0 && fn > 0)) {
        var gamere = document.getElementById("gameresult");
        if (un > fn) { gamere.innerHTML = "You win!" } else { gamere.innerHTML = "I win!" }
        return 0;
    }

    game.innerHTML+="<br>"

    if (un > 0) {
        FrankDraw(n - 1, un, fn);
    } else {
        game.innerHTML += "<br>You draw " + x;
        game.innerHTML += "<br>Do you want to accept or not?"
        playerchoice.innerHTML += "<button id='useraccept' onclick='useraccept();FrankDraw(" + (n - 1).toString() + "," + x.toString() + "," + fn.toString() + "," + m.toString() + ");'>Accept</button>";
        playerchoice.innerHTML += "<button id='userdecline' onclick='userdecline();FrankDraw(" + (n - 1).toString() + "," + un.toString() + "," + fn.toString() + "," + m.toString() + ");'>Decline</button>";
    }
}

function useraccept() {
    var game = document.getElementById("gameinfo");
    game.innerHTML += "<br>You accept the number!";
}

function userdecline() {
    var game = document.getElementById("gameinfo");
    game.innerHTML += "<br>You decline the number!";
}

function FrankDraw(n, un, fn, m) {
    var tempu;
    var tempf;
    if (un > 0) { tempu = 0; } else { tempu = Math.floor(n / 2) + (1-m); }
    if (fn > 0) { tempf = 0; } else { tempf = Math.floor(n / 2); }
    displaychanceleft(tempu, tempf);

    var game=document.getElementById("gameinfo");
    var x = Math.random();
    var a;
    var playerchoice = document.getElementById("playerchoicebutton");

    playerchoice.innerHTML = "";
    game.innerHTML += "<br>"

    if (n == -1 || (un > 0 && fn > 0)) {
        var gamere = document.getElementById("gameresult");
        if (un > fn) { gamere.innerHTML = "You win!" } else { gamere.innerHTML = "I win!" }
        return 0;
    }

    if (un > 0 && n>1) { a = un; }
    else { a = optimalminaccept(n); }

    if (fn > 0) {
        UserDraw(n - 1, un, fn, m);
    } else {
        game.innerHTML += "<br>I draw " + x;
        if (x >= a) {
            game.innerHTML += "<br>I accept the number!";
            UserDraw(n - 1, un, x, m);
        } else {
            game.innerHTML += "<br>I decline the number!";
            UserDraw(n - 1, un, fn, m);
        }
    }
}

function optimalminaccept(n){
    if (n<=1){
        return 0;
    }else if (n==2){
        return 0.5;
    }else if (n==3){
        return 0.6123724356957945;
    }else if (n==4){
        return 0.7166404661632764;
    }else if (n==5){
        return 0.7496600557855093;
    }else if (n==6){
        return 0.8005856451119897;
    }else if (n==7){
        return 0.8153252042310043;
    }else if (n==8){
        return 0.8458005857446074;
    }else if (n==9){
        return 0.8538020735764572;
    }
}