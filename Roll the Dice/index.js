// For dice 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice"+ randomNumber1 + ".png")

// For dice 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


// Result
const heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    heading.innerText = "Player One wins !!";
} else if (randomNumber2 > randomNumber1) {
    heading.innerText = "Player Two wins !!";
} else {
    heading.innerText = "Draw!! Play Again";
}

//Play Again
const playAgain = document.querySelector("button");

playAgain.addEventListener("click", () => {
    location.reload();
})
