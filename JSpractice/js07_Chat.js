
function greeting(username) {
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML = username+": Hello Frank!"+"<br>";
    conv.innerHTML+= "Frank: Hello " + username + "! How are you today?"+"<br>";
    choice.innerHTML = "<button type='button' onclick='great(username)'>"+ "Great!"+ "</button>";
    choice.innerHTML += "<button type='button' onclick='OK(username)'>"+ "I am OK."+ "</button>";
    choice.innerHTML += "<button type='button' onclick='terrible(username)'>"+ "Terrible!"+ "</button>";
}

function great(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+": It is great! How about you?"+"<br>";
    conv.innerHTML += "Frank: Me too! I am glad to hear that."+"<br>";
    choice.innerHTML="";
    setTimeout(aftergreet, 1000);
}

function OK(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+": It is OK! It could be better. How about you?"+"<br>";
    conv.innerHTML += "Frank: I am OK. No news is good news!"+"<br>";
    choice.innerHTML="";
    setTimeout(aftergreet, 1000);
}

function terrible(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+": It is terrible!"+"<br>";
    conv.innerHTML += "Frank: I am sorry to hear that. It will get better."+"<br>";
    choice.innerHTML="";
    setTimeout(aftergreet, 1000);
}

function aftergreet(){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += "Frank: How can I help you today?"+"<br>";
    choice.innerHTML =  "<button type='button' onclick='justchat(username)'>"+ "No specific topic. I just want to chat."+ "</button>"+"<br>";
    choice.innerHTML += "<button type='button' onclick='knowmore(username)'>"+ "I want to know more about you."+ "</button>"+"<br>";
    choice.innerHTML += "<button type='button' onclick='seriousdiscuss(username)'>"+ "Let's discuss something related to academic or professional skills."+ "</button>"+"<br>";
    choice.innerHTML += "<button type='button' onclick='US2020discuss(username)'>"+ "Let's talk about 2020 US presidential election."+ "</button>"+"<br>";
    choice.innerHTML += "<button type='button' onclick='gamediscuss(username)'>"+ "Let's talk about a competitive game."+ "</button>"+"<br>";
    choice.innerHTML += "<button type='button' onclick='contactinfo(username)'>"+ "Can I actually talk to/contact you (not just the robot you write)?"+ "</button>"+"<br>";
    choice.innerHTML += "<button type='button' onclick='hate(username)'>"+ "I hate you"+ "</button>"+"<br>";
    choice.innerHTML += "<button type='button' onclick='noneoftheabove(username)'>"+ "None of the above"+ "</button>"+"<br>";
}

function chatend(){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += "Frank: It is nice to talk to you today. Have a nice day!"
    choice.innerHTML= "";
}

function justchat(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+": I just want to chat casually!"+"<br>";
    conv.innerHTML += "Frank: What is your favorite color?"+"<br>";
    choice.innerHTML="Your favorite color is: "
    choice.innerHTML+="<input type='text' id='user_color' name='user_color'></input>";
    choice.innerHTML+="<button type='button' onclick='frankresponsecolor(username);'>Submit</button><br>";
    choice.innerHTML+="<button type='button' onclick='frankresponsestupid(username);'>This is a stupid question.</button><br>";
}

function frankresponsecolor(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    var usercolor = document.getElementById('user_color').value;
    conv.innerHTML += username + ": "+ usercolor+".<br>"
    conv.innerHTML += "Frank: "+usercolor+"!That is also my favorite color. <br>";
    choice.innerHTML="";
    setTimeout(chatend,1000);
}

function frankresponsestupid(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username + ": Stop asking stupid questions, ask me something logical and matured.<br>"
    conv.innerHTML += "Frank: Prove the second isomorphism theorem in group theory: Let \\( G \\) be a group. Let \\( S \\) be a subgroup of \\( G \\), and let \\( N \\) be a normal subgroup of \\( G \\).<br>";
    conv.innerHTML += "Frank: The followings are true.<br>";
    conv.innerHTML += "Frank: 1. The product \\( SN \\) is a subgroup of \\( G \\).<br>";
    conv.innerHTML += "Frank: 2. The intersection \\( S\\cap N\\) is a normal subgroup of \\(S\\).<br>"
    conv.innerHTML += "Frank: 3. The quotient groups \\((SN)/N\\) and \\(S/(S\\cap N)\\) are isomorphic.<br>"   
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    choice.innerHTML = "<button type='button' onclick='justchat(username);'>I'd rather just tell you my favorite color.</button><br>";
    choice.innerHTML += "<button type='button' onclick='userknowanswer(username);'>That is easy for me!</button><br>";
}

function userknowanswer(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username + ": That is easy for me! I know how to do that.<br>";
    conv.innerHTML += "Frank: You are certainly very smart. I respect you a lot.<br>";
    setTimeout(chatend,1000);
}

function knowmore(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+": I want to know more about you."+"<br>";
    conv.innerHTML += "Frank: Alright. I was born in Ames, IA, on 08/28/1990. That makes me a US citizen."+"<br>";
    conv.innerHTML += "Frank: However less than a year after that I moved to Taiwan where my parents worked there. <br>"
    conv.innerHTML += "Frank: I grew up in Taiwan until I finished high school.<br>"
    conv.innerHTML += "Frank: Since late 2008 I lived in California for college and all post graduate studies.<br>"
    choice.innerHTML= "<button type='button' onclick='userfinditcool(username);'>That is cool.</button><br>";
    choice.innerHTML+= "<button type='button' onclick='userfinditboring(username);'>That is boring.</button><br>";
}

function userfinditcool(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+ ": That is cool. Where can I get more information?<br>"
    conv.innerHTML += "Frank: You can find out more on my <a href='https://www.linkedin.com/in/frank-lin-61380692/'> LinkedIn Profile</a>. <br>"
    setTimeout(chatend,1000);
}

function userfinditboring(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+ ": That is boring.<br>"
    conv.innerHTML += "Frank: Life could be boring. I still wish you best of luck for whatever you are pursuing.<br>"
    setTimeout(chatend,2000);
}

function seriousdiscuss(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+": Let's discuss something related to academic or professional skills."+"<br>";
    conv.innerHTML += "Frank: OK it is something serious. Let's connect on <a href='https://www.linkedin.com/in/frank-lin-61380692/'> LinkedIn</a> and we can talk there."+"<br>";
    choice.innerHTML="";
    setTimeout(chatend,2000);
}

function gamediscuss(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+": Let's talk about a competitive game."+"<br>";
    conv.innerHTML += "Frank: OK, which of the following games do you play?"+"<br>";
    choice.innerHTML= "<button type='button' onclick='bridge(username);'> Bridge </button><br>";
    choice.innerHTML+= "<button type='button' onclick='poker(username);'> Poker </button><br>";
    choice.innerHTML+= "<button type='button' onclick='go(username);'> GO </button><br>";
    choice.innerHTML+= "<button type='button' onclick='chess(username);'> Chess </button><br>";
    choice.innerHTML+= "<button type='button' onclick='xiangqi(username);'> Xiangqi </button><br>";
    choice.innerHTML+= "<button type='button' onclick='shogi(username);'> Shogi </button><br>";
    choice.innerHTML+= "<button type='button' onclick='othergame(username);'> None of the above, I play something else. </button><br>";
}

function bridge(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML+=username + ": I play Bridge.<br>"
    conv.innerHTML+="Frank: That is cool. I occasionally play on <a href='https://www.bridgebase.com/'>Bridge Base Online</a> and my user name is frank0. Hope to see you there sometime."+"<br>";
    choice.innerHTML="";
    setTimeout(chatend,1000);
}

function poker(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML+=username + ": I play Poker.<br>"
    conv.innerHTML+="Frank: That is cool. I used to play a little bit of online poker but not at this time. I am sure you have the skill make this a legit source of income."+"<br>";
    choice.innerHTML="";
    setTimeout(chatend,1000);
}

function go(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML+=username + ": I play Go.<br>"
    conv.innerHTML+="Frank: That is cool. I occasionally play on <a href='https://www.foxwq.com/'>Fox Fo</a> and my user name is gsbol. Hope to see you there sometime."+"<br>";
    choice.innerHTML="";
    setTimeout(chatend,1000);
}

function chess(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML+=username + ": I play Chess.<br>"
    conv.innerHTML+="Frank: That is cool. I occasionally play on <a href='https://lichess.org/'>Lichess</a> and my user name is negative_infinity. Hope to see you there sometime."+"<br>";
    choice.innerHTML="";
    setTimeout(chatend,1000);
}

function xiangqi(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML+=username + ": I play Xiangqi.<br>"
    conv.innerHTML+="Frank: That is cool. I know the rule but am a beginner in this game. I will have a lot to learn from you."+"<br>";
    choice.innerHTML="";
    setTimeout(chatend,1000);
}

function shogi(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML+=username + ": I play Shogi.<br>"
    conv.innerHTML+="Frank: That is cool. I know the rule but am a beginner in this game. I will have a lot to learn from you."+"<br>";
    choice.innerHTML="";
    setTimeout(chatend,1000);
}

function othergame(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML+=username + ": Something else that you don't play.<br>"
    conv.innerHTML+="Frank: I am sure you have some great insights. I am afraid I know too little about the game you play to participate in this conversation."+"<br>";
    choice.innerHTML="";
    setTimeout(chatend,1000);
}

function US2020discuss(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+": Let's talk about 2020 US presidential election."+"<br>";
    conv.innerHTML += "Frank: Who will(did) you vote for?"+"<br>";
    choice.innerHTML= "<button type='button' onclick='Trump(username);'>Donald Trump</button><br>";
    choice.innerHTML+="<button type='button' onclick='Biden(username);'>Joe Biden</button><br>";
    choice.innerHTML+="<button type='button' onclick='ThirdParty(username);'>None of the above</button><br>";
    choice.innerHTML+="<button type='button' onclick='NoVote(username);'>I don't/cannot vote.</button><br>";
}

function Trump(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+": Donald Trump."+"<br>";
    conv.innerHTML += "Frank: Not a bad choice! Which of the Donald Trump's viewpoints you agree the most?"+"<br>"
    choice.innerHTML= "Type it here: "
    choice.innerHTML+="<input type='text' id='viewpoints' name='viewpoints'></input>";
    choice.innerHTML+="<button type='button' onclick='userpoliticalview(username);'>Submit</button><br>";
}

function Biden(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+": Joe Biden."+"<br>";
    conv.innerHTML += "Frank: Not a bad choice! Which of the Joe Biden's viewpoints you agree the most?"+"<br>"
    choice.innerHTML= "Type it here: "
    choice.innerHTML+="<input type='text' id='viewpoints' name='viewpoints'></input>";
    choice.innerHTML+="<button type='button' onclick='userpoliticalview(username);'>Submit</button><br>";
}

function ThirdParty(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+": I vote for a third party candidate."+"<br>";
    conv.innerHTML += "Frank: Great! It is good to hear people with different voices/opinions."+"<br>"
    conv.innerHTML += "Frank: Who will you vote for, and which of her/his viewpoints you agree the most?"+"<br>"
    choice.innerHTML= "Type it here: "
    choice.innerHTML+="<input type='text' id='viewpoints' name='viewpoints'></input>";
    choice.innerHTML+="<button type='button' onclick='userpoliticalview(username);'>Submit</button><br>";
}

function NoVote(){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+": I cannot/don't want to vote."+"<br>";
    conv.innerHTML += "Frank: I am sure you have good reasons for this decision. Do you mind sharing?"+"<br>";
    choice.innerHTML= "Type it here: "
    choice.innerHTML+="<input type='text' id='viewpoints' name='viewpoints'></input>";
    choice.innerHTML+="<button type='button' onclick='userpoliticalview(username);'>Submit</button><br>";
}

function userpoliticalview(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    var politicalview=document.getElementById('viewpoints').value;
    conv.innerHTML += username + ": "+ politicalview + "<br>";
    conv.innerHTML += "Frank: I may or may not agree with you, but I am sure we both want USA a better country."+"<br>"
    choice.innerHTML="";
    setTimeout(chatend,2000);
}

function contactinfo(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+": Can I actually talk to you? This bot is boring."+"<br>";
    conv.innerHTML += "Frank: You can contact me by email (frankmenglin@gmail.com)"+"<br>";
    conv.innerHTML += "Frank: You can also connect me on <a href='https://www.linkedin.com/in/frank-lin-61380692/'> LinkedIn</a>.<br>"
    conv.innerHTML += "Frank: Once we know each other more we can also connect on other social medias.<br>"
    choice.innerHTML="";
    setTimeout(chatend,2000);
}

function hate(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+": I hate you."+"<br>";
    conv.innerHTML += "Frank: I hope you are not serious. However if you really mean it...<br>"
    conv.innerHTML += "Frank: You don't have to chat with a person you hate. You can download <a href='https://blocksite.co/'> this</a> to block my website."+"<br>";
    choice.innerHTML="";
    setTimeout(chatend,10000);
}

function noneoftheabove(username){
    var conv=document.getElementById("conversation");
    var choice=document.getElementById("userchoice");
    conv.innerHTML += username+": I want to talk about something else you don't list it here."+"<br>";
    conv.innerHTML += "Frank: I am sure you have some great insights. I am afraid I know too little about the things you are interested in to participate in this conversation."+"<br>";
    choice.innerHTML="";
    setTimeout(chatend,1000);
}