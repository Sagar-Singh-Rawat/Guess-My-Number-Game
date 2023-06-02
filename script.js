'use strict'
// Default Value For Score Number 
let score = 20; // .score-number
// To Generate Random Secret Number 
let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
// High score 
let highScore = 0;


// !For testing purpose only-----------------------------------------
// document.querySelector(".secret-number").textContent = secretNumber
// console.log(secretNumber)
// !------------------------------------------------------------------


document.querySelector(".btn-start").addEventListener('click', function () {
    // On Click Start

    // Restore Score to default 20
    score = 20;
    document.querySelector('.score-number').textContent = score;

    // Resting the secret random no.
    secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
    document.querySelector('.secret-number').textContent = "?";

    // Change Start Button Text to "Reset!"
    document.querySelector('.btn-start').textContent = "Reset! 🔁";

    // Change sub heading from "Click on Start! to Play 🔼" to "Start Guessing"
    document.querySelector('.sub-heading').textContent = "Start Guessing ... 🧐";

    // Resetting Input Box
    document.querySelector('.input-box').value = '';
    // Resetting Default Colors
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".secret-number").style.width = "";
})


document.querySelector(".btn-check").addEventListener
    ('click', function () {
        const guess = Number(document.querySelector(".input-box").value);
        console.log(guess);
        // When there is no input
        if (!guess) {
            document.querySelector(".sub-heading").textContent = "⛔ Not a Number, Guess Again!";
        }

        // When Player Wins
        else if (guess === secretNumber) {
            document.querySelector(".sub-heading").textContent = "🎊Correct Guess🎉";
            document.querySelector(".secret-number").textContent = secretNumber
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".secret-number").style.width = "30rem";

            if (score > highScore) {
                highScore = score;
                document.querySelector('.high-score-number').textContent = highScore
            }
        }

        // When The Guess is too high
        else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector(".sub-heading").textContent = "📉 Low Guess,Guess Again!";
                score--;
                document.querySelector(".score-number").textContent = score;
            } else {
                document.querySelector(".sub-heading").textContent = "☠ You Lose,Start Again!";
                document.querySelector(".score-number").textContent = 0;
                document.querySelector('.btn-start').textContent = "Restart!🔂";
            }
        }
        // When Guess is too Low
        else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector(".sub-heading").textContent = "📈 High Guess,Guess Again! ";
                score--;
                document.querySelector(".score-number").textContent = score;
            } else {
                document.querySelector(".score-number").textContent = 0;
                document.querySelector(".sub-heading").textContent = "☠ You Lose,Start Again!";
                document.querySelector('.btn-start').textContent = "Restart!🔂";


            }
        }
    }
    );
