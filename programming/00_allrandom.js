
function unirandom(a,b){
    return a+(b-a)*Math.random();
}//random float from a to b (uniform distribution)

function intrandom(a,b){
    Math.floor(Math.random() * (b - a + 1) ) + a;
}//random integer from a to b including both (uniform distribution)

function stdnormalrandom(){
    var u=Math.random();
    var v=Math.random();
    return Math.sqrt(-2*Math.log(u))*Math.cos(2*v*Math.PI);
}//Box Muller to get std normal random variable

function normalrandom(mu,sigma){
    return sigma*stdnormalrandom()+mu;
}//normal random variable with given average and std

function binaryrandom(p){
    var x=Math.random();
    if (x<p){return 1;} else {return 0;}
}//probability p return 1 else 0