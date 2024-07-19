// function changeBColor() {
//     let myColors = ["blue", "red", "yellow", "darkGrey", "violet", "orange", "green", "indigo", "teal", "white", "#f0f8ff"];
//     let randomColors = Math.floor(Math.random() * myColors.length);
//     randomColors = myColors[randomColors];
//     document.body.style.backgroundColor = randomColors;

//     document.getElementById('color').innerHTML = randomColors;
// }


let myButton = document.querySelector('#btn');
myButton.addEventListener("click", () => {
    let myColors = ["blue", "red", "yellow", "darkGrey", "violet", "orange", "green", "indigo", "teal", "white", "aliceBlue"];
    let randomColors = Math.floor(Math.random() * myColors.length);
    randomColors = myColors[randomColors];
    document.body.style.backgroundColor = randomColors;

    document.getElementById('color').textContent = randomColors;
});


