/* ********* Official Solution ************************* */
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random for first dice.
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //random for second dice.

//for first dice:
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // image name from dice1.png -> dice6.png
var randomImageSource1 = "images/" + randomDiceImage1; // images source from images/dice1.png -> images/dice6.png

var image1 = document.querySelectorAll("img")[0]; // select first item in the array (first dice).
image1.setAttribute("src", randomImageSource1); // change the image for the first dice.

//for second dice:
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // image name from dice1.png -> dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; // images source from images/dice1.png -> images/dice6.png

var image2 = document.querySelectorAll("img")[1]; // select second item in the array (second dice).
image2.setAttribute("src", randomImageSource2); // change the image for the first dice.

//Player 1 wins:
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "It is a DRAW!";
}


/* **************** My Solution ******************************
var randomNumber1 = Math.floor(((Math.random() * 6) + 1)); //random for first dice.
var randomNumber2 = Math.floor(((Math.random() * 6) + 1)); //random for second dice.

//image changes for first dice:
if (randomNumber1 === 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
else if (randomNumber1 === 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if (randomNumber1 === 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if (randomNumber1 === 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if (randomNumber1 === 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else if (randomNumber1 === 6) {
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

//image changes for second dice:
if (randomNumber2 === 1) {
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if (randomNumber2 === 2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if (randomNumber2 === 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if (randomNumber2 === 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if (randomNumber2 === 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else if (randomNumber2 === 6) {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

checkResult(randomNumber1,randomNumber2);

function checkResult(n1,n2) {
    if (n1 === n2) {
        document.querySelector(".container h1").innerHTML = "DRAW!";
    }
    else if (n1 > n2) {
        document.querySelector(".container h1").innerHTML = "Player 1 WINS!";
    }
    else {
        document.querySelector(".container h1").innerHTML = "Player 2 WINS!";
    }
}
*/
