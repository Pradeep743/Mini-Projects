const colors = ["green", "red", "aquamarine", "gray", "papayawhip", "lime", "lightblue", "gold"];

const btn = document.getElementById("btn");
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    // get random number between 0 - length
    const randomNumber = Math.floor(Math.random() * colors.length);
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
})