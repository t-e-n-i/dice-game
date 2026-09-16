// let startingPlaceholder1 = document.getElementById("img1");

// let placeHolder1 = document.createElement("p");
// placeHolder1.textContent = "Roll the dice!";

// startingPlaceholder1.replaceWith(placeHolder1);

// // -------------------------------------------------------------------------- //

// let startingPlaceholder2 = document.getElementById("img2");

// let placeHolder2 = document.createElement("p");
// placeHolder2.textContent = "Roll the dice!";

// startingPlaceholder2.replaceWith(placeHolder2);



function rollDice() {

// IMAGE 1 ------------------------------------------------------------

    let randomNumber1 = Number(Math.floor(Math.random() * 6) + 1);

    let randomImage1 = `dice${randomNumber1}.png`;
    let imageSource1 = `images/${randomImage1}`;

    let image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src" , imageSource1);

// IMAGE 1 ------------------------------------------------------------

// IMAGE 2 ------------------------------------------------------------

    let randomNumber2 = Number(Math.floor(Math.random() * 6) + 1);

    let randomImage2 = `dice${randomNumber2}.png`;
    let imageSource2 = `images/${randomImage2}`;

    let image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src" , imageSource2);

// IMAGE 2 ------------------------------------------------------------

    let winner = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) {
        winner.innerHTML = "Player 1 wins!"
    } else if (randomNumber1 < randomNumber2) {
        winner.innerHTML = "Player 2 wins!"
    } else if ( randomNumber1 == randomNumber2) {
        winner.innerHTML = "It's a draw!"
    }



}








