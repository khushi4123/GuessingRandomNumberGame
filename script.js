let a = document.getElementById("input");
let r = document.getElementById("reset");
let btn = document.getElementById("button");
let btn1 = document.getElementById("btn1");
let d = document.getElementById("output");
let d1 = document.getElementById("output1");
let b = parseInt((Math.random() * 100) + 1);
let ch;
function checkNumber() {


    if (a.value > b && a.value <= 100) {
        d.innerHTML = "To High";
        d1.innerHTML = "Guess again";
        d.style.color = "aquamarine";
    }
    else if (a.value < b && a.value > 0) {
        d.innerHTML = "To Low";
        d1.innerHTML = " Guess again";
        d.style.color = "yellow";
    }
    else if (a.value == b) {
        d.innerHTML = "Wow..!! Congratulation You Won The Game";
        d1.innerHTML = "Want to play again<br>click on <b> NEW GAME </b> button to restart the game";
        d.style.color = "yellow";
        newgame();
    }
    else if (a.value > 100 || a.value <= 0) {
        d.innerHTML = "Please enter the number between 1 to 100";
        d.style.color = "orange";
    }

}


function newgame() {

    btn1.addEventListener("click", () => {
        b = parseInt((Math.random() * 100) + 1);
        d1.innerHTML = "Guess the number";
        a.value = " ";
        b === b;
        checkNumber();

    });



}






