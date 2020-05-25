function noclick(){
    alert("You clicked it!");
    alert("Now you are in big trouble!");
    alert("You will waste some time watching me counting to 100.");
    for (var i=1;i<101;i++){alert(i);}
}

function clickit(){
    alert("You are good at following the instruction.");
    alert("I wish you all the best of luck.");
}

function feelinglucky(){
    alert("Are you sure?");
    alert("Now prove it to me!");
    alert("You will need to toss 6 consecutive heads for me to shut up.");
    var cH=0;
    while(cH<6){
        var toss=Math.random();
        if (toss<0.5){
            alert('You toss a tail! That is unfortunate.');
            cH=0;
        }else{
            cH++;
            alert('Good job. Now you have '+cH+' consecutive heads.');
            if (cH<6){alert('Keep going!');}else{alert('Nicely done! I will shut up now.')}
        }
    }
}
function feelingunlucky(){
    alert("I am sorry to hear that.");
    alert("Draw a card.");
    alert("You draw the ace of spade! You are luckier than you thought.");
    alert("I hope this make you feel better.");
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function practiceaddition() {
    var x = getRndInteger(100,999);
    var y = getRndInteger(100,999);
    alert("What is "+x+"+"+y);
    var z = window.prompt();
    if (z==x+y){
        alert('That is correct. You are very good at addition.')
    }else {
        alert('Wrong! You need to practice more.');
    }
}
    function practicemultiplication() {
        var x = getRndInteger(10,99);
        var y = getRndInteger(10,99);
        alert("What is "+x+"x"+y);
        var z = window.prompt();
        if (z==x*y){
            alert('That is correct. You are very good at multiplication.');
        }else {
            alert('Wrong! You need to practice more.');
        }
    }