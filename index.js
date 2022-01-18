var oper = document.getElementsByClassName("input");
for(var i = 0;i<oper.length;i++){
    document.getElementsByClassName("input")[i].addEventListener("click",function(){
        var snd = new Audio("audio.wav");
        snd.play();
        var inp = this.innerText;
        document.getElementById("output-value").innerText+=inp;
    });
}
for (var i=0;i<2;i++){
    document.getElementsByClassName("clr")[i].addEventListener("click",function(){
        var snd = new Audio("audio.wav");
        snd.play();
        if(this.innerText == "CE"){
            document.getElementById("output-value").innerText="";
            document.getElementById("history-value").innerText="";   
        }
        else{
            if(document.getElementById("history-value").innerText == ""){
                var str = document.getElementById("output-value").innerText;
                document.getElementById("output-value").innerText=str.substring(0,str.length-1);
            }
            else{ 
                var str = document.getElementById("history-value").innerText;
                document.getElementById("output-value").innerText=str.substring(0,str.length-1);
                document.getElementById("history-value").innerText="";
            }
        }
    });
}
document.getElementById("equal").addEventListener("click",function(){
    var snd = new Audio("audio.wav");
    snd.play();
    var str = document.getElementById("output-value").innerText;
    document.getElementById("output-value").innerText = eval(str);
    document.getElementById("history-value").innerText = str;
});


