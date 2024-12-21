function imageIn(){
    var n = Math.floor(Math.random()*6+1);
    var m = Math.floor(Math.random()*6+1);
    var randomImg = "dice" + n +".png";
    var randomImg1 = "dice" + m +".png";
    var randomImg2  = "images/" + randomImg;
    var randomImg3  = "images/" + randomImg1;
    var img1 = document.querySelectorAll("img")[0]
    var img2 = document.querySelectorAll("img")[1]
    img1.setAttribute("src", randomImg2);
    img2.setAttribute("src",randomImg3)
    if(n > m){
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!!!"
    }
    else if(n < m){
        document.querySelector("h1").innerHTML = "Player 2 Wins!!!🚩"
    }
    else{
        document.querySelector("h1").innerHTML = "Draws!!!"
    }
}