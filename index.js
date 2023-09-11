//Will return any number between 1-6
var randomN1 = Math.floor(Math.random()*6 + 1);

//Putting it in source part of Image HTML Tag (images/dice1.png, --, --)
var imgSource1 = "images/dice" + randomN1 + ".png";

//Seleting first Image tag at pos 0. 
var img1 = document.querySelectorAll("img")[0];

//Setting Attribute
img1.setAttribute("src", imgSource1);

//Similarly for Image 2
var randomN2 = Math.floor(Math.random()*6 + 1);
var imgSource2 = "images/dice" + randomN2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imgSource2);

//If player 1 wins
if (randomN1 > randomN2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if (randomN2 > randomN1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}

