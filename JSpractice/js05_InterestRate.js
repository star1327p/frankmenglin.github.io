
function convertrate(rate,m,n){
    if(m!="inf" && n!="inf"){
    out=n*(Math.pow(1+rate/m,m/n)-1);}
    else if(m=="inf" && n=="inf"){out=rate;}
    else if(m=="inf"){out=(Math.exp(rate/n)-1)*n;}
    else{out=m*Math.log(1+rate/m);}
    //outdis=out.toFixed(7);
    //alert(outdis);
    return out;
}
function convertrate_out(){
    var rate=0.01*document.getElementById("Rate").value;

    var inputratetype=document.getElementById("inputratetype").value;    
    if (inputratetype=="force"){
        var m="inf"
    }else if (inputratetype=="interest"){
        var m=document.getElementById("inputcompoundfreq").value;
    }else if (inputratetype=="discount"){
        var m=-document.getElementById("inputcompoundfreq").value;
    }
    

    var outputratetype=document.getElementById("outputratetype").value;    
    if (outputratetype=="force"){
        var n="inf"
    }else if (outputratetype=="interest"){
        var n=document.getElementById("outputcompoundfreq").value;
    }else if (outputratetype=="discount"){
        var n=-document.getElementById("outputcompoundfreq").value;
    }
    
    outdis=convertrate(rate,m,n);
    outdis=outdis.toFixed(8);
    
    var answer=document.getElementById("answer");
    answer.innerHTML="Rate = "+100*outdis+"%";
}