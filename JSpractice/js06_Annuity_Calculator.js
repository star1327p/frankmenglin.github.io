
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

function paymentprogressdisplay(){
    var paymentprogresstype=document.getElementById("paymentprogress").value;
    var paymentprogressdis=document.getElementById("typeofpayment");
    if(paymentprogresstype=="constant"){
        paymentprogressdis.innerHTML='Each payment is <input type="text" id="eachpayment" name="eachpayment">';
    }else if (paymentprogresstype=="arithmetic"){
        paymentprogressdis.innerHTML='First payment is <input type="text" id="firstpayment" name="firstpayment">';
        paymentprogressdis.innerHTML+='<br> Each payment is <input type="text" id="extra" name="extra"> more than previous one (coule enter negative number).';
    }else if (paymentprogresstype=="geometric"){
        paymentprogressdis.innerHTML='First payment is <input type="text" id="firstpayment" name="firstpayment">';
        paymentprogressdis.innerHTML+='<br> Each payment is <input type="text" id="factor" name="factor"> multiply by the previous payment.';
    }
}

function computevalue(){
    var rate=0.01*document.getElementById("Rate").value;
    var m_=document.getElementById("inputcompoundfreq").value;
    var type_=document.getElementById("inputratetype").value;
    
    if (type_=="discount"){
        m_=-1*m_;
    }else if (type_=="force"){
        m_="inf";
    }
    
    var i=convertrate(rate,m_,1);
    var v=1.0/(1.0+i);

    var nofp=document.getElementById("Total").value;
    var first=document.getElementById("First_Paytime").value;
    var gap=document.getElementById("Paytime_Gap").value;


    var paymentprogresstype=document.getElementById("paymentprogress").value;

    if(paymentprogresstype=="constant"){
        var a=parseFloat(document.getElementById("eachpayment").value);
        var present_value=0.0;
        for(var c=0;c<nofp;c++){
            present_value+=a*Math.pow(v,first+gap*c);
        }
    }else if (paymentprogresstype=="arithmetic"){
        var a=parseFloat(document.getElementById("firstpayment").value);
        var b=parseFloat(document.getElementById("extra").value);
        var present_value=0.0;
        for(var c=0;c<nofp;c++){
            present_value+=(a+b*c)*Math.pow(v,first+gap*c);
        }
    }else if (paymentprogresstype=="geometric"){
        var a=parseFloat(document.getElementById("firstpayment").value);
        var b=parseFloat(document.getElementById("factor").value);
        var present_value=0.0;
        for(var c=0;c<nofp;c++){
            present_value+=(a*Math.pow(b,c))*Math.pow(v,first+gap*c);
        }
    }
    out1=document.getElementById('present_v');
    out2=document.getElementById('accumulated_v');
    accumulated_value=present_value*Math.pow(1.0+parseFloat(i),first+gap*(nofp-1));
    present_value=present_value.toFixed(2);
    accumulated_value=accumulated_value.toFixed(2);
    out1.innerHTML="Present Value of this annuity at t=0 is "+ present_value;
    out2.innerHTML="Accumulated Value of this annuity at the time of the last payment is "+ accumulated_value;
}
