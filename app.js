var imge_1 = document.getElementById("img1");
var imge_2 = document.getElementById("img2");
var winner = document.querySelectorAll("h1")[0];
var player_1 = document.getElementsByTagName("h1")[1].textContent;
var comupter = document.getElementsByTagName("h1")[2].textContent;





function play(){
    var number_1 = Math.floor(Math.random()*6 +1);
    var number_2 = Math.floor(Math.random()*6 +1);
   
    console.log(number_1);
    console.log(number_2);

    var dicee_1 = "dice" + number_1 + ".png";
    var dicee_2 = "dice" + number_2 + ".png";

    imge_1.setAttribute("src", "./images/"+dicee_1);
    imge_2.setAttribute("src", "./images/"+dicee_2);

    if(number_1 > number_2){
    winner.textContent= player_1+" is the winner!"
    }
    else if(number_1<number_2){
        winner.textContent= comupter +" is the winner!"  
    }
    else{
         winner.textContent="Draw!"
    }
}




