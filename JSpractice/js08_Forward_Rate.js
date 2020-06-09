
function forwardrate(r1, y1, r2, y2){
    var ytemp;
    if (y2 < y1) {
        ytemp = y2;
        y2 = y1;
        y1 = ytemp;
    }
    return Math.pow(Math.pow(1 + r2, y2) / Math.pow(1 + r1, y1), 1.0 / (y2 - y1)) - 1.0;
}

function forwardrate_out() {
    var rate1 = 0.01*parseFloat(document.getElementById("Rate1").value);
    var time1 = parseFloat(document.getElementById("year1").value);
    var rate2 = 0.01*parseFloat(document.getElementById("Rate2").value);
    var time2 = parseFloat(document.getElementById("year2").value);
    var frate = forwardrate(rate1, time1, rate2, time2);
    var output = document.getElementById("answer");
    frate = frate.toFixed(8);
    output.innerHTML = "Given \\( r("+0+","+time1+") \\)" +" is "+ 100.0 * rate1 + "%<br>";
    output.innerHTML += "and \\( r("+0+","+time2+") \\)" +" is "+ 100.0 * rate2 + "%<br>";
    output.innerHTML += "The forward rate \\( r("+time1+","+time2+") \\)" +" is "+ 100.0 * frate + "%";
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
