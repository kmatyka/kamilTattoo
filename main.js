var menu = document.getElementById("menu");
var info = document.getElementById("info");
var daneK = document.getElementById("daneK");
var podMenu = document.getElementById("podMenu");
var logoMenu = document.getElementById("logoMenu");
var tekst = document.getElementById("tekst");
window.setInterval(function(){
    if(scrollY>50){
        menu.setAttribute("style","top:0;position:fixed;transition:0.3s;");
    }else{
        menu.setAttribute("style","position:static;transition:0.3s;");
    }
},50);
window.setInterval(function(){
    var szerokosc = window.innerWidth;
    if(szerokosc<1600&&szerokosc>1416){
        info.setAttribute("style","padding-left:15%;");
        daneK.setAttribute("style","padding: 10px;width: 40%;float: left;");
        menu.setAttribute("style","padding-left:5%;");
    }else if(szerokosc<1416&&szerokosc>1300){
        info.setAttribute("style","padding-left:15%;");
        daneK.setAttribute("style","padding: 10px;width: 40%;float: left;");
        menu.setAttribute("style","padding-left:0%;");
        podMenu.setAttribute("style","width: 50%;float: left;padding-top: 20px;");
        logoMenu.setAttribute("style","height: 60px;margin-top: 10px;float: left;margin-right:0;");
    }
    else if(szerokosc<1300&&szerokosc>1140){
        info.setAttribute("style","padding-left:10px;height:100px;");
        daneK.setAttribute("style","padding: 10px;width: 75%;float: left;height:100px;");
        menu.setAttribute("style","padding-left:0%;");
        podMenu.setAttribute("style","width: 50%;float: left;padding-top: 20px;");
        logoMenu.setAttribute("style","height: 60px;margin-top: 10px;float: left;margin-right:0;");
    }else if(szerokosc<1140){
        info.setAttribute("style","padding-left:10px;height:100px;");
        daneK.setAttribute("style","padding: 10px;width: 75%;float: left;height:100px;");
        menu.setAttribute("style","padding-left:0%;");
        podMenu.setAttribute("style","width: 50%;float: left;padding-top: 20px;");
        logoMenu.setAttribute("style","height: 60px;margin-top: 10px;float: left;margin-right:0;");
    }
    else{
        info.setAttribute("style","padding-left:15%;");
        daneK.setAttribute("style","padding: 10px;width: 40%;float: left;");
    }
},50);

var anime = document.getElementsByClassName("anime");
var tab = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
let i = 0;
window.setInterval(function(){
    if(i==tab.length-1){i=0;}
    let j = i-1;
    let u = i+1;
    if(i-1<0){j=tab.length-1;}
    if(i+1>tab.length-1){u=0;}
    console.log(j+" "+i+" "+u);
    anime[0].setAttribute("src","image/animacja/"+tab[j]);
    anime[1].setAttribute("src","image/animacja/"+tab[i]);
    anime[2].setAttribute("src","image/animacja/"+tab[u]);
    i++;
},3000);