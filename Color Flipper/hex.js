// let hexColorNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// let myButton = document.querySelector("#btn");
// myButton.addEventListener("click", () => {
//     let hexColor = "#";

//     for(let i = 0; i < 6; i++) {
//         let getRandomNumber = Math.floor(Math.random() * hexColorNumbers.length);
//         hexColor += hexColorNumbers[getRandomNumber];
//     }
    
//     document.getElementById("color").innerHTML = hexColor;
//     document.body.style.backgroundColor = hexColor;
// });

// function getRandomNumber() {
//     return Math.floor(Math.random() * hexColorNumbers.length);
// }


// let myButton = document.querySelector("#btn");
// let hexColorNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// myButton.addEventListener("click", () => {
//     let hex = "#";

//     for(i = 0; i < 6; i++) {
//         let randomNumber = Math.floor(Math.random() * hexColorNumbers.length);
//         hex += hexColorNumbers[randomNumber];
//     }

//     document.getElementById("color").textContent = hex;
//     document.body.style.backgroundColor = hex;
// })

let myButton = document.getElementById("btn");
myButton.addEventListener("click", () => {
    let hexColorValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hex = "#";

    for (i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * hexColorValues.length);
        hex += hexColorValues[randomNumber];
    }

    document.getElementById("color").textContent = hex;
    document.body.style.backgroundColor = hex;
})